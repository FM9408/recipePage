import React from "react";
import { Container, Box, Paper, Stack, useTheme } from "@mui/material";
import NavBar from "../modules/navbar";
import { useParams, Outlet, useLocation } from "react-router";
import TopRatedGallery from "../modules/TopRatedGallery";
import SearchingField from "../components/searchField";
import FooterNav from "../modules/footer"



export default function Hompage() {
    const params = useParams()
    const theme = useTheme()
    const location = useLocation()

    React.useEffect(() => {
        
    }, [params])
    
    return (
        <Container>
            <header>
                <Box>
                    <NavBar />
                    <Box sx={{ margin: "1%" }}>
                        {
                           params.id || location.pathname === "/" ? <></> : <SearchingField />
                        }
                    </Box>
                </Box>
            </header>
            {
                location.pathname !== "/" ? <Box>
                <Outlet />
                </Box> : <Box sx={{position:"relative", width:"100%", height:"fit-content"}}>
                        <TopRatedGallery />
            </Box>
            }
            <Box sx={{ marginTop: "1em", backgroundColor:theme.palette.primary.main, width: "100%"}}>
                <Stack direction={"column"} sx={{width:"100"}}>
                    <Box sx={{width:"100%"}}>
                        <FooterNav />
                    </Box>
                    <Box>
                        
                            <a style={{color: theme.palette.primary.contrastText, textDecoration: "none"}} href="https://www.flaticon.com/free-icons/recipe" title="recipe icons">Recipe icons created by Freepik - Flaticon</a>
                
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}