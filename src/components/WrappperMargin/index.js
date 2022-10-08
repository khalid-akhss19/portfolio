import React from "react";
import { makeStyles } from "@material-ui/core";

const WrappperMargin = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.WrappperMargin}>{children}</div>;
};

export default WrappperMargin;

const useStyles = makeStyles((theme) => ({
  WrappperMargin: {
    marginLeft: "54px",
    marginRight: "54px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "none",
      paddingRight: "none",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "none",
      paddingRight: "none",
    },
  },
}));
