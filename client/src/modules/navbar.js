import React from "react";
import {AppBar, Box, Stack, Typography} from "@mui/material"
import NavButton from "../components/navButton";
import { NavbarButtons } from "../config/NavBarConfig";




export default function NavBar() {
    return (
        <AppBar position='static'>
            <Stack direction={'row'} gap={ 2} alignItems={"center"}>
                
                    <Typography sx={{width:"20%"}} variant={"h6"}>El secreto dulce</Typography>
              
               
                    {NavbarButtons.map((element) => {
                        return (
                            <Box
                                sx={{ width: `${100 / NavbarButtons.length}%` }}
                                key={element.title}
                            >
                                <NavButton button={element} />
                            </Box>
                        )
                    })}
                
            </Stack>
        </AppBar>
    )
}