import React from "react";
import { Grid2, Box, Typography, Stack} from "@mui/material";
import RecipeCard from "../components/recipeCard";
import { NavLink } from "react-router";
import {useSelector} from "react-redux"
import { LocalDiningOutlined } from "@mui/icons-material"
import RecipesPagination from "../components/recipesPagination";


 


export default function RecipiesGrid() {
    const [recipes, setRecpies] = React.useState([])
    const [loading, setLoading] = React.useState(true)
   
    const memoryData = useSelector(state => state.recipes)
    const [paginated, setPaginated] = React.useState([])
   
  


    

   
   


    React.useEffect(() => {
        if (!recipes.length || recipes.length !== memoryData.length) {
            setRecpies(memoryData)
        } else {
            setTimeout(()=> {
                setLoading(false)
            }, 1000) 
          setPaginated(recipes.slice(0, Math.ceil(recipes.length/5)))
        }
    }, [recipes, memoryData])

   
    

    return (
        <Box>
            {loading === false ? (
                <Stack>
                    <Box>
                        {recipes.length !== 0 ? (
                            <Grid2
                                container
                                spacing={2}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                {paginated.map((recepie) => {
                                    return (
                                        <Grid2
                                            sx={{
                                                transition:
                                                    'width .6s ease-in-out .2s',
                                                width: 'fit-content',
                                                display: 'inline-grid',
                                                justifyItems: 'center'
                                            }}
                                            key={recepie.id}
                                        >
                                            <NavLink
                                                style={{
                                                    textDecoration: 'none'
                                                }}
                                                to={`/recipes/${recepie.id}`}
                                                key={recepie.id}
                                            >
                                                <RecipeCard res={recepie} />
                                            </NavLink>
                                        </Grid2>
                                    )
                                })}
                            </Grid2>
                        ) : (
                            <Typography>
                                There are not any recipe that
                            </Typography>
                        )}
                    </Box>
                    <RecipesPagination setPaginated={setPaginated} recipes={recipes} />
                    
                </Stack>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        backgroundColor: 'azure',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50em'
                    }}
                >
                    <Box sx={{}}>
                        <LocalDiningOutlined
                            transform='scale(15)'
                            sx={{ fill: 'silver' }}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    )
}