import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AllSportsEquipment from '../Pages/AllSportsEquipment';
import AddEquipment from '../Pages/AddEquipment';
import MyEquipment from '../Pages/MyEquipment';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allSportsEquipment',
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:'/addEquipment',
                element:<AddEquipment></AddEquipment>
            },
            {
                path:'/myEquipment',
                element:<MyEquipment></MyEquipment>
            }
        ]
    }
])

export default router;