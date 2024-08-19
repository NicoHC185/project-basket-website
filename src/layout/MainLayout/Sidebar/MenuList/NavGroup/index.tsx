import PropTypes from "prop-types";

// material-ui
import {
  Avatar,
  ButtonBase,
  List,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// project imports
import NavItem from "../NavItem";
import NavCollapse from "../NavCollapse";
import { IMenu } from "interfaces";
import { useAppDispatch, useAppSelector } from "hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { RootState } from "store";
import { SET_MENU } from "store/actions";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }: { item: IMenu }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const customizationReducer = useAppSelector(
    (state) => state.customizationReducer
  );
  const leftDrawerOpened = useAppSelector(
    (state: RootState) => state.customizationReducer?.opened
  );
  const { opened } = customizationReducer;
  // menu list collapse & items
  const items = item.children?.map((menu: IMenu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  return (
    <>
      <List
        sx={{
          pt: 2,
        }}
        subheader={
          <>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignContent={"center"}
            >
              {opened && item.title && (
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "inherit",
                    paddingBottom: 1,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                  {item.caption && (
                    <Typography display="block" gutterBottom>
                      {item.caption}
                    </Typography>
                  )}
                </p>
              )}
              {item.id === "nba" && (
                <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      transition: "all .2s ease-in-out",
                      background: theme.palette.primary.light,
                      color: theme.palette.primary.dark,
                      "&:hover": {
                        background: theme.palette.primary.main,
                      },
                    }}
                    onClick={() => handleLeftDrawerToggle()}
                    color="inherit"
                  >
                    <IconMenu2 stroke={1.5} size="1.3rem" />
                  </Avatar>
                </ButtonBase>
              )}
            </Stack>
          </>
        }
      >
        {items}
      </List>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
