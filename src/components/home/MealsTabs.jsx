import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  List,
  ListItem,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MealsTabs() {
  const [value, setValue] = useState(0);
  const [findMeal, setFindMeal] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const mealsType = [
    {
      id: 0,
      titel: "Italy",
      value: "Italy",
      chifImage:
        "https://i.pinimg.com/564x/ad/fd/25/adfd2558ed05ff508c39ccc7a81d0048.jpg",
      chifName: "bogaty",
      chifRating: "5 ",
      meals: [
        {
          id: 0,
          titel: `Bursting Tomato Flatbread `,

          img: "https://i.pinimg.com/564x/a4/c6/22/a4c6223b60f6f400454ca4d31efcdc20.jpg",
        },
        {
          id: 1,
          titel: `shrimp pasta`,
          img: "https://i.pinimg.com/564x/1e/c1/64/1ec164426dfb9c8e4f11f899e36351c0.jpg",
        },
        {
          id: 2,
          titel: "Roasted Vegetables with Garlic ",
          img: "https://i.pinimg.com/564x/42/ee/95/42ee954efcbd25f07f36924551de0ada.jpg",
        },
        {
          id: 3,
          titel: "One-Pan Roasted Cajun Chicken ",
          img: "https://i.pinimg.com/564x/19/78/34/1978343feb340ef892f80b7f45926991.jpg",
        },
        {
          id: 4,
          titel: "Garlic Herb Butter Chicken Thighs with Asparagus ",
          img: "https://i.pinimg.com/564x/df/e9/25/dfe92500f9859b268012cd01bb6de853.jpg",
        },
        // {
        //   id: 0,
        //   titel: "pizza ",
        //   img: "",
        // },
      ],
    },
    {
      id: 1,

      titel: "France",
      value: "France",
      chifImage:
        "https://i.pinimg.com/564x/63/a8/fb/63a8fbd27327b2957716ce63aa1316da.jpg",
      chifName: "pejo",
      chifRating: "4.8 ",
      meals: [
        {
          id: 0,
          titel: `Brioche French Toast Topped`,
          img: "https://i.pinimg.com/564x/de/f6/6c/def66c9078af909beaec85a24d6d6459.jpg",
        },
        {
          id: 1,
          titel: `This Starbucks Breakfast Sandwich Hack Is Worth The Effort`,
          img: "https://i.pinimg.com/564x/61/94/74/61947482caf6138cbf5866b3794b2304.jpg",
        },
        {
          id: 2,
          titel: `The Best French Toast`,
          img: "https://i.pinimg.com/564x/71/a6/12/71a6126a0d68ed0c4b37cdf67e1178f3.jpg",
        },
        {
          id: 3,
          titel: `Make-Ahead Croissant Breakfast Sandwiches`,
          img: "https://i.pinimg.com/564x/39/fc/30/39fc301f685b9d1c2b69386db5547adf.jpg",
        },
      ],
    },
    {
      id: 2,
      titel: "oriental food",
      value: "orientalFood",
      chifName: "Adel Hessan",
      chifImage:
        "https://i.pinimg.com/564x/45/01/bb/4501bbfdc57dba0cc093a8ef741b34c0.jpg",
      chifRating: "4.5",
      meals: [
        {
          id: 0,
          titel: `Mongolian Beef`,
          img: "https://i.pinimg.com/564x/c8/3a/4c/c83a4cc92e33a92688e17c91c4fd68c9.jpg",
        },
        {
          id: 1,
          titel: `Korean Short Ribs`,
          img: "https://i.pinimg.com/564x/5f/65/56/5f655617abe116bb855010ed669d66b9.jpg",
        },
        {
          id: 2,
          titel: `Easy Crock-Pot BBQ Ribs`,
          img: "https://i.pinimg.com/564x/55/7b/19/557b197b1934ab47e59674a1e1be634e.jpg",
        },
        {
          id: 3,
          titel: `Sausage and Peppers`,
          img: "https://i.pinimg.com/564x/05/fc/3c/05fc3c0178d3980f1130ff61f2f85f1d.jpg",
        },
      ],
    },
    {
      id: 3,
      titel: "Chinese food",
      value: "chinese ",
      chifName: "chi me",
      chifRating: "4.7",
      chifImage:
        "https://i.pinimg.com/564x/d6/6e/ce/d66ecedd9cb9954aeca547be60eeca2a.jpg",
      meals: [
        {
          id: 0,
          titel: "Lo Mein Noodles",
          img: "https://i.pinimg.com/564x/13/26/ef/1326ef17186fded92e3f521c7764e68e.jpg",
        },
        {
          id: 1,
          titel: "Beef Lo Mein - Khin's Kitchen - Chinese Noodles Recipe",
          img: "https://i.pinimg.com/564x/5f/49/bc/5f49bc970b094fb5b3094b16c87851de.jpg",
        },
        {
          id: 2,
          titel: "Chicken Chow Mein",
          img: "https://i.pinimg.com/564x/47/b1/cd/47b1cd024ae5cc2a53815a1b69006621.jpg",
        },
        {
          id: 3,
          titel: " Shrimp Chow Mein",
          img: "https://i.pinimg.com/564x/01/a9/61/01a961c8568373f29dcfce5d16bc0d89.jpg",
        },
        {
          id: 4,
          titel: " dumpling sauces",
          img: "https://i.pinimg.com/564x/d2/75/26/d2752631b3174d75a0e6e24c33cf61ee.jpg",
        },
      ],
    },
  ];
  useEffect(() => {
    const dd = mealsType.find((x) => x.id === value);
    setFindMeal(dd);
  }, [value]);
  return (
    <Box
      sx={
        {
          // flexGrow: 1,
          // bgcolor: "background.paper",
          // display: "flex",
        }
      }
    >
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {mealsType.map((x, i) => (
          <Tab key={i} label={x.titel} {...a11yProps(x.id)} />
        ))}
      </Tabs>
      {findMeal && (
        <TabPanel value={findMeal?.id} index={findMeal?.id}>
          <Grid container spacing={1} p={2}>
            <Grid item xs={12} md={3}>
              <List>
                <ListItem>
                  <img
                    src={findMeal?.chifImage}
                    alt={findMeal.titel}
                    width={"100%"}
                  />
                </ListItem>
                <ListItem>
                  <Typography variant="body1" textTransform={"capitalize"}>
                    <span>Chif Name : </span> {findMeal?.chifName}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Rating
                    readOnly
                    precision={0.1}
                    value={Number(findMeal?.chifRating)}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={1}>
                {findMeal?.meals?.map((x, i) => (
                  <Grid item xs={12} md={3} key={i}>
                    <Card key={i} sx={{ height: "400px" }}>
                      <CardMedia component={"img"} src={x.img} height={300} />

                      <CardActions>
                        <CardActionArea>
                          <Link to="/">
                            <Typography
                              fontWeight={600}
                              variant="body1"
                              component="h5"
                            >
                              {x.titel}
                            </Typography>
                          </Link>
                        </CardActionArea>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      )}
    </Box>
  );
}
