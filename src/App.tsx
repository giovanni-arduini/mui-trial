import {
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import { PhotoCamera } from "@mui/icons-material";

import Navbar from "./components/NavBar/NavBar.tsx";

export default function App() {
  return (
    <>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar> */}
      <Navbar />
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
            sentence as long as possible, so we can see how it looks like on the
            screen
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
    </>
  );
}
