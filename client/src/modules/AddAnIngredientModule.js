import React from "react"
import { Box, Paper, Stack, Typography } from "@mui/material"
import AddAnIngredientButton from "../components/addAnIngredientButton"
import {array, func} from "prop-types"


AddAnIgredientModule.propTypes = {
    ingredients: array,
    setIngredients: func
}


export default function AddAnIgredientModule({ingredients, setIngredients}) {
    
    return (
        <Paper sx={{ margin: '1%', padding: '1%' }}>
            <Box>
                <Stack direction={'column'} gap={2}>
                    <Box>
                        <Typography variant='h4' fontFamily='Dancing Script'>
                            Ingredientes:
                        </Typography>
                    </Box>
                    <Box>
                        <AddAnIngredientButton
                            ingredients={ingredients}
                            setIngredients={setIngredients}
                        />
                    </Box>
                </Stack>
            </Box>
        </Paper>
    )
}