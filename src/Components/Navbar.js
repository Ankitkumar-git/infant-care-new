import React, { useState } from "react";
import Logo from "../Assets/logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
  //Responsiveness
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>

      <div className="nav-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
