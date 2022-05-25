import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
  header_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  switch_mode: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    cursor: "pointer",
    userSelect: "none",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.header_container}>
          <h2 className="logo">Where in the world?</h2>
          <div className={classes.switch_mode}>
            {" "}
            <DarkModeIcon />
            <h3>Dark Mode</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
