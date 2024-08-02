// controllers/researchController.js
const Research = require('../models/Research');
const axios = require('axios');
const { NotFoundError, ValidationError } = require('../utils/errors');
exports.createResearch = async (req, res, next) => {
  const { title, content, hospital } = req.body;
  try {
    const research = new Research({ title, content, hospital });
    await research.save();
    res.status(201).json({ message: 'Research created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getResearch = async (req, res, next) => {
  try {
    const research = await Research.find();
    res.json(research);
  } catch (error) {
    next(error);
  }
};

exports.fetchResearchFindings = async (req, res) => {
  try {
    // Step 1: Search for the latest health research articles
    const searchResponse = await axios.get('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi', {
      params: {
        db: 'pubmed',
        term: 'latest health research',
        retmode: 'json',
        retmax: 10,
      },
    });

    const pmids = searchResponse.data.esearchresult.idlist.join(',');

    // Step 2: Retrieve article summaries using the PMIDs
    const summaryResponse = await axios.get('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi', {
      params: {
        db: 'pubmed',
        id: pmids,
        retmode: 'json',
      },
    });
  const data= summaryResponse.data.result;
  // res.json(data);
const articles = Object.keys(data)
.filter(key => key !== 'uids')
.map(key => {
  const article = data[key];
  return {
    imageUrl: article.image ? article.image[0]: 'defaultImageUrl.jpg',
    title: article.title,
    subtitle: article.sorttitle, // or other appropriate field
    avatarUrl: article.avatarUrl || 'defaultAvatarUrl.jpg',
    author: article.lastauthor,
    publishedDate: article.pubdate,
    link: article.elink ? article.elink[0].url : `https://pubmed.ncbi.nlm.nih.gov/${key}/`,
  };
});
// console.log(articles);
res.json(articles);
  } catch (error) {
    console.error('Error fetching research articles:', error);
  }
};
