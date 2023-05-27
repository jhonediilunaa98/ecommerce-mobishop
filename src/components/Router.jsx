import { createBrowserRouter } from 'react-router-dom';
import Login from './login/Login';
import App from '../App';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "Home",
        element: <App />
    },
]);
 
export default Router;