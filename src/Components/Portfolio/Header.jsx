import React, { useState, useEffect } from "react";
import "../../Utils/Styles/header.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClickScroll = (id) => {
    
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row header">
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <div className="col-9">
              <ul className="nav ">
                <li className="nav-item">
                  <a className=" myname-text" href="#">
                    <span className="site-name-first">Bavely</span>{" "}
                    <span className="site-name-last">Tawfik </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 nav-menu">
            <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <a className="  menu-link" href="#introduction" onClick={() => handleClickScroll( "introduction")}>
                    About
                  </a>
                  <a className="  menu-link" href="#skills" onClick={() => handleClickScroll( "skills")}>
                    Skills
                  </a>
                  <a className="  menu-link" href="#works" onClick={() => handleClickScroll( "works")}>
                    Portfolio
                  </a>
                  <a className=" contactmeLink menu-link" href="#contactme" onClick={() => handleClickScroll( "contactme")}>
                    Contact Me
                  </a>
      </Stack>
            </div>
            <div className="col-3 menu-button">
              <ul className="nav ">
                <li className="nav-item">
                  {open ? (
                    <></>
                  ) : (
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2, borderRadius: 2, border: 0.5, padding: 1 }}
                      onClick={toggleDrawer(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}

                  <SwipeableDrawer
                    // container={container}
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={40}
                    disableSwipeToOpen={false}
                    ModalProps={{
                      keepMounted: true,
                    }}
                    sx={{
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                      backgroundColor: "transparent",
                    }}

                  >
         <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
        sx={{
          textAlign: "center",
        }}
      >
        <a className="  menu-link" href="#introduction" onClick={() =>{toggleDrawer(false); handleClickScroll( "introduction")}}>
                    About
                  </a>
                  <a className="  menu-link" href="#skills" onClick={() =>{toggleDrawer(false); handleClickScroll( "skills")}}>
                    Skills
                  </a>
                  <a className="  menu-link" href="#works" onClick={() => {toggleDrawer(false);handleClickScroll( "works")}}>
                    Portfolio
                  </a>
                  <a className="  menu-link" href="#contactme" onClick={() => {toggleDrawer(false); handleClickScroll( "contactme")}}>
                    Contact Me
                  </a>
      </Stack>
                  </SwipeableDrawer>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3 mt-5 p-5">
<div className="row align-items-center ">
<div className="col-12 d-flex justify-content-center">
<p ><span className="Hello">HELLO, </span></p>
</div>
<div className="col-12 d-flex justify-content-center">
<p className="greeting">WELCOME TO MY ONLINE PORTFOLIO</p>
</div>
<div className="col-12 d-flex justify-content-center" onClick={() => handleClickScroll( "works")}>
<p className="greeting-btn">VIEW MY WORK</p>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
