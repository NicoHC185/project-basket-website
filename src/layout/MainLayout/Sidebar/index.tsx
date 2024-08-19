"use client";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import MenuList from "./MenuList";
import LogoSection from "../LogoSection";
import { drawerWidth, minDrawerWidth } from "store/constant";
import { useAppSelector } from "hooks";

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen }: { drawerOpen: boolean }) => {
  const theme = useTheme();
  const { borderRadius } = useAppSelector(
    (state) => state.customizationReducer
  );
  const matchUpMd = useMediaQuery(theme.breakpoints.down("md"));
  const drawer = (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 2,
            mx: "auto",
          }}
        >
          <LogoSection />
        </Box>
      </Box>
      <PerfectScrollbar
        component="div"
        style={{
          height: matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <MenuList />
      </PerfectScrollbar>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? "auto" : drawerWidth,
        backgroundColor: theme.palette.background.default,
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerOpen ? drawerWidth : minDrawerWidth,
            background: theme.palette.primary.main,
            color: theme.palette.text.primary,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            borderRight: "none",
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;
