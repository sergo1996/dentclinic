import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import style from "./navigation.module.scss";
import useWindowDimensions from "../GetWindowDimensions/getWindowDimensions";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    margin: "0",

    display: "flex",

    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const Navigation = () => {
  const { height, width } = useWindowDimensions();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {width > 800 ? (
        <ul className={style.navigationlist}>
          {routes.map(
            (name) =>
              name.label && (
                <li key={name.path}>
                  <NavLink
                    exact={name.exact}
                    to={name.path}
                    className={style.navLi}
                    activeClassName={style.navigation_link_active}
                  >
                    {name.image && <img src={name.image} alt="first"></img>}
                    <span className={style.textNa}> {name.label}</span>
                  </NavLink>
                </li>
              )
          )}
        </ul>
      ) : (
        <div className={style.navigationlist__btn}>
          <NavLink
            exact="true"
            to="/dentclinic"
            className={style.navLi}
            activeClassName={style.navigation_link_active}
          >
            <img src="https://i.ibb.co/rc3jfYz/logo-c.jpg" alt="first"></img>
          </NavLink>
          <div>
            <IconButton
              variant="contained"
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              style={{
                backgroundColor: "rgba(0, 195, 255, 0.296)",
                marginRight: "20px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>

              <List>
                <ul className={style.navigationlist_fixed}>
                  {routes.map(
                    (name) =>
                      name.label && (
                        <li
                          className={style.li_fixed}
                          onClick={handleDrawerClose}
                          key={name.path}
                        >
                          <NavLink
                            exact={name.exact}
                            to={name.path}
                            className={style.navLi_fixed}
                            activeClassName={style.navigation_link_active}
                          >
                            <span className={style.textNa}> {name.label}</span>
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </List>
            </Drawer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
