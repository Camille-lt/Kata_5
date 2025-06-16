const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); 

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB


router.get('/', async (req, res) => {
  try {
    const menus = await prisma.menu.findMany(); // ✅ menu (singulier, avec le bon modèle)
    res.json(menus); // on envoie les données telles quelles
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des menus' });
  }
});

module.exports = router;