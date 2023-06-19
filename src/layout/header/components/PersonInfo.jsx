import { Bedtime, ShoppingCart, WbSunny } from "@mui/icons-material";
import { Box, MenuItem, Select, Switch } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Store } from "../../../context/DataStore";

const PersonInfo = () => {
  const { mobile, mode, setMode } = Store();
  const darkMode = () => {
    setMode(!mode)
    localStorage.setItem("mode", JSON.stringify(!mode));
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      flexDirection={mobile && "column"}
      // sx={mobile &&mode!=='dark'?{ color: "#203040" }:{ color: "#fff"}}
    >
      <Switch
        checkedIcon={<WbSunny color="secondary" />}
        icon={<Bedtime color="#fff" />}
        onChange={() => darkMode()}
        checked={mode}
      />
      <Select defaultValue={"ar"} sx={{ color: "inherit" }}>
        <MenuItem value={"ar"}>عربي</MenuItem>
        <MenuItem value={"en"}>English</MenuItem>
      </Select>
      <Link to={"/cart"}>
        <ShoppingCart />
      </Link>
    </Box>
  );
};

export default PersonInfo;
