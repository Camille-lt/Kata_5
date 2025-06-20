const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

router.get('/', async (req, res) => {
    try {
        const orders = await prisma.orders.findMany(); 
        res.json(orders); // on envoi les données
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupérations des commandes' });
    }
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  try {
    const order = await prisma.orders.findUnique({
      where: { id },
    });
    if (!order) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la commande' });
  }
});

router.post('/', async (req, res) => {
  const { user_id, status } = req.body;

  try {
    const newOrder = await prisma.orders.create({
      data: {
        user_id,
        status: status || 'pending', // valeur par défaut si non fournie
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la création de la commande" });
  }
});

module.exports = router;
