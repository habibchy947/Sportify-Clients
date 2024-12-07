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
import ProductDetails from '../Pages/ProductDetails';
import UpdateEquipment from '../Pages/UpdateEquipment';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("https://sportify-server-mu.vercel.app/sliceEquipment")
            },
            {
                path:'/allSportsEquipment',
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:'/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://sportify-server-mu.vercel.app/equipments/${params.id}`)
            },
            {
                path:'/addEquipment',
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:'/myEquipment',
                element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
                loader:()=>fetch('https://sportify-server-mu.vercel.app/equipments')
            },
            {
                path:'/updateEquipment/:id',
                element:<PrivateRoute><UpdateEquipment/></PrivateRoute>,
                loader:({params})=>fetch(`https://sportify-server-mu.vercel.app/equipments/${params.id}`)
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