import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        className="header"
        sx={{ flexGrow: 1, minHeight: "52px", height: "60vh" }}
      >
        <AppBar position="static" style={{ 
          backgroundColor: "#fff",
          boxShadow:"none",
          borderRadius:"100px"
           }}>
          <Toolbar>
            <div className="menu-bar">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "#000", mt: 0 }}
                onClick={toggleDrawer(true)}
              >
                <HiMenuAlt1 style={{ fontSize: "30px" }} />
              </IconButton>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Sidebar />
            </Drawer>
            {/* <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#fff", mt: -1 }}>
                Dashboard
              </Typography> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
