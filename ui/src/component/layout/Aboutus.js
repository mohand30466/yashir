// import React from "react";
// import image from "./images/Yashirlogo.png"

// export default function Aboutus() {
//   return (
//     <>
//       <h1>Welcome to Direct manpower </h1>
//       <h1>We are happy to give you some information about us </h1>
//       <p>
//         Direct manpower is a manpower compny created at 2020 in Tel Aviv Isreal,
//         By gratuated guys from IDC univercity and Aplesseds Academy
//       </p>
//       <p>
//         The company have tow pranches in north Israel in Haifa and south Isreal
//         in Bearshiba, the HQ located in Tel Aviv, souken street,25 we work
//         offices
//       </p>
//       <p>
//         Direct manpower company gives servicess in many fields is the indestry
//         like factories, companies,agreculture, construction, hotels, resturant,
//         cafes, offices work , cleaning offices and houses and others
//       </p>
//       <p>
//         The company offer very quick response to the services with hight quality
//         of the servicess, we will understand your need and finding you the write
//         guy in the write place for short time
//       </p>
//       <h2>The Staff</h2>
//       <div>
//       <img src={image} alt="1" />
//           <p>Adam Basher: CEO</p>
//           <p>01234567890</p>
//           <p>Adam Basher he is the co-founder and the general manager he is gratuate from the IDC Richman univercity with MA degree</p>
//       </div>
//       <div>
//       <img src={image} alt="1" />
//           <p>Alhaji fofana: HR</p>
//           <p>01234567890</p>
//           <p>Alhaji Alfa fofana is the  recruter and he is  gratuate from the IDC Richman univercity with MA degree</p>
//       </div>
//       <div>
//          <img src={image} alt="1" />
//           <p>Mohand Abdo: project manager</p>
//           <p>01234567890</p>
//           <p>Mohand Abdois the project manager and he is gratuate from Applesseds Academy with degree in Wep devolopment</p>
//       </div>
//     </>
//   );
// }

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        www. direct manpower ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Aboutus() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Direct manpower compny is created at 2020 in Tel Aviv Isreal, By
              gratuated guys from IDC univercity and Aplesseds Academy, 
              <Typography>
                {" "}
                Direct manpower company gives servicess in many fields is the
                indestry like factories, companies,agreculture, construction,
                hotels, resturant, cafes, offices work , cleaning offices and
                houses and others,{" "}
              </Typography>
              <Typography>
              The
              company offer very quick response to the services with hight
              quality of the servicess, we will understand your need and finding
              you the write guy in the write place for short time
                
              </Typography>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Contact Us
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Send us Messages 
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Adam Basher: CEO
                    </Typography>
                    <Typography>
                      The co founder and the general manager he is gratuated from IDC Richman univercity 
                    .
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      0543212345
                    </Button>
                    <Button size="small" color="primary">
                      Email
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Alhaji Alpha : HR
                    </Typography>
                    <Typography>
                      The Recruter and responsple for employment he is gratuated from IDC Richman univercity 
                    .
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      0543212345
                    </Button>
                    <Button size="small" color="primary">
                      Email
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mohand Abdo : PM
                    </Typography>
                    <Typography>
                      The project manager he is gratuated from applesseds Academy with degree is Full Stack developer 
                    .
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      0543212345
                    </Button>
                    <Button size="small" color="primary">
                      Email
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>

        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          we are your address contact and get served!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
