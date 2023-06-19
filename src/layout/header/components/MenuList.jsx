import { Box, List, ListItem } from "@mui/material";
import React from "react";
import { Link  } from "react-router-dom";
import { Store } from "../../../context/DataStore";

const MenuList = () => {
  const { mobile } = Store();

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title:"Meals",
      link: "/meals",

    }
  ];
  return (
    <Box>
      <List
        sx={{
          display: mobile ? "block" : "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {menu.map((item) => (
          <ListItem key={item.title}>
            <Link  to={item.link} >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuList;
