import React from "react";
import { Box, Divider, Paper, Stack, Typography, IconButton} from "@mui/material"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import GoBackButton from "../components/goBackButton";
import RecipeTags from "../components/recipieTag";
import IngredientCheckbox from "../components/ingredientCheckbox";
import {ReactComponent as  Stockpot} from "../assets/icons/Stockpot.svg" 
import {ReactComponent as Alone} from "../assets/icons/Alone.svg"
import {ReactComponent as Couple}  from "../assets/icons/Couple.svg"
import {SentimentNeutralOutlined, SentimentSatisfied, MoodBad, QueryBuilderOutlined} from "@mui/icons-material"
import {ReactComponent as Groups} from "../assets/icons/Groups.svg"





export default function RecipePage(){
    const [recipe, setRecipe] = React.useState({
    })
    const params = useParams()
    const recipes = useSelector(state => state.recipes)
    const [recipeId, setRecipeId]=React.useState("")



   
 

    React.useEffect(() => {
        if(recipeId !== recipe.id){
            setRecipeId(params.id)
            recipes.forEach(res => {
                if(res.id === recipeId){
                    setRecipe(res)
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
                    <Box>
                        {
                            Array.isArray(recipe.tags) ? <RecipeTags tags={Array.from(recipe.tags)}/> : <></>
                      }
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



//  {/* Grid general */}
//  <Grid2 container direction={"column"} justifyContent={"space-around"}>
//  {/* Grid Del Titulo */}
//  <Grid2 borderBottom={"1px solid black"} marginBottom={"3%"}>
//      <Box>
//          <Typography variant="h1" sx={{fontFamily:"Dancing Script"}}>
//              {recipe.name}
//          </Typography>
//      </Box>
//  </Grid2>
//  {/*Grid del cuerpo */}
//  <Grid2>
//      {/* Grid de la Imagen */}
//      <Grid2 container direction={{xs:"column", md:"row"}}>
//          <Grid2 sx={{overflow:"hidden", width: {xs:"100%", lg:"25%"}, backgroundColor:"blue", height: {xs:"5em", lg:"40em"},position:"relative",borderRadius:"2%"}}>
//              <Box sx={{position:"absolute", top:{xs:"-5em",lg:"0"}, width:{xs:"100%",lg:"40em"}}} >
//                  <img src={recipe.imageUrl} alt={recipe.name}  style={{scale:"1.2"}} />
//              </Box>
//          </Grid2>
//          {/* Grid de la seccion ingredientes e informacion*/}
//         <Grid2 container direction={{xs:"column",lg:"row"}} sx={{width:"100%"}}>
//          <Grid2 sx={{justifyItems:"center", height:"fit-content" }}>
//              {/*Grid y stack de los ingredientes */}
//                  <Grid2 container direction={"column"} justifyItems={"center"} sx={{width:{xs:"100%"}}}>
//                      <Grid2 sx={{width:{xs:"100%"}}}>
//                              <Paper elevation={5} sx={{width:{xs:"100%"}}}>
//                                  <Typography sx={{fontFamily: "Rouge Script", fontSize:{xs:"3em"}}}>Ingredients:</Typography>
//                              </Paper>
//                      </Grid2>
//                      <Divider />
//                      <Grid2 sx={{backgroundColor:"bisque", height:"89%"}} >
//                          <Paper sx={{width:"80%%", padding:"1%", height:"95%", margin:"3%", borderRadius:"2%"}}>
//                              <Stack >
//                                  {
//                                      recipe.ingredients && recipe.ingredients.length > 0 ? (
                                         
//                                              recipe.ingredients.map((ingredient,i) => {
//                                                  return (
//                                                      <Grid2 key={ingredient} container direction={"row"} sx={{}}>
//                                                      <IngredientCheckbox ingredient={ingredient}/>
//                                                      </Grid2>
//                                                  )
//                                              })
                                         
//                                      ) : (
//                                          <Typography variant="subtitule2">Loading...</Typography> 
//                                      )
//                                  }
//                              </Stack>
//                          </Paper>
//                      </Grid2>  
//                  </Grid2>
//          </Grid2>
//          {/* informacion*/}
//          <Grid2 sx={{width:{xs:"100%", lg:"70%"}}} justifyItems={"center"}>
//             <Paper elevation={5} sx={{width:{xs:"100%"}}}>
//              <Stack>
//                      <Typography sx={{fontFamily: "Rouge Script", fontSize:{xs:"3em"}}}>Nutritional information:</Typography>
//                  </Stack>
//             </Paper>
//          </Grid2>
//         </Grid2>
//      </Grid2>
//  </Grid2>
// </Grid2>