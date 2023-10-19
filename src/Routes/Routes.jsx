import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import AppleData from '../Pages/BrandDetails/AppleData/AppleData';
import SamsungData from '../Pages/BrandDetails/SamsungData/SamsungData';
import SonyData from '../Pages/BrandDetails/SonyData/SonyData';
import LavaData from '../Pages/BrandDetails/LavaData/LavaData';
import IntelData from '../Pages/BrandDetails/IntelData/IntelData';
import NokiaData from '../Pages/BrandDetails/NokiaData/NokiaData';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: '/home/1',
                element: <AppleData></AppleData>,
                loader: () => fetch('http://localhost:5000/apple')
            },
            {
                path: '/home/2',
                element: <SamsungData></SamsungData>
            },
            {
                path: '/home/3',
                element: <SonyData></SonyData>
            },
            {
                path: '/home/4',
                element: <LavaData></LavaData>
            },
            {
                path: '/home/5',
                element: <IntelData></IntelData>
            },
            {
                path: '/home/6',
                element: <NokiaData></NokiaData>
            },

            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
])

export default Routes;