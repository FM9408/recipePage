import { FormControl, InputLabel, Input, FormHelperText, Box, Grid2 } from "@mui/material"
import React from "react"



export default function SignUpFormComponent({setDisabled}) {
    const [input, setinput] = React.useState({
        username: "",
        password: "",
        email:""
    })
    const [errors, setErrors] = React.useState({
        
    })
    
    function handleErrors(e) {
       switch (e.target.name) {
        case "username":
               if (e.target.value.length < 8) {
                   setErrors({
                       ...errors,
                       username: "The username is too short"
                   })
                   setDisabled(true)
               } else if (e.target.value.length > 12) {
                       setErrors({
                           ...errors,
                           username: "The username is too long"
                       })
                   setDisabled(true)
               } else {
                   setErrors({
                       username: null
                   })
                   setDisabled(false)
                }
            
               break
           case "password":
               if (e.target.value.length < 12) {
                   setErrors({
                       ...errors,
                       password:"The password is too short"
                   })
               } else if (Array.from(e.target.value).includes("&") || Array.from(e.target.value).includes("%") || Array.from(e.target.value).includes("_") || Array.from(e.target.value).includes("!")) {
                   setErrors({
                       ...errors,
                       password: "The password cannot include the characters &, %, _, "
                    })   
               }
               break
        default:
            break;
       }
    }

    function handleInputChange(e) {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
        handleErrors(e)
        
    }
            
    return (
        <Grid2 container spacing={4}>
            <Grid2 size={6}>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input
                        id='username'
                        onChange={(e) => handleInputChange(e)}
                        value={input.username}
                        name='username'
                        error={errors.username}
                    />
                    <FormHelperText>{errors.username}</FormHelperText>
                </FormControl>
            </Grid2>
            <Grid2 size={6}>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input
                        id='password'
                        onChange={(e) => handleInputChange(e)}
                        value={input.password}
                        name='password'
                        error={errors.password}
                    />
                    <FormHelperText>{errors.password}</FormHelperText>
                </FormControl>
            </Grid2>
        </Grid2>
    )
}