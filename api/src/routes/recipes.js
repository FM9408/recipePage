const {Router} = require("express")
const {getAllRecipes, queryRecipesSearch,queryRecipesByTagName } = require("../controllers/recipes")  

const recipesRouter = Router()

recipesRouter.get("/all", getAllRecipes)
recipesRouter.get("/search", queryRecipesSearch)
recipesRouter.get("/searchByTag", queryRecipesByTagName)



module.exports = recipesRouter