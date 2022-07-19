const { Router } = require('express');
const { Diet } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
  const Alldiet = await Diet.findAll();
  res.status(200).send(Alldiet);
});

module.exports = router;
