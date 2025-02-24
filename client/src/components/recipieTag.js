import * as React from 'react';
import { styled, Box, Chip } from '@mui/material';
import {array}from "prop-types"
import { useNavigate} from 'react-router';
import { queryRecipesbyTag } from '../redux/slices';
import { useDispatch } from 'react-redux';

RecipeTags.propTypes = {
  tags: array
}


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function RecipeTags({tags}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function searchByTag(tagName) {
   try {
     dispatch(queryRecipesbyTag(tagName))
     navigate(`/recipes`)
     setTimeout(() => {
       document
           .getElementsByClassName('inputBase')[0]
         .dispatchEvent(new Event('tagSelected', {
         }))
     },1000)
   } catch (error) {
    throw new Error(error);
   }
  }
  

  function tagColor(tagName) {
    switch (tagName) {
      case "Vegetarian":
         return "success"
      case "Salad":
        return "success"
      case "Salsa":
        return "error"
      default:
        return "info";
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags.map((tag) => {
        

        return (
          <ListItem key={tag.id}>
            <Chip
              clickable={true}
              onClick={() => searchByTag(tag.name) }
              color={`${() => tagColor(tag.name)}`} 
              //icon={icon}
              label={tag.name}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}