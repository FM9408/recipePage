import React from "react"
import { ImageList, ImageListItem, ImageListItemBar, Slide } from "@mui/material"
import { NavLink } from "react-router"
import { array, string, bool, number, func } from "prop-types"


ImageListSlider.propTypes = {
    triggerEnter: bool,
    topRatedRecipes: array,
    direction: string,
    index: number,
    handleIndexGoBackward: func,
    handleIndexGoForward: func
}

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
    display: { xs: 'none', sm: 'flex' },
    margin: '1%',
    right: 30,
    zIndex: { xs: -1, lg: 0 },
    transform: 'rotate3d(0,1,0,30deg) scaleX(.7)',
    filter: 'blur(7px)',
    position: 'absolute'
}

const actualStyle = {
    margin: '1%',
    left: { xs: 0, sm: 100, md: 200, lg: 300 },
    right: { xs: 0, sm: 100, md: 200, lg: 300 },
    position: 'absolute',
    zIndex: { xs: 0, lg: 1 },
    boxShadow: `-10px 10px 10px 1px rgba(255,202,40,.3)`
}



export default function ImageListSlider({triggerEnter, direction, index, topRatedRecipes, handleIndexGoBackward, handleIndexGoForward}) {
     const [onHover, setOnHover] = React.useState(false)
    
    const containerRef = React.useRef(null)
    
    

    return (
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
                <ImageListItem id='previous-item-container' sx={prevStyle}>
                    <NavLink onClick={() => handleIndexGoBackward()}>
                        <img
                            id='previous-item-pic'
                            src={
                                index > 0
                                    ? `${topRatedRecipes[index - 1].imageUrl}`
                                    : `${
                                          topRatedRecipes[
                                              topRatedRecipes.length - 1
                                          ].imageUrl
                                      }`
                            }
                            alt={
                                index > 0
                                    ? `${topRatedRecipes[index - 1].name}`
                                    : `${
                                          topRatedRecipes[
                                              topRatedRecipes.length - 1
                                          ].namel
                                      }`
                            }
                            width={400}
                            loading='lazy'
                        />
                        {/* <ImageListItemBar
                                                position='bottom'
                                                title={
                                                    index > 0
                                                        ? `${
                                                              topRatedRecipes[
                                                                  index - 1
                                                              ].description
                                                          }`
                                                        : `${
                                                              topRatedRecipes[
                                                                  topRatedRecipes.length -
                                                                      1
                                                              ].description
                                                          }`
                                                }
                                            /> */}
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
                <ImageListItem id='actual-item-container' sx={actualStyle}>
                    <NavLink
                        to={`/recipes/${topRatedRecipes[index].id}`}
                        onPointerEnter={() => setOnHover(true)}
                        onPointerLeave={() => setOnHover(false)}
                    >
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
                            title={topRatedRecipes[index].description}
                            sx={{
                                height: '100%',
                                opacity: onHover ? '100%' : '0%',
                                transition: 'all 1s ease-in-out'
                            }}
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
                <ImageListItem id='next-item-container' sx={nextStyle}>
                    <NavLink onClick={() => handleIndexGoForward()}>
                        <img
                            id='next-item'
                            src={
                                index < topRatedRecipes.length - 1
                                    ? `${topRatedRecipes[index + 1].imageUrl}`
                                    : `${topRatedRecipes[0].imageUrl}`
                            }
                            alt={
                                index < topRatedRecipes.length - 1
                                    ? `${topRatedRecipes[index + 1].name}`
                                    : `${topRatedRecipes[0].name}`
                            }
                            width={400}
                            loading='lazy'
                        />
                        {/* <ImageListItemBar
                                                position='bottom'
                                                title={
                                                    index <
                                                    topRatedRecipes.length - 1
                                                        ? `${
                                                              topRatedRecipes[
                                                                  index + 1
                                                              ].description
                                                          }`
                                                        : `${topRatedRecipes[0].description}`
                                                }
                                            /> */}
                    </NavLink>
                </ImageListItem>
            </Slide>
        </ImageList>
    )
}