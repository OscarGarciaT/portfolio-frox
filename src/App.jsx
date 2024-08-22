import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import { useRef } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: () => document.getElementById("root"),
      },
    },
    MuiPopper: {
      defaultProps: {
        container: () => document.getElementById("root"),
      },
    },
    MuiDialog: {
      defaultProps: {
        container: () => document.getElementById("root"),
      },
    },
    MuiModal: {
      defaultProps: {
        container: () => document.getElementById("root"),
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3589A1",
    },
    secondary: {
      main: "#CA5E39",
    },
    text: {
      secondary: "#696969",
    },
  },
});

const App = () => {
  const refs = {
    somos: useRef(null),
    intro: useRef(null),
    cronograma: useRef(null),
    ideacion: useRef(null),
    mejoresideas: useRef(null),
    mejoridea: useRef(null),
    prototipo: useRef(null),
    tecnologias: useRef(null),
    desarrollo1: useRef(null),
    desarrollo2: useRef(null),
    playtesting: useRef(null),
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout refs={refs}>
          <Portfolio refs={refs} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
