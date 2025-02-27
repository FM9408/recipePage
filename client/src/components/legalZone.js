import React from "react"
import { footerConfig } from "../config/footerConfig"
import { Accordion, Box, useMediaQuery, AccordionSummary, useTheme, Typography, Button, IconButton, Stack, AccordionDetails } from "@mui/material"
import json2mq from "json2mq"
import {PlayArrow} from "@mui/icons-material"
import { useNavigate } from "react-router"


export default function LegalAcordieon() {
    const theme = useTheme()
    const [expanded, setExpanded]= React.useState(false)
    const navigate = useNavigate()
    const matches = useMediaQuery(
        json2mq({
            maxWidth: theme.breakpoints.values.md
        })
    )
    return (
        <Box>
            {!matches ? (
                <Box>
                    {
                        <Stack>
                            {
                                footerConfig.legal.map((legal) => {
                                    return (
                                        <Box key={legal.title} >
                                            <Button variant="text">
                                                {legal.title}
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                    }
                </Box>
            ) : (
                <Box>
                    <Accordion
                        sx={{ backgroundColor: !expanded ? theme.palette.primary.darker : theme.palette.primary.main , transition:"all .5s ease-in-out" }}
                    >
                        <AccordionSummary
                            aria-controls='legalPanel-content'
                                id='legalPanel'
                                onClick={() => setExpanded(!expanded)}
                        >
                            <Stack
                                direction={'row'}
                                sx={{
                                    width: '100%',
                                    alignItems: 'center'
                                }}
                            >
                                <Box sx={{ width: '90%' }}>
                                    <Typography
                                        sx={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            color: theme.palette.secondary
                                                .contrastText
                                        }}
                                        variant='subtitle2'
                                    >
                                        Legal
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '10%' }}>
                                    <IconButton size="small">
                                            <PlayArrow sx={{ color: theme.palette.secondary.contrastText, transition: "all .2s ease-in-out", transform: expanded ? "rotate(-90deg)" : "rotate(90deg)", "&:hover": { color: theme.palette.secondary.dark } }} />
                                    </IconButton>
                                </Box>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction={'column'} gap={2}>
                                {footerConfig.legal.map((legal) => {
                                    return (
                                        <Button
                                            color="primary"
                                            variant="text"
                                            key={legal.title}
                                            onClick={()=> navigate(legal.href)}
                                        >
                                            {legal.title}
                                        </Button>
                                    )
                                })}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            )}
        </Box>
    )
}