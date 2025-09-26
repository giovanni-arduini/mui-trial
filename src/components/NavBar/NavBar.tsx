import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Coffee, Menu } from "@mui/icons-material";
import {
  Button,
  useTheme,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { useMediaQuery } from "@mui/system";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerLinks = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Coffee",
      link: "#coffee",
    },
    {
      text: "Info",
      link: "#info",
    },
  ];

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Coffee />
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Coffee Shop
            </Typography>

            {isMobile ? (
              <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                <Menu />
              </IconButton>
            ) : (
              <>
                {drawerLinks.map((linkItem, index) => {
                  return (
                    <Button color="inherit" href={linkItem.link} key={index}>
                      {linkItem.text}
                    </Button>
                  );
                })}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
        >
          <List>
            {drawerLinks.map((linkItem, index) => {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component="a"
                    href={linkItem.link}
                    onClick={() => toggleDrawer(false)}
                  />
                  <ListItemText primary={linkItem.text} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
