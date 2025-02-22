const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")
const mainRouter = require("./routes/index")

require("./db")


const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))
server.use(bodyParser.json({limit: "50mb"}))
server.use(cookieParser())
server.use(morgan("dev"))

server.use(cors())
server.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", process.env.NODE.ENV === "production" ? process.env.CLIENT_URL : "*" )
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Origin, Content-Type, Accept")
    res.header("Access-Control-Allow-Credentials", "true" )
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    next()
})


server.use("/", mainRouter)


server.use((error,req,res,next) => {
    res.status(error.status).send(`${error.name} ${error.message}`)
})


module.exports = server