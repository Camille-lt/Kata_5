const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());


const routerMenu = require('./routes/menu')
app.use('/menu', routerMenu)

const routerOrders = require('./routes/orders')
app.use('/orders', routerOrders)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

