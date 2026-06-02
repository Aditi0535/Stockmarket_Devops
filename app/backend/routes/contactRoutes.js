const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Adjust the path as necessary

// Example POST route for contact form submissions

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Saved contact:', contact); // This will print to your terminal
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

module.exports = router;
