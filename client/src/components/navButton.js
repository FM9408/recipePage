import { Button, Typography, Box, useTheme } from "@mui/material"
import React from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types"



NavButton.propTypes = {
    button: PropTypes.node
}


export default function NavButton({ button }) {
    const navigate = useNavigate()
    const [isHover, setIsHover] = React.useState(false)
    const [matchPath, setMatchPath] = React.useState(false)
    const theme = useTheme()

    React.useEffect(() => {
        if (document.location.pathname === button.href) {
            setMatchPath(true)
            setIsHover(true)
        }
        else {
            setMatchPath(false)
            setIsHover(false)
        }

    }, [matchPath, button.href, document.location.pathname])

    return (
        <Button disabled={matchPath} onClick={() => navigate(`${button.href}`)} sx={{ width: "fit-content" }} title={button.title} variant="text" color={theme.palette.getContrastText(theme.palette.primary.main)} onPointerEnter={ matchPath ? null :()=> setIsHover(true)} onPointerLeave={matchPath? null :() => setIsHover(false)}>
            <Box sx={{width: "fit-content", overflow: "hidden",  }}>
               <Box sx={{ width: "fit-content",  display:"flex", alignContent: "center", justifyItems:"center"}}>
                    <Box sx={{width: isHover ? `${50-button.title.length*3}%` : "100%", overflow:"hidden",transition:"width 1s ease-in-out" }}>
                        {button.icon }
                    </Box>
                    <Box sx={{width:  isHover ? `${50+(button.title.length*3)}%` : "0%", overflow:"hidden", transition:"width 1s ease-in-out",}} >
                        <Typography  color="white" variant="button">{button.title}</Typography> 
                    </Box>
               </Box>
           
            </Box>
        </Button>
    )
}