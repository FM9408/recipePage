require("dotenv").config()
const express = require("express")
const path = require("path")
const port = process.env.PORT || 3000

const client = express()

client.use(express.static("build"))

client.get("*", function (req, res) {
    res.sendFile(path.join(__dirname,"build", "index.html"))
})

client.listen(port, () => {
    console.log( `cliente levantado en el puerto ${port}`)
})