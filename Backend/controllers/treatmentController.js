// controllers/treatmentController.js
const Treatment = require('../models/Treatment');
const { NotFoundError, ValidationError } = require('../utils/errors');
exports.createTreatment = async (req, res, next) => {
  const { name, description } = req.body;
  try {
    const treatment = new Treatment({ name, description });
    await treatment.save();
    res.status(201).json({ message: 'Treatment created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getTreatments = async (req, res, next) => {
  try {
    const treatments = await Treatment.find();
    res.json(treatments);
  } catch (error) {
    next(error);
  }
};
