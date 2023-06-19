import React from "react";
import {
  ContactMoodel,
  FoodSwiper,
  MealsTabs,
  MineTitel,
} from "../components/home";
import MinSwiper from "../components/home/MinSwiper";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import BookTable from "../components/BookTable";
import { Store } from "../context/DataStore";

const Home = () => {
  const {setBookTable}=Store()
  return (
    <div>
      <Grid container spacing={1} p={2} alignItems={"center"}>
        <Grid
          item
          md={6}
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <MineTitel text={"Our restaurant"} />
          <Typography variant="subtitle2" p={5} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Typography>
          <Typography variant="subtitle2" p={5} align="left">
            <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla
          </Typography>
          <Button variant="contained" color="secondary" onClick={()=>setBookTable(true)} >
            Book a table now
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <MinSwiper />
        </Grid>
      </Grid>
      <Box>
        <Box justifyContent={"center"} display={"flex"} width={"100%"}>
          <MineTitel text={"The most famous food"} />
        </Box>

        <FoodSwiper />
      </Box>
      <Container>
        <Box justifyContent={"center"} display={"flex"} width={"100%"} py={3}>
          <MineTitel text={"our stafe"} />
        </Box>
        <Grid container spacing={1} p={2} justifyContent={"space-between"}>
          <Grid item md={3} xs={12}>
            <img
              width={"100%"}
              height={"400"}
              src="https://i.pinimg.com/564x/a7/c1/8d/a7c18d56c4e4cf9b6fff544130d4c005.jpg"
              alt="staf1"
            />
          </Grid>
          <Grid item md={2} xs={12}>
            Obrigada @chefviniaffonso_ pela preferência em usar Bragard! 👏🏻🥰
            🚚Entrega para todo o Brasil, visite nossa loja online no perfil ou
            acesse www.bragard.com.br⁠ ⁠ Você também usa Bragard? Mande a sua
            📸para #bragardbrasil ou nos marque @bragard_br⁠ ⁠
          </Grid>
          <Grid item md={4} xs={12} sx={{ offset: 2 }}>
            <img
              src="https://i.pinimg.com/564x/1f/85/0a/1f850aa9be3504d8445758215156eeab.jpg"
              alt="stafe"
              width={"100%"}
              height={"400"}
            />
          </Grid>
          <Grid item md={2}>
            Bakers for four generations, the Roscioli family's latest venture in
            Rome is a combined café, pasticceria and wine bar with a difference.{" "}
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box justifyContent={"center"} display={"flex"} width={"100%"} py={3}>
          <MineTitel text={"Our kitchen"} />
        </Box>
        <MealsTabs />
      </Container>
      <Container>
        <Box justifyContent={"center"} display={"flex"} width={"100%"} py={3}>
          <MineTitel text={"Contact us "} />
        </Box>
        <Box>
          <ContactMoodel />
        </Box>
      </Container>

      <BookTable />
    </div>
  );
};

export default Home;
