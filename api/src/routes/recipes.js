const {Router} = require("express")
const {getAllRecipes, queryRecipesSearch,queryRecipesByTagName,queryAllTags } = require("../controllers/recipes")  

const recipesRouter = Router()

recipesRouter.get("/all", getAllRecipes)
recipesRouter.get("/search", queryRecipesSearch)
recipesRouter.get("/searchByTag", queryRecipesByTagName)
recipesRouter.get("/getTags",queryAllTags )



module.exports = recipesRouter