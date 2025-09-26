import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#845218",
    },
    secondary: {
      main: "#164a25",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#e9d6d6ff",
    },
  },
});

export default theme;
