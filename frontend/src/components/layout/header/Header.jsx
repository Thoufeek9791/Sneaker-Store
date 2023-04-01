import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import logo from "./../../../assets/images/sneakers-logo.png";
import { styled, alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

import { LinkTab } from "./LinkTab";

const drawerWidth = 270;

// * Drawer Head
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  marginRight: "0.1rem",
}));

// * Search div style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "inherit",
    width: "20%",
  },
}));

// * Search Icon Wrapper div
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// * Styling Input Base Componant
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Header = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "secondary.main", color: "primary.main", width: "100%" }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["New & Featured", "For men", "For Women", "Sale", "Magazine"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Ways to Rent", "How to Clean", "About Us"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {["Sign In", "Login"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                <ListItemIcon>
                  {index === 1 ? <LoginIcon /> : <AccountCircleSharpIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "space-between" },
          alignItems: "center",
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Stack>
            <img src={logo} alt="logo" width={"80px"} className="logo" />
          </Stack>
        </IconButton>

        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          textColor="inherit"
          centered
          aria-label="Tabs"
          spacing={{
            md: 3,
            xl: 5,
          }}
          sx={{
            display: {
              xl: "block",
              md: "block",
              sm: "block",
              xs: "none",
            },
          }}
        >
          <LinkTab label="New & Featured" href="/featured" />
          <LinkTab label="For men" href="/men" />
          <LinkTab label="For Women" href="/women" />
          <LinkTab label="Sale" href="/sale" />
          <LinkTab label="Ways to Rent" href="/rent" />
          <LinkTab label="How to Clean" href="clean" />
          <LinkTab label="Magazine" href="/magazine" />
        </Tabs>

        <Stack
          direction={{ xs: "row-reverse", sm: "row" }}
          spacing={{ xs: 0, sm: 2, md: 5 }}
          alignItems={"center"}
          flexGrow={{ xs: 1, sm: 0 }}
          
        >
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", sm: "none" } }}
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="search"
              inputProps={{ "aria-label": "Search" }}
            />
          </Search>

          <IconButton color="inherit" size="small">
            <Box
              display={{ sm: "none", xs: "none", md: "flex" }}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <PersonIcon />
              <Typography variant="body2" color={"inherit"}>
                Login
              </Typography>
            </Box>
          </IconButton>

          <IconButton color="inherit" size="small">
            <ShoppingBagIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
