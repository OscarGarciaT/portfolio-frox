import { useEffect, useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Icon, Typography, useMediaQuery } from "@mui/material";

import SideBarItem from "./SidebarItem";
import FrxImage from "./multimedia/FrxImage";

import logoTransparentSrc from "/assets/images/logos/logo_transparent.png";
import { useLocation } from "react-router-dom";

const drawerWidth = 222;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      width: "100%",
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "lightgreen",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: "lightgreen",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  userSelect: "none",
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const Layout = ({ children, refs }) => {
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    setTimeout(() => {
      if (isDesktop && !section) {
        setOpen(true);
      }
    }, 900);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, [open]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const section = params.get("section");
    if (section) {
      scrollToSection(section);
    }
  }, [location]);

  const handleDrawerToggle = () => {
    setOpen((prevValue) => !prevValue);
  };

  const scrollToSection = (id) => {
    const offset = 64;
    const element = refs[id].current;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    if (!isDesktop) {
      setOpen(false);
    }

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <Icon color="primary">{open ? "menu_open" : "menu_close"}</Icon>
          </IconButton>
          <Box flexGrow={1} />
          {/* <Typography color="black">FROX</Typography> */}
          <FrxImage src={logoTransparentSrc} width={60} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h5">Portafolio</Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <SideBarItem
            onClick={() => scrollToSection("somos")}
            icon={<Icon>group</Icon>}
            label={"¿Quiénes somos?"}
            tabId={"somos"}
          />
          <SideBarItem
            onClick={() => scrollToSection("intro")}
            icon={<Icon>token</Icon>}
            label={"Sobre el proyecto"}
            tabId={"intro"}
          />
          <SideBarItem
            onClick={() => scrollToSection("cronograma")}
            icon={<Icon>calendar_month</Icon>}
            label={"Cronograma"}
            tabId={"cronograma"}
          />
          <SideBarItem
            onClick={() => scrollToSection("ideacion")}
            icon={<Icon>lightbulb</Icon>}
            label={"Ideación"}
            tabId={"ideacion"}
          />
          <SideBarItem
            onClick={() => scrollToSection("mejoresideas")}
            icon={<Icon>stars</Icon>}
            label={"Mejores Ideas"}
            tabId={"mejoresideas"}
          />
          <SideBarItem
            onClick={() => scrollToSection("prototipo")}
            icon={<Icon>videogame_asset</Icon>}
            label={"Prototipos no funcionales"}
            tabId={"prototipo"}
          />
          <SideBarItem
            onClick={() => scrollToSection("mejoridea")}
            icon={<Icon>bookmark_star</Icon>}
            label={"Mejor Idea"}
            tabId={"mejoridea"}
          />
          <SideBarItem
            onClick={() => scrollToSection("tecnologias")}
            icon={<Icon>rocket_launch</Icon>}
            label={"Tecnologias"}
            tabId={"tecnologias"}
          />
          <SideBarItem
            onClick={() => scrollToSection("desarrollo1")}
            icon={<Icon>construction</Icon>}
            label={"Desarrollo S1"}
            tabId={"desarrollo1"}
          />
          <SideBarItem
            onClick={() => scrollToSection("desarrollo2")}
            icon={<Icon>construction</Icon>}
            label={"Desarrollo S2"}
            tabId={"desarrollo2"}
          />
          <SideBarItem
            onClick={() => scrollToSection("playtesting")}
            icon={<Icon>sports_esports</Icon>}
            label={"Playtesting"}
            tabId={"playtesting"}
          />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
