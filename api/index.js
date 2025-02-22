require("dotenv").config()
const server = require("./src/app")
const {conn} = require("./src/db")
const axios = require("axios")
const port = process.env.PORT || 3001


const recipesMock = async function() {
    try {
        const apiData = await axios.get("https://dummyjson.com/recipes")
        console.log(apiData.data)
        return  apiData.data.recipes
    } catch (error) {
        throw new Error(error)
    }
} 



conn.sync({force: true}).then(async () => {
    await recipesMock().then( response => {
        response.forEach(async (recipe) => {
            const {
                   
                    name,
                    prepTimeMinutes,
                    servings,
                    instructions,
                    rating,
                    description,
                    tools,
                    image,
                    tags,
                    difficulty,
                    ingredients,
                    cookTimeMinutes
                } = recipe
            try {
                const createdRecipe = await conn.model("recipe").create({
                    name,
                    ingredients,
                    description,
                    tools,
                    difficulty,
                    servings,
                    instructions,
                    imageUrl: image,
                    cookTimeMinutes,
                    prepTimeMinutes,
                    stars: rating
                })
        
                await createdRecipe.createImage({
                    url: image,
                    recipeId: createdRecipe.id
                })
                
                tags.forEach(async taggedRecipe => {
                    const [newOrFindTag, created] = await conn.model("tag").findOrCreate({
                        where: {
                            name: taggedRecipe
                        },
                        defaults: {
                           name: taggedRecipe
                       }
                    })
                    await createdRecipe.addTag(newOrFindTag)
                })
            } catch (error) {
                throw new Error(error)
            }
            
        })
    })
}).finally(() => {
    server.listen(port , () => {
        console.log(`Servidor levantado en el puerto ${port}`)
    })
}).catch((err) => {
    throw new Error(err)
})