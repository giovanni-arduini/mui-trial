import {
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  ThemeProvider,
} from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";

import { PhotoCamera } from "@mui/icons-material";

import theme from "./assets/theme.ts";

import Navbar from "./components/NavBar/NavBar.tsx";
import Hero from "./components/Hero/Hero.jsx";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar> */}
        <Navbar />
        <Hero />
        <main>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Hello everyone, this is a photo album and I'm trying to make this
              sentence as long as possible, so we can see how it looks like on
              the screen
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
