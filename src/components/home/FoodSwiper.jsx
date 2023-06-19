import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import { Button, Grid, List, ListItem, Rating, Typography } from "@mui/material";

export default function FoodSwiper() {
  const meals = [
    {
      titel: "Tandoori Chicken ",
      src: "https://i.pinimg.com/564x/e9/ed/74/e9ed74b0e6f12dfd4f912b9509a3d41f.jpg",
      reate: "4.7",
      des: "Tandoori Chicken is a popular Indian dish but many versions are bland and dry. Our grilled Tandoori chicken recipe comes out juicy and exploding with flavor!",
    },
    {
      titel: "Blackened Shrimp ",
      src: "https://i.pinimg.com/564x/27/78/85/27788505008d85c3bc1c1ef84c8706f1.jpg",
      reate: "4.9",
      des: "Best Shrimp Recipes – As we developed many shrimp recipes over the years, we found ourselves amazed at the versatility of these humble crustaceans. Shrimp can blend into creamy soups and sauc…",
    },
    {
      titel: "Low-Carb Dinner Recipes",
      src: "https://i.pinimg.com/564x/52/7c/9c/527c9c7d8d04694f6e1339aaa24a5bbf.jpg",
      reate: "4.5",
      des: "Low-Carb Dinner Recipes – January is already here! We guess many of you will be looking for more low-carb options for dinner. So to have you covered, we compiled this list of our best low-car…",
    },
    {
      titel: "Grilled Steak & Shrimp ",
      src: "https://i.pinimg.com/564x/28/2e/22/282e222464666a3b7cb47b1ae41b44ad.jpg",
      reate: "4.6",
      des: "Grilled Steak & Shrimp slathered in garlic butter is an easy steak recipe that tastes like something out of a restaurant! Ready in less than 15 minutes!",
    },
    {
      titel: "Carne Asada prepared ",
      src: "https://i.pinimg.com/564x/3e/1a/f7/3e1af770941b6028a0e63731824de1d2.jpg",
      reate: "5",
      des: "Carne Asada prepared with a deliciously easy and authentic marinade just in time for your Cinco De Mayo menu planning! Juicy and tender grilled flank or skirt steak full of incredible Mexican flavours makes this homemade Carne Asada recipe better than any restaurant! Perfect for tacos, burritos, nachos...",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Autoplay]}
        className={`mySwiper`}
        autoplay={true}
        loop={true}
      >
        {meals.map((x, i) => (
          <SwiperSlide key={i}>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <img src={x.src} alt={x.titel} />
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItem>
                    <Typography variant="h6" px={2} fontWeight={600}>
                      {x.titel}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> Rating: {""}</span>
                      <Rating value={Number(x.reate) } readOnly precision={0.1} />
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          textTransform: "capitalize",
                        }}
                      >
                        <span>descriptor :{""}</span>
                        {x.des}
                      </Typography>
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
