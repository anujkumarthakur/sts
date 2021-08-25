import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MediaCard from './Mediacard';



function Copyright() {
  return (
    <Typography variant="h6" align="center" color="textSecondary" component="p">
      Contact No -: 9997798314 (Sikandar Thakur ), 9625814452 ( Rajesh Kumar )
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const cards = [
  {
    id: '001',
    image: require('./image/sampleimage/img1.jpg').default,
  },
  {
    id: '002',
    image: require('./image/sampleimage/img2.jpg').default,
  },
  {
    id: '003',
    image: require('./image/sampleimage/img3.jpg').default,
  },
  {
    id: '004',
    image: require('./image/sampleimage/img4.jpg').default,
  },
  {
    id: '005',
    image: require('./image/sampleimage/img5.jpg').default,
  },
  {
    id: '006',
    image: require('./image/sampleimage/img6.jpeg').default,
  },
  {
    id: '007',
    image: require('./image/sampleimage/img7.jpeg').default,
  },
  {
    id: '008',
    image: require('./image/sampleimage/img8.png').default,
  },
];


// render
// items.map( (item) => 
//   <Image key={item.id} source={item.image} />
// )

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FingerprintSharpIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            STS Machinery Works
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        < MediaCard />

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>

                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image} //'./image/sampleimage/img1.jpg'//"https://source.unsplash.com/random"
                    title="Image title"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ghundi 13X23
                    </Typography>
                  </CardContent> */}

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Contact Address
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
        House No- C100, Near Apollo Tyres, Azad Nagar Road, Transport Nagar, Moradabad, UP- 244001
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}