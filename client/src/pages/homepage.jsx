import React from "react";
import { Container, Box, Paper, } from "@mui/material";
import NavBar from "../modules/navbar";
import { useParams, Outlet } from "react-router";
import SearchingField from "../components/searchField";



export default function Hompage() {
    const params = useParams()

    React.useEffect(() => {
        
    }, [params])
    
    return (
        <Container>
            <header>
                <Box>
                    <NavBar />
                    <Box sx={{ margin: "1%" }}>
                        {
                           params.id ? <></> : <SearchingField />
                        }
                    </Box>
                </Box>
            </header>
            <Box>
                <Outlet />
            </Box>
            <footer style={{marginTop: "1em"}}>
                <Paper>
                    <a href="https://www.flaticon.com/free-icons/recipe" title="recipe icons">Recipe icons created by Freepik - Flaticon</a>
                </Paper>
            </footer>
        </Container>
    )
}