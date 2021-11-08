import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontFamily: `'Montserrat', 'sans-serif'`,
    },
    color: "#fff",
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: {
      main: "#fff",
      contrastText: "#3A8DFF",
    },
    smallTextColor: {
      main: "#B0B0B0",
    },
  },
});
