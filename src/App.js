import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routers from './router/router';

function App() {
  return (
    <RouterProvider router={Routers}>
    </RouterProvider>
  );
}

export default App;
