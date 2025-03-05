import React from "react"
import { Stack, Typography, FormControl, FilledInput, FormHelperText, IconButton } from "@mui/material"
import {Save, Cancel} from "@mui/icons-material"
import { func, array } from "prop-types"


AddANewInstrucction.propTypes = {
    instructions: array,
    setInstructions: func,
    setAdding: func

}


export default function AddANewInstrucction({instructions, setInstructions, setAdding}) {
    const [instruction, setInstruction] = React.useState("")
    
    function handleInstructionInput(e) {
        setInstruction(e.target.value)
    }
     
    function handleSaveNewInstructions() {
        const instruccionsList = instructions
        instruccionsList.push(instruction)
        setInstructions(instruccionsList)
        setAdding(false)
        setInstruction('')
    }

    return (
        <Stack direction={'row'}>
            <Typography variant='body1' fontFamily={'Marck Script'}>
                {instructions.length + 1}.-
            </Typography>
            <FormControl sx={{ width: '100%' }}>
                <FilledInput
                    onChange={(e) => handleInstructionInput(e)}
                    error={instruction.length <= 20}
                    value={instruction}
                    sx={{ width: '95%' }}
                    placeholder='Escribe el siguiente paso de tu receta'
                />
                <FormHelperText>
                    El paso debe de tener 20 caracteres de longitud mínimo
                </FormHelperText>
            </FormControl>
            {instruction.length > 20 ? (
                <IconButton onClick={() => handleSaveNewInstructions()}>
                    <Save />
                </IconButton>
            ) : (
                <IconButton onClick={() => setAdding(false)}>
                    <Cancel />
                </IconButton>
            )}
        </Stack>
    )
}