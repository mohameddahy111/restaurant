import React from "react";
import { UseGetAll } from "../hooks/useApi";
import {
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
import { useNavigate } from "react-router-dom";

const MealsPage = () => {
  const navigate = useNavigate();
  const { meals } = UseGetAll();
  // console.log(meals);
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {meals.map((meal) => (
            <Grid item xs={12} sm={6} md={3} key={meal.id}>
              <Card>
                <CardActionArea>
                  <CardActions>
                    <CardMedia
                      component={"img"}
                      src={meal.strMealThumb}
                      onClick={() => navigate(`/mealDetales/${meal.idMeal}`)}
                    />
                  </CardActions>
                </CardActionArea>
                <List>
                  <ListItem>
                    <Typography variant="h6" fontWeight={600}>
                      {meal.strMeal}
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MealsPage;
