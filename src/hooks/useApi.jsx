import axios from "axios";
import { useEffect, useState } from "react";

export const UseGetAll = () => {
  const [meals, setMeals] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");
  async function getAll() {
    return await axios.get(
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
      {
        headers: {
          "X-RapidAPI-Key":
            "af91ac563fmsh4e5021114e8f977p1b04bejsn068b6102ebc5",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
        params:{
          'nutrition-type': 'cooking',
          'category[0]': 'generic-foods',
          'health[0]': 'alcohol-free'
        }
      }
    );
  }
  useEffect(() => {
    getAll()
      .then((res) => {
        if (res.data.hints.length> 0) {
          setMeals(res.data);
          setLoding(false);
        } else {
          setLoding(false);
          setError("no data found");
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoding(false);
      });
  }, []);
  return { meals, loding, error,setMeals };
};
