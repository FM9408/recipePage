import { Box, Typography, Checkbox } from "@mui/material"
import React from "react";
import {string} from "prop-types"

IngredientCheckbox.propTypes = {
    ingredient: string
}



export default function IngredientCheckbox({ingredient}){
    const [checkedBox, setCheckedBox] = React.useState(false)
    

    return (
        <Box sx={{display:"flex", alignItems:"center", justifyContent:{xs:"center",lg:"flex-start"}}}>
            <Checkbox onClick={() =>setCheckedBox(!checkedBox)} checked={checkedBox} aria-checked={checkedBox} />
            <Typography variant="subtitle1"sx={{textDecorationLine:checkedBox ? "line-through" : "none", textDecorationColor: "red" }} color={"textPrimary"}>
                {ingredient}
            </Typography>
        </Box>
    )

} 