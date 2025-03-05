import { Box, Container, FormControl, FormHelperText, Input, Paper, Typography, Stack, Divider, IconButton, useMediaQuery, useTheme } from "@mui/material"
import AddAnIngredientButton from "../components/addAnIngredientButton"
import AddAnInstrucctionModule from "../modules/AddAnInstrucctionModule"
import AddAnIgredientModule from "../modules/AddAnIngredientModule"
import React from "react"
import {Add} from "@mui/icons-material"
import json2mq from "json2mq"


export default function AddARecipePage() {
    const theme = useTheme()
    const match = useMediaQuery(
        json2mq({
            maxWidth: theme.breakpoints.values.md
        })
    )
    const [input, setInput] = React.useState({
        title: "",
        ingts: []
    })
     let [ingredients, setIngredients] = React.useState([])
    let [instructions, setInstructions] = React.useState([])

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
    }

    React.useEffect(() => {
        
    }, [instructions,
        setInstructions
    ])



    function handleSubmitRecipe(e) {
        e.preventDefult()
        setInput({
            ...input,
            ingts: ingredients
        })
    }

    return (
        <Container>
            <Paper sx={{margin:"1%", padding:"1%"}}>
                <Stack direction={"column"}>
                <Box sx={{justifyItems: "center" }}>
                    <Typography variant="h2" fontFamily={"Dancing Script"}>Añade una nueva receta</Typography>
                     <FormControl sx={{width: input.title.length > 20 ? `${8*input.title.length}px` : "20%",justifyItems:"center",  display:"flex" }}>
                        <Input required sx={{justifyContent:"center"}} name="title" onChange={(e) => handleInputChange(e)}  placeholder="Escribe el nombre de la receta" value={input.title} />
                    <FormHelperText></FormHelperText>
                </FormControl>
                </Box>
                    <Box>
                         <Stack direction={match? "column":"row"} sx={{justifyContent:"space-between"}}>
                        <AddAnIgredientModule ingredients={ingredients} setIngredients={setIngredients}/>
                
                        <AddAnInstrucctionModule match={match} instructions={instructions} setInstructions={setInstructions } /> 
                    </Stack>
                    </Box>
                    <Box>

                    </Box>
            </Stack>
            </Paper>
        </Container>
    )
}