const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/index.ejs', { title: 'Головна сторінка' });
});

module.exports = router;
