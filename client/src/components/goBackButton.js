import React from "react"
import { IconButton, Box } from "@mui/material"
import {ArrowBack} from "@mui/icons-material"
import { useNavigate,} from "react-router"



export default function GoBackButton() {
    const navigate = useNavigate()


  
    return (
        <Box>
            <IconButton onClick={() => navigate(window.history.back()) }>
                <ArrowBack />
            </IconButton>
        </Box>
    )
}