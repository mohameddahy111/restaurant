import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/food-logo.png";
import { Store } from "../../../context/DataStore";

const Logo = () => {
  const {mobile}=Store()
  return (
    <>
      <Link to="/">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img src={logo} alt="logo" width={100} />
          <Typography
            fontWeight={800}
            color={"secondary"}
            component={"h1"}
            variant={mobile ? "h6" : "h4"}
          >
            Galler Food{" "}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default Logo;
