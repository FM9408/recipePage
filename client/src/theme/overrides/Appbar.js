import { alpha, colors } from "@mui/material"

export default function Appbar(theme) {
    return {
        MuiAppbar: {
            styleOverrides : {
                root: {
                    backgroundColor: alpha(colors.amber[300], 0.7)
                }
            }
        }
    }
}