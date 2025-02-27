import React from "react"
import { footerConfig } from "../config/footerConfig"
import {Link } from "react-router"
import { IconButton, Stack, useTheme, Divider, Typography } from "@mui/material"




export default function SocialButtons() {
    const theme = useTheme()
    


    return (
        <Stack>
                                <Typography variant="body1" color={theme.palette.primary.contrastText }>Visita nuestras redes sociales:</Typography>
                                <Divider sx={{color: theme.palette.primary.contrastText}} />
                               
        <Stack justifyContent={"space-evenly"} direction={"row"}sx={{margin:"1%", width:"100%"}}>
            {
                footerConfig.social.map((social) => {
                    return (
                        <Link to={social.href} key={social.title}>
                            <IconButton sx={{color: theme.palette.primary.contrastText, "&:hover": {color: theme.palette.secondary.dark}, transition:"all .2s ease-in-out" }} title={social.title}>
                                {social.icon}
                            </IconButton>
                        </Link>
                    )
                })
            }
        </Stack>
            </Stack>
    )
}


