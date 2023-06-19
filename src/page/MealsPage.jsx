import React, { Fragment, useState } from "react";
import { UseGetAll } from "../hooks/useApi";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MealsPage = () => {
  const navigate = useNavigate();
  const { meals, setMeals } = UseGetAll();
  const click = async () => {
    await axios.get(meals._links?.next?.href).then((res) => {
      setMeals(res.data);
    });
  };
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {meals?.hints?.map((meal) => (
            <Fragment key={meal.food.foodId}>
              {meal.food.image && (
                <Grid item xs={12} sm={6} md={3} >
                  <Card>
                    <CardActionArea>
                      <CardActions>
                        <CardMedia
                          component={"img"}
                          src={meal.food.image}
                          // onClick={() => navigate(`/mealDetales/${meal.idMeal}`)}
                        />
                      </CardActions>
                    </CardActionArea>
                    <List>
                      <ListItem>
                        <Typography variant="h6" fontWeight={600}>
                          {meal.food.label}
                        </Typography>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              )}
            </Fragment>
          ))}
        </Grid>
          <Link to={meals._links?.next?.href}>
            <Typography>{meals._links?.next?.title}</Typography>
          </Link>
          <Button
            onClick={() => {
              click();
            }}
          >
            next
          </Button>
      </Container>
    </>
  );
};

export default MealsPage;
