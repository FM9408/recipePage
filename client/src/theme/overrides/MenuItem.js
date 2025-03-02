

export default function MenuItem(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.lighter,
                    width: "100%",
                    color: theme.palette.secondary.dark,
                    transition:"all .5s ease-in-out",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.secondary.dark
                    }
                }
            }
        }
    }
}