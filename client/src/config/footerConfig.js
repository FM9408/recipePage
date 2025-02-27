import {Facebook, Twitter, GitHub, Instagram} from "@mui/icons-material"


export const footerConfig = {
    social: [
        {
            title: "Facebook",
            icon: <Facebook />,
            href: "https://www.facebook.com"
        },
        {
            title: "Twitter",
            icon: <Twitter />,
            href: "https://www.twitter.com"
        },
        {
            title: "Github",
            icon: <GitHub />,
            href: "https://www.github.com"
        },
        {
            title: "Instagram",
            icon: <Instagram />,
            href: "https://www.instagram.com"
        }
    ],
    legal: [
        {
            title: "Terminos y condiciones",
            href:"/legal/termsAndConditions"
        },
        {
            title: "Politica de Privacidad",
            href:"/legal/privacyPolicy"
        }
    ]
}