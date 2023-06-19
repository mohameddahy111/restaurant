import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, MealDetiles, MealsPage } from "../page";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/meals',
        element: <MealsPage />,
      },
      {
        path:'/mealDetales/:idMeal',
        element: <MealDetiles />,
      },
    ],
  },
]);
export default Routers;
