import React from "react";
import {AppBar, Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material"
import NavButton from "../components/navButton";
import json2mq from "json2mq";
import NavbarMenu from "../components/navbarMenu";
import { NavbarButtons } from "../config/NavBarConfig";




export default function NavBar() {
    const theme = useTheme()
    const match = useMediaQuery(
        json2mq({
            maxWidth: theme.breakpoints.values.md
        })
    )
    return (
        <AppBar position='static'>
            <Stack direction={'row'} gap={2} alignItems={'center'}>
                {!match ? (
                    <>
                        <Typography
                            sx={{ width: match ? '50%' : '20%' }}
                            variant={'h6'}
                        >
                            El secreto dulce
                        </Typography>
                        {NavbarButtons.map((element) => {
                            return (
                                <Box
                                    sx={{
                                        width: `${100 / NavbarButtons.length}%`
                                    }}
                                    key={element.title}
                                >
                                    <NavButton button={element} />
                                </Box>
                            )
                        })}
                    </>
                ) : (
                    <>
                        <NavbarMenu />
                        <Typography
                            sx={{ width: match ? '30%' : '20%' }}
                            variant={'h6'}
                        >
                            El secreto dulce
                        </Typography>
                    </>
                )}
            </Stack>
        </AppBar>
    )
}