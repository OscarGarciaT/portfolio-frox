import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Icon, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import SideBarItem from "./SidebarItem";

const drawerWidth = 222;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
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

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);

  const handleDrawerToggle = () => {
    setOpen((prevValue) => !prevValue);
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
          <Typography>Grupo FROX - Portafolio</Typography>
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
          <Typography variant="h5">Secciones</Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <SideBarItem
            onClick={() => {}}
            icon={<Icon>group</Icon>}
            label={"Quienes somos?"}
            tabId={"somos"}
          />
          <SideBarItem
            onClick={() => {}}
            icon={<Icon>lightbulb</Icon>}
            label={"Ideacion"}
            tabId={"ideacion"}
          />
          <SideBarItem
            onClick={() => {}}
            icon={<Icon>work</Icon>}
            label={"Prototipo"}
            tabId={"prototipo"}
          />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="p-10">{children}</div>
      </Main>
    </Box>
  );
};

export default Layout;
