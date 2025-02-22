import { Box, Typography, Checkbox } from "@mui/material"
import React from "react";




export default function IngredientCheckbox({ingredient}){
    const [checkedBox, toggleCheckedBox] = React.useState(false)
    

    return (
        <Box sx={{display:"flex", alignItems:"center", justifyContent:{xs:"center",lg:"flex-start"}}}>
            <Checkbox onClick={() =>toggleCheckedBox(!checkedBox)} checked={checkedBox} aria-checked={checkedBox} />
            <Typography variant="subtitle1"sx={{textDecorationLine:checkedBox ? "line-through" : "none", textDecorationColor: "red" }} color={"textPrimary"}>
                {ingredient}
            </Typography>
        </Box>
    )

} 