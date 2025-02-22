import React from "react";
import {AppBar, Box, Stack} from "@mui/material"
import NavButton from "../components/navButton";
import { NavbarButtons } from "../config/NavBarConfig";



export default function NavBar() {
    return (
        <AppBar position="static">
            <Stack direction={"row"}>
                
                    {
                        NavbarButtons.map((element) => {
                            return(
                               <Box sx={{width: `${100/NavbarButtons.length}%`}} key={element.title}>
                                <NavButton button={element}/>
                               </Box>
                            )
                        } )
                    }
                
            </Stack>
        </AppBar>
    )
}