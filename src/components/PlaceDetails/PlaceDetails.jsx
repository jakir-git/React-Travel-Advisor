import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, CardAction, Chip } from '@material-ui/core'

import useStyles from './style'

const PlaceDetalis = ({place}) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height:350}}
        image={ place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PlaceDetalis