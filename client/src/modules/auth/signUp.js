import { Box, Button } from "@mui/material"
import React, { useState } from "react"
import SignUpFormComponent from "../../components/auth/signUp"



export default function SignUpForm() {
    const[disabled, setDisabled] = useState(true)

   
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
           
            <SignUpFormComponent setDisabled={setDisabled} />
            <Button disabled={disabled}>Sign Up</Button>
        </Box>
    )
}