import React from "react";
import { Container, Box, Paper, } from "@mui/material";
import NavBar from "../modules/navbar";
import { useParams, Outlet, useLocation } from "react-router";
import TopRatedGallery from "../modules/TopRatedGallery";
import SearchingField from "../components/searchField";



export default function Hompage() {
    const params = useParams()
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
            <footer style={{marginTop: "1em"}}>
                <Paper>
                    <a href="https://www.flaticon.com/free-icons/recipe" title="recipe icons">Recipe icons created by Freepik - Flaticon</a>
                </Paper>
            </footer>
        </Container>
    )
}