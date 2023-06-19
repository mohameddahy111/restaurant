import React, { useState } from "react";
import Logo from "./components/Logo";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuList from "./components/MenuList";
import PersonInfo from "./components/PersonInfo";
import { Store } from "../../context/DataStore";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [openDrawir, setOpenDrawir] = useState(true);
  const { mobile } = Store();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Logo />
            </Box>
            {mobile ? (
              <Box position={"relative"}>
                <IconButton onClick={() => setOpenDrawir(!openDrawir)}>
                  <Menu />
                </IconButton>
                {openDrawir && (
                  <Box
                    position={"absolute"}
                    right={"10px"}
                    top={"50px"}
                    zIndex={3}
                    sx={{ opacity: 0.9, bgcolor: "#203040" }}
                    boxShadow={"0px 0px 10px #f3f3f3"}
                    width={"200px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"end"}
                    flexDirection={"column"}
                    p={2}
                  >
                    <Box>
                      <IconButton onClick={() => setOpenDrawir(false)}>
                        <Close />
                      </IconButton>
                    </Box>
                    <Box>
                      <MenuList />
                    </Box>
                    <Box>
                      <PersonInfo />
                    </Box>
                  </Box>
                )}
              </Box>
            ) : (
              <>
                <Box>
                  <MenuList />
                </Box>
                <Box>
                  <PersonInfo />
                </Box>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
