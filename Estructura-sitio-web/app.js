const express = require('express')
const app = express()
const path = require('path')

//const publicpath = path.resolve(__dirname, "./public")
//const home = path.resolve(__dirname)

app.use(express.static(path.resolve(__dirname, "./public")))
app.listen(3000, () => {
    console.log("abrimos puerto 3000")
})
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})