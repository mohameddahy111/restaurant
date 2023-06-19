import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../context/DataStore";
import BookTable from "../components/BookTable";

const MealDetiles = () => {
  const {setBookTable}=Store()
  const [data, setData] = useState([]);
  const [strIngredient, setStrIngredient] = useState([]);
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(true);
  const parmas = useParams();
  const gitMealDetiles = async () => {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parmas.idMeal}`
    );
  };
  useMemo(() => {
    gitMealDetiles()
      .then((res) => {
        console.log(res.data.meals[0]);
        setData(res.data.meals[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  const uu = () => {
    const list = [];
    Object.keys(data).map((x, index) => {
      if (x.includes(`strIngredient`) && data[x] !== "") {
        list.push({ key: x, value: data[x] });
        setStrIngredient(list);
      }
      if (x.includes(`strMeasure`) && data[x] !== " ") {
        list.push({ key: x, value: data[x] });
        setStrIngredient(list);
      }
      return list;
    });
  };
  console.log(strIngredient);

  useEffect(() => {
    uu();
  }, [data]);

  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Container sx={{ p: "10px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <img src={data?.strMealThumb} alt="ee" width={"100%"} />
              <Box>
                <Typography component={"h6"} variant="body1">
                  Instructions : {""}
                </Typography>
                <span>{data?.strInstructions}</span>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <Typography component={"h2"} variant="h4">
                    {data?.strMeal}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={"h6"} variant="body1">
                    Area : {""}
                  </Typography>
                  <span>{data?.strArea}</span>
                </ListItem>
                <ListItem>
                  <Typography component={"h6"} variant="body1">
                    Category : {""}
                  </Typography>
                  <span>{data?.strCategory}</span>
                </ListItem>
                <ListItem >
                  <Grid container spacing={1}>
                    <Typography variant="h6" component={'h6'} textTransform={'capitalize'} >
                    strIngredient
                    </Typography>

                  <Grid item xs={3} md={4} mt={1}>
                    {strIngredient.map((x, index) => (
                      <Box key={index}>
                        {x.key.includes("strIngredient") && <p>{x.value} : </p>} 
                      </Box>
                    ))}
                  </Grid>
                  <Grid item xs={3} md={4}>
                    {" "}
                    {strIngredient.map((x, index) => (
                      <Box key={index}>{x.key.includes("strMeasure") && <p>{x.value} </p>}</Box>
                      ))}
                  </Grid>
                      </Grid>
                </ListItem>
              </List>
                <Box display={"flex" } justifyContent={"center"} gap={2}>
                  <Button fullWidth variant="contained" color="secondary" onClick={()=>setBookTable(true)}>Book a tabel  </Button>
                  <Button fullWidth variant="contained">order delivery </Button>
                </Box>
            </Grid>
          </Grid>
          <BookTable/>

        </Container>
      )}
    </>
  );
};

export default MealDetiles;
