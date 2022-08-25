import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './style';

const Map = ({coordinates, setCoordinates, setBounds}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('min-width:600px')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{key: 'AIzaSyDqMDT7XIm84wERahZ9sdxSPZglErIjGgk'}}
      //bootstrapURLKeys={{key: 'AIzaSyCpDK9FoFpdlN-MWY50R9xGSabRwuALbHc'}}
      defaultCenter = {coordinates}
      center = {coordinates}
      defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true}}
        onChange={(e)=>{
          setCoordinates({ lat: e.center.lat, lng:e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map