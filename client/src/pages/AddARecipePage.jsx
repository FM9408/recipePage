import { Box, Container, FormControl, FormHelperText, Input, Paper, Typography, Stack } from "@mui/material"
import AddAnIngredientButton from "../components/addAnIngredientButton"
import React from "react"



export default function AddARecipePage() {
    const [input, setInput] = React.useState({
        title: "",
        ingts: []
    })
     let [ingredients, setIngredients] = React.useState([])

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
    }




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
                <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
                    <Paper sx={{margin: "1%", padding:"1%"}}>
                         <Box >
                    <Stack direction={"column"} gap={2}>
                        <Box>
                            <Typography variant="h4" fontFamily="Dancing Script">Ingredientes:</Typography>
                        </Box>
                        <Box >
                            <AddAnIngredientButton ingredients={ingredients} setIngredients={setIngredients} />
                        </Box>
                    </Stack>
                    </Box>
                    </Paper>
                    <Box justifyContent={"center"}>
                        hola
                    </Box>
               </Stack>
            </Stack>
            </Paper>
        </Container>
    )
}