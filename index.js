const express = require('express')
const app = express()
const port = 3000

const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


app.get('/test', async (req, res) => {
    const menus = await prisma.menus.findMany()
    // res.json(result.rows); // Renvoie les données en JSON
console.log(menus);
res.json({message: menus});
});


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
