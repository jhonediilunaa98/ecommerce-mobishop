import { createBrowserRouter } from 'react-router-dom';
import Login from './login/Login';
//import App from '../App';
import Navbar from './navbar/navbar';
import ProductCard from './products/ProductCard';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <ProductCard />
    },
    {
        path: "/nav",
        element: <Navbar />
    },
]);
 
export default Router;