import { Box, FormControl, IconButton, Input, OutlinedInput, Stack, InputAdornment, TextField, MenuItem, Typography } from "@mui/material"
import {Add, Remove, Close} from "@mui/icons-material"
import React from "react"
import { func, array } from "prop-types"



AddAnIngredientButton.propTypes = {
    setIngredients: func,
    ingredients: array
}






const unities = [
    
        {
            value: "kilograms",
        label: "Kg",
            class: "0"
        },
        {
            value: "liters",
            label: "L",
            class: "0"
        },
        {
            value: "pieces",
            label: "pz",
            class: "0"
        },
        {
            value: "tablespoon",
            label: "tbsp",
            class: "0"
        },
        {
        value: "teaspoon",
            label: "tsp",
            class: "0"
        },
        {
            value: "cans",
            label: "cans",
            class: "0"
        },
        {
            value: "mililiters",
            label: "mL",
            class: "00"
        },
        {
            value: "grams",
            label: "g",
            class: "00"
        },

    
]







export default function AddAnIngredientButton({setIngredients, ingredients}) {
    const [ingredient, setIngredient] = React.useState({
        name: "",
        cuantity: 0,
        units: "kilograms"
    })
    const [prevState, setPrevState] = React.useState("kilograms")
   
    

    function handleInputChange(e) {
        setPrevState(ingredient.units)
        if (e.target.name === "units") {
            const actualState = unities.find(unit => unit.value === e.target.value)
            const previousState = unities.find(unit => unit.value === prevState)

            if ((actualState.class === "00" && previousState.class === "00") || (actualState.class === "0" && previousState.class === "0")) {
                console.log("still")
                setIngredient({
                    ...ingredient,
                    [e.target.name]: e.target.value
                })
            } else if (actualState.class === "0" && previousState.class === "00") {
                console.log("reducto")
                setIngredient({
                    ...ingredient,
                    units: e.target.value,
                    cuantity: Math.floor(ingredient.cuantity/100)
                })
            } else if (actualState.class === "00" && previousState.class === "0") {
                console.log("incrase")
                setIngredient({
                    ...ingredient,
                    units: e.target.value,
                    cuantity: ingredient.cuantity * 100
                })
            }
        } else {
            setIngredient({
                ...ingredient,
                [e.target.name]: e.target.value
            })
            
        }
        
    }
    





    function handleAddQuantity() {
        setIngredient({
            ...ingredient,
            cuantity: unities.find(i => i.value === ingredient.units).class === "00"?  ingredient.cuantity+100 : ingredient.cuantity+1
        })
    }


    function stabler1(cuantity) {
        if (cuantity >= 100) {
            return cuantity-100
        } else {
            return 0
        }
    }
    function stabler2(cuantity) {
        if (cuantity >= 1) {
            return cuantity-1
        } else {
            return 0
        }
    }

    function handleReduceQuantity() {
        setIngredient({
            ...ingredient,
            cuantity:
                unities.find(i=> i.value === ingredient.units).class === "00"
                    ? stabler1(ingredient.cuantity)
                    : stabler2(ingredient.cuantity)
        })
    }

    function handleAddAnother() {
        const list = [...ingredients]
       list.push(ingredient)
        setIngredients(list)
        setIngredient({
            name: "",
            cuantity: 0,
            units: "kilograms"
        })
        setPrevState("kilograms")
        
    }
    function handleRemoveIngredient(name) {
        const filteredIngredients = ingredients.filter(ingredient => ingredient.name !== name)
        setIngredients(filteredIngredients)
    }

    React.useEffect(() => {
        
    }, [ingredients]) 

    return (
        <Box >
            <Stack direction={'column'} gap={2}>
                <Box>
                    <Stack direction={'column'} gap={3} >
                        {ingredients.map((ingredient, i) => {
                            return (
                                <Stack key={ingredient.name}  direction={'row'} gap={2} justifyContent={"center"} alignItems={"center"}>
                                    <Box >
                                        <Typography
                                            key={ingredient.name}
                                            variant='body1'
                                        >
                                            {ingredient.cuantity}{' '}
                                            {
                                                unities.find(
                                                    (i) =>
                                                        i.value ===
                                                        ingredient.units
                                                ).label
                                            }{' '}
                                            {ingredient.name}
                                        </Typography>
                                    </Box>
                                    <Box >
                                        <IconButton onClick={() => handleRemoveIngredient(ingredient.name)} size="small">
                                            <Close sx={{fontSize: ".8em"}} />
                                        </IconButton>
                                    </Box>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Box>
                <Stack direction={'row'}>
                    <Box>
                        <IconButton disabled={ingredient.name.length === 0 && ingredient.cuantity === 0 } onClick={()=> handleAddAnother()} >
                            <Add />
                        </IconButton>
                    </Box>
                    <Box>
                        <FormControl>
                            <OutlinedInput name="name" value={ingredient.name} onInput={handleInputChange}/>
                        </FormControl>
                        <FormControl>
                            <OutlinedInput
                                value={ingredient.cuantity}
                                sx={{ width: "210px" }}
                                name={"cuantity"}
                                onInput={handleInputChange}
                                endAdornment={
                                            <InputAdornment position="end">
                                    <Stack direction={"row"} alignItems={"center"} sx={{width: "fit-content"}}>
                                        <Box>
                                            <IconButton onClick={() => handleAddQuantity()}><Add/></IconButton>
                                        </Box>
                                        <Box>
                                            <IconButton onClick={() => handleReduceQuantity()}><Remove/></IconButton>
                                        </Box>
                                        <Box>
                                                <FormControl>
                                                    <TextField
                                                        onChange={handleInputChange}
                                                        
                                                        name="units"
                                                        value={ingredient.units}
                                                        select
                                                    >
                                                        {unities.map((unit) => {
                                                            return (
                                                                <MenuItem
                                                                    key={
                                                                        unit.label
                                                                    }
                                                                    value={
                                                                        unit.value
                                                                    }
                                                                >
                                                                    {unit.label}
                                                                </MenuItem>
                                                            )
                                                        })}
                                                    </TextField>
                                                </FormControl>
                                        </Box>
                                    </Stack>
                                            </InputAdornment>
                                }
                                type=''
                            />
                        </FormControl>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}