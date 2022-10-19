import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Airline = (props) =>  {
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Airline
        </Typography>
        <Typography variant="h5" component="div">
        {props.name}
      </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View flights</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Airline;
