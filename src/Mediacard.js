import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from './Image'
const useStyles = makeStyles({
  root: {
    maxWidth: 1920,
  },
  media: {
    height: 500,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          src={Img}
          title="Contemplative Reptile"
        /> */}
        <Image/>

        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
          Welcome to STS Machinery Works

          </Typography>
          <Typography variant="h5" color="textSecondary" align="center">
          STS Machinery Works is one of the largest machine components and tool manufacturing company in India, 
          successfully operating for more than 5 years. we had deliverd sucessfully service  on time with more then 500 clients 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
