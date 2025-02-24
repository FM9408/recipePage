import React from "react";
import {Box, InputBase, styled, alpha, Stack, IconButton} from "@mui/material"
import { queryRecipes, fetchAllRecipes,selectTag } from "../redux/slices";
import { useDispatch, useSelector } from "react-redux";
import { Search, Cancel} from "@mui/icons-material"


const SearchBox = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.dark, 0.15),
    transition: "background-color .5s ease-in-out",
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.darker, 0.25),
      
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));





  export default function SearchingField() {
    const [input, setInput]= React.useState("")
    const dispatch = useDispatch()
    const [taggedRecipes, setTaggedRecipes] = React.useState("")
     const selectedTag = useSelector((state) => state.selectedTag)

    
    function handleChange(e) {
      setInput(e.target.value)
      dispatch(queryRecipes(e.target.value))
    } 
    
    
    React.useEffect(() => {
      setTaggedRecipes(selectedTag)
      setInput(taggedRecipes)
      
    }, [selectedTag, taggedRecipes])

    

    if (document
      .getElementsByClassName('inputBase')[0]) {
      document
        .getElementsByClassName('inputBase')[0]
        .addEventListener('reset', () => {
          dispatch(fetchAllRecipes())
          setInput('')
          setTaggedRecipes("")
          dispatch(selectTag(""))
        })
      
     
    }
    return (
        <Box  sx={{ width: '100%' }}>
            <SearchBox>
                <Stack direction='row'>
                    <SearchIconWrapper>
                        <Search />
                    </SearchIconWrapper>
            <StyledInputBase
              className="inputBase"
              
                        onLoad={() => dispatch(fetchAllRecipes())}
                        value={input}
                        onChange={(e) => handleChange(e)}
                        placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              
                    />

            {
              input !== "" ? <IconButton
                        onClick={() =>
                            document.getElementsByClassName("inputBase")[0].dispatchEvent(new Event("reset"))
                        }
                    >
                        <Cancel />
                    </IconButton> : <></>
                    }
                </Stack>
            </SearchBox>
        </Box>
    )
}
  
  
