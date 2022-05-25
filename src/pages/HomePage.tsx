import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Country from "../component/Country/Index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  app_body: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: "1400",
  },
  inputs: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search_inputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "300px",
    padding: 5,
    borderRadius: "5px",
    gap: "5px",
  },
  search_inputs_input: {
    border: 0,
    backgroundColor: "transparent",
    outline: "none",
    fontSize: "18px",
  },
  select_region: {
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    padding: 5,
    borderRadius: 5,
  },
  select_region_select: {
    padding: 5,
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.app_body}>
      <div className={classes.inputs}>
        <div className={classes.search_inputs}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for a Country ..."
            className={classes.search_inputs_input}
          />
        </div>
        <div className={classes.select_region}>
          <select className={classes.select_region_select}>
            <option>All</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>europe</option>
          </select>
        </div>
      </div>

      <Country />
    </div>
  );
};

export default HomePage;
