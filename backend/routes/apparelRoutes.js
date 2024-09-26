const express = require('express');
const router = express.Router();
const Apparel = require('../models/Apparel');

router.post('/submit-apparel', async (req, res) => {
  try {
    console.log('Request body:', req.body);  // Log the request body
    const newApparel = new Apparel(req.body);
    const savedApparel = await newApparel.save();
    res.json(savedApparel);
  } catch (err) {
    console.error('Error saving apparel:', err.message);  // Log the error message
    res.status(500).json({ message: err.message });
  }
});



// GET - Retrieve All Submissions
router.get('/submissions', async (req, res) => {
  try {
    const apparelList = await Apparel.find();
    res.json(apparelList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT - Update Submission
router.put('/update-submission/:id', async (req, res) => {
  try {
    const updatedApparel = await Apparel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedApparel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE - Delete Submission
router.delete('/delete-submission/:id', async (req, res) => {
  try {
    const deletedApparel = await Apparel.findByIdAndDelete(req.params.id);
    res.json(deletedApparel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
