import React from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SideBarItem = ({ onClick, icon, label, tabId }) => {
  return (
    <ListItem
      key={tabId}
      disablePadding
    >
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;