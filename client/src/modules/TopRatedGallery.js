import React from "react"
import { Box, IconButton, Stack, Typography, Divider, useTheme, alpha } from "@mui/material"
import ImageListSlider from "../components/imageListSlider"
import {ArrowLeft, ArrowRight}from "@mui/icons-material"
import { useSelector } from "react-redux"




export default function TopRatedGallery() {
    const recipes = useSelector(state => state.recipes)
    const theme = useTheme()
     const [direction, setDirection] = React.useState('up')
         const [triggerEnter, setTriggerEnter] = React.useState(true)
    const [index, setIndex] = React.useState(0)
    const [topRatedRecipes, setTopRatedRecipes] = React.useState([])
   
   
  function handleIndexGoForward() {
      setTriggerEnter(false)
      setDirection('left')

      setTimeout(() => {
          if (index === topRatedRecipes.length - 1) {
              setIndex(0)
          } else {
              setIndex(index + 1)
          }

          setTriggerEnter(true)
      }, 70)
  }

  function handleIndexGoBackward() {
      setTriggerEnter(false)
      setDirection('right')
      setTimeout(() => {
          if (index === 0) {
              setIndex(topRatedRecipes.length - 1)
          } else {
              setIndex(index - 1)
          }
          setTriggerEnter(true)
      }, 70)
  }
  
    
    
   
    
    
    React.useEffect(() => {
        if (topRatedRecipes.length === 0) {
            setTopRatedRecipes(recipes.filter((recipe) => recipe.stars > 4.7))
        }
       
            
         
       
    }, [topRatedRecipes, recipes, index])

    return (
        <Stack direction={'column'} gap={2}>
            <Divider>
                <Box>
                    <Typography
                        variant='h2'
                        sx={{
                            fontFamily: 'Marck Script',
                            color: theme.palette.secondary.dark,
                           textShadow: `-2px 2px 2px  ${alpha(theme.palette.common.black, .2)}`
                        }}
                    >
                        Recetas destacadas
                    </Typography>
                </Box>
            </Divider>
            <Box>
                <Stack
                    sx={{
                        width: '100%',
                        height: '400px',
                        position: 'relative'
                    }}
                    direction={'row'}
                    alignItems={'center'}
                >
                    <Box sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
                        <IconButton
                            color='white'
                            onClick={() => handleIndexGoBackward()}
                        >
                            <ArrowLeft
                                sx={{ color: { xs: 'white', lg: 'black' } }}
                            />
                        </IconButton>
                    </Box>
                    <>
                        {topRatedRecipes.length > 0 ? (
                            <ImageListSlider index={index} direction={direction} topRatedRecipes={topRatedRecipes} triggerEnter={triggerEnter} handleIndexGoBackward handleIndexGoForward />
                        ) : (
                            <>Loading...</>
                        )}
                    </>
                    <Box sx={{ position: 'absolute', right: '0' }}>
                        <IconButton onClick={() => handleIndexGoForward()}>
                            <ArrowRight
                                sx={{ color: { xs: 'white', lg: 'black' } }}
                            />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}