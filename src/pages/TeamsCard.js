import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




const TeamsCard = (props) => {
  return (
   <>
        <div className="col-12 col-md-3">
          <Card className='mb-4'>
            <CardActionArea>
              <img src={props.imgsrc} className='img-fluid' alt="" srcSet="" />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {props.title}
            </Typography>
            <Typography gutterBottom variant="h5" className='mvtitle' component="div">
             {props.mvname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.content}
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
               {props.link}
            </Button>
            
            </CardActions>
            
        </Card>

        </div>
   </>
  )
}

export default TeamsCard;
