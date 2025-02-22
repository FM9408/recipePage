import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PropTypes from 'prop-types';
import { Box, Paper, alpha, colors } from '@mui/material'





RecipeCard.propTypes = {
  res: PropTypes.object
}

export default function RecipeCard({res}) {
  const [CardHover, setCardHover] = React.useState(false)
 

  return (
    
    <Card  elevation={CardHover ? 20 : 10} onPointerEnter={() =>setCardHover(true)} onPointerLeave={() => setCardHover(false)}  sx={{ width: {xs: "fit-content", lg:CardHover ? "30em" : "20em"}, height: "fit-content", transition:"all 1s ease-in-out"  }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h4" >{res.name}</Typography>}
        subheader={res.Op}
        sx={{height: {xs: "5em", sm:"7em", md: "8em", lg: "9em"}, margin:"1%", transition:"all .1s ease-in-out" }}
      />
      <CardMedia
        component="img"
        height={CardHover ? 250 : 180}
        image={res.imageUrl}
        sx={{transition: "height 1s ease-in-out "}}
        alt={`${res.name} recipe`}
      />
      <CardContent sx={{margin:"1%" }}>
        <Box sx={{width: "100%", height:"fit-content"}}>
          <Paper elevation={5} sx={{backgroundColor: `${alpha(colors.amber[200], 0.1)}`, padding:"1%" }} >
            <Typography variant="body1" sx={{ color: 'text.secondary', height: {xs:"3em", sm:"5em", md:"5em"}, margin:"1%", transition:"all 1s ease-in-out"}}>
              {res.description}
            </Typography>
          </Paper>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
   
  );
}