import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AllSportsEquipment from '../Pages/AllSportsEquipment';
import AddEquipment from '../Pages/AddEquipment';
import MyEquipment from '../Pages/MyEquipment';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from '../Components/PrivateRoute';
import ProductCards from '../Components/ProductCard';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:5000/sliceEquipment")
            },
            {
                path:'/allSportsEquipment',
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:'/addEquipment',
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:'/myEquipment',
                element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;