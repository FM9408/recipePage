import React from "react";
import { IconButton, Drawer, Box, ListItemIcon, ListItemText, useTheme, ListItem, List } from "@mui/material"
import { NavbarButtons } from "../config/NavBarConfig";
import { MenuOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router";



export default function NavbarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const theme = useTheme()
    
    const navigate = useNavigate()
    const open = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <Box>
            <IconButton
                sx={{ color: theme.palette.primary.contrastText }}
                onClick={handleClick}
                id='navbar-menu-button'
                aria-controls={open ? 'navbar-menu-button' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <MenuOutlined />
            </IconButton>
            <Drawer
                id='navbar-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'navbar-menu-button' }}
            >
                <List>
                    {NavbarButtons.map((button) => {
                        return (
                            <ListItem
                                onClick={() => navigate(button.href)}
                                key={button.title}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: theme.palette.secondary.dark
                                    }}
                                    title={button.title}
                                >
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText>{button.title}</ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </Box>
    )
}