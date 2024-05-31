import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const theme = createTheme({
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
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
