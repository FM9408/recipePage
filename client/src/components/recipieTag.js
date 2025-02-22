import * as React from 'react';
import { styled, Box, Chip } from '@mui/material';
import { useNavigate} from 'react-router';
import { queryRecipesbyTag } from '../redux/slices';
import { useDispatch } from 'react-redux';


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
   } catch (error) {
    throw new Error(error);
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
              color={tag.name === "Vegetarian" || tag.name === "Salad" ? "success" : tag.name === "Salsa" ? "error": "info"} 
              //icon={icon}
              label={tag.name}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}