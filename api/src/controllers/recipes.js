const {Recipe, Tag, Image } = require("../db")
const {Op} = require("sequelize")


async function getAllRecipes(req,res){
    try {
    
        const allRecipies = await Recipe.findAll({
            include: {all: true, nested: true }
        })
        res.status(200).send(allRecipies)
    
    } catch (error) {
        throw new Error(error)
    }
}

async function queryRecipesSearch(req, res) {
    let {serchingText } = req.query
    
    try {
        const queryRecipes = await Recipe.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.iLike]: `%${serchingText}%`
                        },
                        // description: {
                        //     [Op.]: `${serchingText}`
                        // }
                    }
                ]
            },
            include: {all: true, nested: false}
        })

        const queryTags = await Tag.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.iLike]: `%${serchingText}%`
                        }
                    }
                ]
            },
            include: {all: true, nested: false}
        })
        queryTags.forEach(async (tag) => {
            const taggedRecipes = await tag.getRecipes()
            taggedRecipes.forEach(async (recipe) => {
                
                let alreadyIncluded = false
                const queryRecipebyTag = await Recipe.findByPk(recipe.id,{
                    include: Tag,
                    
                })
                Object.assign(tag, queryRecipebyTag)
                queryRecipes.forEach(res => {
                    // console.log(res)
                    if (res.id === recipe.taggable_recipe.recipeId) {
                        
                        alreadyIncluded = true
                    }
                });
                if (!alreadyIncluded) {
                    queryRecipes.push(recipe)
                }
            })
        })

        // console.log(queryRecipes)

        res.status(200).send(queryRecipes)
    } catch (error) {
         throw new Error(error)
    }
}


async function queryRecipesByTagName(req, res) {
    const { tagName } = req.query
    try {
        const queriedTag = await Tag.findOne({
            where: {
                name: tagName
            }
        })


        const queriedRecipes = await queriedTag.getRecipes({ include: [Tag, Image] })
        console.log(queriedRecipes)
        res.status(200).send(queriedRecipes)
    } catch (error) {
        
    }
    
}


module.exports = {
    getAllRecipes,
    queryRecipesSearch,
    queryRecipesByTagName
}