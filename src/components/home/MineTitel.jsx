import { Typography } from "@mui/material";
import React from "react";

const MineTitel = ({ text }) => {
  return (
    <>
      <Typography p={2} component={"h2"} fontWeight={700} variant="h4" sx={{textTransform:'capitalize'}}  >
        {text}
        
      </Typography>
    </>
  );
};

export default MineTitel;
