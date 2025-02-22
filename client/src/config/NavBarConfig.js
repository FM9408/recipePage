import {Home, LocalDining, ManageSearch} from "@mui/icons-material"

export const NavbarButtons = [
    {
        title: "Home",
        icon: <Home />,
        href: "/",

    },
    {
        title: "Recetas",
        icon: <LocalDining />,
        href: "/recipes",
    },
    {
        title: "Tips",
        icon: <ManageSearch />,
        href: "/tips",
    }
]