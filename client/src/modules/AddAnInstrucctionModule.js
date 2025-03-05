import React from "react"
import { Paper, Stack, Box, IconButton, Divider, Typography } from "@mui/material"
import { Add, Close } from "@mui/icons-material"
import AddANewInstrucction from "../components/addANewIntrucction"
import { bool, array, func } from "prop-types"


AddAnInstrucctionModule.propTypes = {
    match: bool,
    instructions: array,
    setInstructions: func
}



export default function AddAnInstrucctionModule({ match, instructions, setInstructions }) {

    const [adding, setAdding] = React.useState(false)
   
   


    function handleinstrucctionDelate(index) {
        const instruccionsList = instructions
        const prevsteps = instruccionsList.slice(0, index)
        const nextSteps = instruccionsList.slice((index+1) , instruccionsList.length)
        nextSteps.forEach(i => {
            prevsteps.push(i)
        })
        setInstructions(prevsteps)
    }



   


    return (
        <Paper sx={{ width: !match ? '50%' : '100%' }}>
            <Stack direction={'column'} sx={{ width: '100%' }}>
                <Box sx={{ position: 'relative' }}>
                    <Typography variant='h4' fontFamily={'Dancing Script'}>
                        Instrucciones:
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: !match ? 5 : 0,
                            right: !match ? 5 : 0
                        }}
                    >
                        <IconButton onClick={() => setAdding(true)}>
                            <Add />
                        </IconButton>
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Stack direction={'column'}>
                        {instructions.map((instruction, i) => {
                            return (
                                <Box sx={{ width: 'fit-content' }} key={i + 1}>
                                    <Stack
                                        direction={'row'}
                                        sx={{ width: 'fit-content' }}
                                    >
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                textOverflow: 'clip'
                                            }}
                                        >
                                            <Typography
                                                variant='body1'
                                                fontFamily={'Marck Script'}
                                            >
                                                {i + 1}.- {instruction}
                                            </Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <IconButton
                                                onClick={() =>
                                                    handleinstrucctionDelate(i)
                                                }
                                            >
                                                <Close
                                                    sx={{ fontSize: '.5em' }}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                </Box>
                            )
                        })}
                        {adding ? (
                           <AddANewInstrucction instructions={instructions} setAdding={setAdding} setInstructions={setInstructions}/>
                        ) : (
                            <></>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Paper>
    )
}