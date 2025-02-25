import React from "react"
import { Box, Fade, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Slide} from "@mui/material"
import {ArrowLeft, ArrowRight}from "@mui/icons-material"
import { useSelector } from "react-redux"
import { NavLink } from "react-router"

const prevStyle = {
    margin: '1%',
    left: '5%',
    display: { xs: 'none', sm: 'flex' },
    transform: 'rotate3d(0,-1,0,30deg) scaleX(.7)',
    position: 'absolute',
    zIndex: { xs: -1, lg: 0 },
    filter: 'blur(7px)'
}
const nextStyle = {
    display:{xs:"none", sm:"flex"},
    margin: '1%',
    right: 30,
    zIndex: {xs:-1, lg: 0 },
    transform: 'rotate3d(0,1,0,30deg) scaleX(.7)',
    filter: 'blur(7px)',
    position: 'absolute'
}

const actualStyle = {
    margin: '1%',
    left: {xs: 0, sm:100, md: 200,lg: 300 },
    right: {xs: 0, sm:100, md: 200, lg: 300},
    position: "absolute",
    zIndex: {xs:0,lg: 1},
    boxShadow: `-10px 10px 10px 1px rgba(255,202,40,.3)`
}

export default function TopRatedGallery() {
    const recipes = useSelector(state => state.recipes)
    const [index, setIndex] = React.useState(0)
    const [topRatedRecipes, setTopRatedRecipes] = React.useState([])
    const [direction, setDirection] = React.useState("up")
    const [triggerEnter, setTriggerEnter] = React.useState(true)
    const containerRef = React.useRef(null);
   

    function handleIndexGoForward() {
       setTriggerEnter(false)
        setDirection("left")
        
        setTimeout(() => {
            if (index === topRatedRecipes.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }

            setTriggerEnter(true)
       },70)
       
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
       },70)

    }
    
    
   
    
    
    React.useEffect(() => {
        if (topRatedRecipes.length === 0) {
            setTopRatedRecipes(recipes.filter((recipe) => recipe.stars > 4.7))
        }
       
             setTimeout(function () {
                 handleIndexGoForward()
                 
             }, 9000)
         
       
    }, [topRatedRecipes, recipes, index])

    return (
        <Stack
            sx={{ width: '100%', height: '400px', position: 'relative' }}
            direction={'row'}
            alignItems={'center'}
        >
            <Box sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
                <IconButton
                    color='white'
                    onClick={() => handleIndexGoBackward()}
                >
                    <ArrowLeft sx={{ color: { xs: 'white', lg: 'black' } }} />
                </IconButton>
            </Box>
            <>
                {topRatedRecipes.length > 0 ? (
                    <ImageList
                        sx={{
                            width: `100%`,
                            height: 'fit-content',
                            display: 'inline-flex',
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Slide
                            in={triggerEnter}
                            direction={
                                direction === 'up'
                                    ? 'up'
                                    : direction === 'left'
                                    ? 'right'
                                    : 'left'
                            }
                            container={containerRef.current}
                            mountOnEnter
                            unmountOnExit
                            appear
                            exit={!triggerEnter}
                        >
                            <ImageListItem
                                id='previous-item-container'
                                sx={prevStyle}
                            >
                                <NavLink>
                                    <img
                                        id='previous-item-pic'
                                        src={
                                            index > 0
                                                ? `${
                                                      topRatedRecipes[index - 1]
                                                          .imageUrl
                                                  }`
                                                : `${
                                                      topRatedRecipes[
                                                          topRatedRecipes.length -
                                                              1
                                                      ].imageUrl
                                                  }`
                                        }
                                        alt={
                                            index > 0
                                                ? `${
                                                      topRatedRecipes[index - 1]
                                                          .name
                                                  }`
                                                : `${
                                                      topRatedRecipes[
                                                          topRatedRecipes.length -
                                                              1
                                                      ].namel
                                                  }`
                                        }
                                        width={400}
                                        loading='lazy'
                                    />
                                    <ImageListItemBar
                                        position='bottom'
                                        title={
                                            index > 0
                                                ? `${
                                                      topRatedRecipes[index - 1]
                                                          .description
                                                  }`
                                                : `${
                                                      topRatedRecipes[
                                                          topRatedRecipes.length -
                                                              1
                                                      ].description
                                                  }`
                                        }
                                    />
                                </NavLink>
                            </ImageListItem>
                        </Slide>
                        <Slide
                            in={triggerEnter}
                            direction={direction}
                            mountOnEnter
                            unmountOnExit
                            appear
                            container={containerRef.current}
                            exit={!triggerEnter}
                        >
                            <ImageListItem
                                id='actual-item-container'
                                sx={actualStyle}
                            >
                                <NavLink>
                                    <img
                                        id='actual-item'
                                        src={`${topRatedRecipes[index].imageUrl}`}
                                        alt={topRatedRecipes[index].name}
                                        width={600}
                                        height={400}
                                        loading='lazy'
                                    />
                                    <ImageListItemBar
                                        position='bottom'
                                        title={
                                            topRatedRecipes[index].description
                                        }
                                    />
                                </NavLink>
                            </ImageListItem>
                        </Slide>
                        <Slide
                            container={containerRef.current}
                            in={triggerEnter}
                            direction={
                                direction === 'up'
                                    ? 'up'
                                    : direction === 'right'
                                    ? 'left'
                                    : 'right'
                            }
                            mountOnEnter
                            appear
                            unmountOnExit
                            exit={!triggerEnter}
                        >
                            <ImageListItem
                                id='next-item-container'
                                sx={nextStyle}
                            >
                                <NavLink>
                                    <img
                                        id='next-item'
                                        src={
                                            index < topRatedRecipes.length - 1
                                                ? `${
                                                      topRatedRecipes[index + 1]
                                                          .imageUrl
                                                  }`
                                                : `${topRatedRecipes[0].imageUrl}`
                                        }
                                        alt={
                                            index < topRatedRecipes.length - 1
                                                ? `${
                                                      topRatedRecipes[index + 1]
                                                          .name
                                                  }`
                                                : `${topRatedRecipes[0].name}`
                                        }
                                        width={400}
                                        loading='lazy'
                                    />
                                    <ImageListItemBar
                                        position='bottom'
                                        title={
                                            index < topRatedRecipes.length - 1
                                                ? `${
                                                      topRatedRecipes[index + 1]
                                                          .description
                                                  }`
                                                : `${topRatedRecipes[0].description}`
                                        }
                                    />
                                </NavLink>
                            </ImageListItem>
                        </Slide>
                    </ImageList>
                ) : (
                    <>Loading...</>
                )}
            </>
            <Box sx={{ position: 'absolute', right: '0' }}>
                <IconButton onClick={() => handleIndexGoForward()}>
                    <ArrowRight sx={{ color: { xs: 'white', lg: 'black' } }} />
                </IconButton>
            </Box>
        </Stack>
    )
}