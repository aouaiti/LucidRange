import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {
  const themeMode = useSelector((state) => state.theme.mode);
  const myTheme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        light: "#0ff",
        dark: "#131313",
        main: "#000",
        contrastText: "#fff",
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(myTheme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
