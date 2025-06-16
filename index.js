const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());


const routerMenu = require('./routes/menu')
app.use('/menu', routerMenu)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
