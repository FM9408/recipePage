import { Box, Stack } from "@mui/material"
import React from "react"
import SocialButtons from "../components/socialbuttons"




export default function FooterNav() {
    return (
        <Box
            sx={{
                
                width: '100%',
                padding:"1%"
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={"space-around"}
                gap={2}
                sx={{
                    width: '100%'
                }}
            >
                <Box >
                    <SocialButtons />
                </Box>
                <Box >
                    
                </Box>
                <Box>
                    hola
                </Box>
            </Stack>
        </Box>
    )
}