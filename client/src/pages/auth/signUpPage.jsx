import { Box, Stack } from "@mui/material"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import SignUpForm from "../../modules/auth/signUp"




export default function SignUpPage() {
    const [picture, setPicture] = React.useState("")
    const recipes = useSelector(state => state.recipes)


    useEffect(() => {
        if (picture === "" && recipes.length !== 0) {
                  setPicture(recipes[Math.floor(Math.random()*recipes.length-1)].imageUrl)     
        }

        console.log(picture)
    }, [picture, recipes])

    return (
        <Box>
            <Stack justifyContent={"flex-start"} direction={"row"} sx={{width:"100%"}}>
                <Box sx={{width: "40%", overflow: "hidden", float:"left", borderRadius:"3px"}}>
                    {
                        picture !== "" ? 
                            <Box sx={{width: window.screen.width/2}}>
                                <img src={picture } alt="randon recipe"/>
                        </Box> : <></>
                   }
                </Box>
                <Box>
                    <SignUpForm />
                </Box>
            </Stack>
        </Box>
    )
}