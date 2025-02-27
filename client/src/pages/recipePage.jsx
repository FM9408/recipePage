import React from "react";
import { Box, Divider, Paper, Rating, Stack, Typography} from "@mui/material"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import GoBackButton from "../components/goBackButton";
import RecipeTags from "../components/recipieTag";
import IngredientCheckbox from "../components/ingredientCheckbox";
import {ReactComponent as  Stockpot} from "../assets/icons/Stockpot.svg" 
import { ReactComponent as Alone } from "../assets/icons/Alone.svg"
import {ReactComponent as Couple}  from "../assets/icons/Couple.svg"
import {SentimentNeutralOutlined, SentimentSatisfied, MoodBad, QueryBuilderOutlined} from "@mui/icons-material"
import {ReactComponent as Groups} from "../assets/icons/Groups.svg"





export default function RecipePage(){
    const [recipe, setRecipe] = React.useState({
    })
    const [stars, setStars] = React.useState(0)
    const params = useParams()
    const recipes = useSelector(state => state.recipes)
    const [recipeId, setRecipeId]=React.useState("")



   
 

    React.useEffect(() => {
        if(recipeId !== recipe.id){
            setRecipeId(params.id)
            recipes.forEach(res => {
                if(res.id === recipeId){
                    setRecipe(res)
                    setStars(res.stars)
                }
            })
        }
    
        
    }, [params.id, recipe, recipeId, recipes])
        


    return (
        <Box>
            <Paper sx={{margin: "1%", padding:"1%"}}>
               <Stack direction={"column"}>
                    <Box sx={{position: "absolute"}}>
                        <GoBackButton />
                    </Box>
                    <Box>
                        <Typography variant="h1" sx={{fontFamily:"Dancing Script"}}>
                            {recipe.name}
                        </Typography>
                    </Box>
                    <Box sx={{width:"100%"}}>
                        <Stack direction={"row"} sx={{width:"100%", alignItems:"center", justifyContent:"space-around"}}>
                              <Box>
                        <Rating value={stars} readOnly precision={0.1} size="large" />
                    </Box>
                    <Box>
                        {
                            Array.isArray(recipe.tags) ? <RecipeTags tags={Array.from(recipe.tags)}/> : <></>
                      }
                    </Box>
                        </Stack>
                    </Box>
                      <Box>
                      <Stack direction={{xs:"column",lg:"row"}} >
                            <Box sx={{overflow:"hidden", width: {xs:"100%", lg:"33%"}, backgroundColor:"blue", height: {xs:"5em", lg:"40em"},position:"relative",borderRadius:"2%"}}>
                                <Box sx={{position:"absolute", top:{xs:"-5em",lg:"0"}, width:{xs:"100%",lg:"40em"}, overflow:"hidden"}} >
                                    <img src={recipe.imageUrl} alt={recipe.name}  style={{scale:"1.2"}} />
                                </Box>
                            </Box>
                            <Box sx={{width:{xs:"100%",lg:"33%"}}}>
                                <Stack direction={"column"} justifyItems={"center"} sx={{width:{xs:"100%"}}} >
                                    <Box sx={{width:{xs:"100%"}}}>
                                        <Paper elevation={5} sx={{width:{xs:"100%"}}}>       
                                            <Box>
                                                <Typography sx={{fontFamily: "Rouge Script", fontSize:{xs:"3em"}}}>Ingredients:</Typography>
                                            </Box>
                                            <Divider />
                                             <Box>
                                        <Stack direction={"column"}>
                                            <Paper >
                                            {
                                     recipe.ingredients && recipe.ingredients.length > 0 ? (
                                         
                                             recipe.ingredients.map((ingredient,i) => {
                                                 return (
                                                     <Box key={ingredient} >
                                                     <IngredientCheckbox ingredient={ingredient}/>
                                                     </Box>
                                                 )
                                             })
                                         
                                     ) : (
                                         <Typography variant="subtitule2">Loading...</Typography> 
                                     )
                                 }    
                                            </Paper> 
                                        </Stack>
                                    </Box>
                                         </Paper>
                                    </Box>
                                   
                                    
                                 </Stack>
                            </Box>
                            <Box sx={{width:{xs:"100%", lg:"33%"}}}>
                                <Stack>
                                    <Box>
                                        <Paper>
                                            <Box>
                                                <Typography sx={{fontFamily: "Rouge Script", fontSize:{xs:"3em"}}}>Information:</Typography>
                                            </Box>
                                            <Divider />
                                            <Box>
                                                 <Stack direction={"column"} justifyContent={"center"} sx={{width:"100%"}} >
                                                <Stack direction={"row"} gap={1} justifyContent={"space-evenly"}>
                                                    <QueryBuilderOutlined />
                                                    <Typography>Prepation time:</Typography>
                                                    <Typography>{recipe.prepTimeMinutes}</Typography>
                                                </Stack>
                                                <Stack direction={"row"}gap={1} justifyContent={"space-evenly"}>
                                                    <Stockpot />
                                                    <Typography>Cooking time:</Typography>
                                                    <Typography>{recipe.cookTimeMinutes}</Typography>
                                                </Stack>
                                                <Stack direction={"row"} gap={2} justifyContent={"space-evenly"}>
                                                    {
                                                        recipe.servings === 1 ? <Alone /> : recipe.servings === 2 ? <Couple /> : <Groups /> 
                                                    }
                                                    <Typography>Servings:</Typography>
                                                    <Typography>{recipe.servings}</Typography>
                                                </Stack>
                                                
                                                <Stack direction={"row"} gap={1} justifyContent={"space-evenly"}>
                                                    {
                                                        recipe.difficulty === "Hard" ? <MoodBad /> : recipe.difficulty === "Medium" ? <SentimentNeutralOutlined /> : <SentimentSatisfied /> 
                                                    }
                                                    <Typography>Difficulty:</Typography>
                                                    <Typography>{recipe.difficulty}</Typography>
                                                </Stack>
                                                
                                            </Stack>
                                            </Box>
                                        </Paper>
                                    </Box>
                                    <Box>
                                        <Paper sx={{margin:"1%"}}>
                                            <Box sx={{margin:"1%"}}>
                                                <Typography sx={{fontFamily: "Rouge Script", fontSize:{xs:"3em"}}}>Instructions: :</Typography>
                                            </Box>
                                            <Divider />
                                            <Box sx={{margin:"1%"}}>
                                                <Stack direction={"column"}>
                                                    {
                                                       recipe.instructions ?  recipe.instructions.map((step, index) => {
                                                            return(
                                                                <Box key={index}> 
                                                                    <Typography variant="h6">
                                                                        {index+1}:  {step} 
                                                                    </Typography>
                                                                </Box>
                                                            )
                                                        }): <>Loading...</>
                                                    }
                                            </Stack>
                                            </Box>
                                        </Paper>
                                       
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                      </Box>
               </Stack>
            </Paper>
        </Box>
    )
}


