// pages/research.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const Research = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/research/findings');
        setResearch(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResearch();
  }, []);

  return (
    <Layout>
      <h1>Latest Research Findings</h1>
      <ul>
        {research.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Research;
