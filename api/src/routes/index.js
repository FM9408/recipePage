const {Router} = require("express")
const recipesRouter = require("./recipes")
 
const mainRouter = Router()

mainRouter.use("/recipes", recipesRouter)




module.exports = mainRouter