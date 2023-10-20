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
import AppleId from '../Pages/BrandDetails/AppleData/AppleId';
import IntelId from '../Pages/BrandDetails/IntelData/IntelId';
import NokiaId from '../Pages/BrandDetails/NokiaData/NokiaId';
import SamsungId from '../Pages/BrandDetails/SamsungData/SamsungId';
import SonyId from '../Pages/BrandDetails/SonyData/SonyId';
import Update from '../Pages/Update/Update';
import UpdateSamsung from '../Pages/Update/UpdateSamsung';
import UpdateNokia from '../Pages/Update/UpdateNokia';
import UpdateSony from '../Pages/Update/UpdateSony';
import UpdateIntel from '../Pages/Update/UpdateIntel';
import LavaId from '../Pages/BrandDetails/LavaData/LavaId';
import UpdateLava from '../Pages/Update/UpdateLava';
import Register from '../Pages/Register/Register';


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
                path: 'home/1/:_id',
                element: <AppleId></AppleId>,
                loader: () => fetch('http://localhost:5000/apple')
            },
            {
                path: '/home/2',
                element: <SamsungData></SamsungData>,
                loader: () => fetch('http://localhost:5000/samsung')
            },
            {
                path: '/home/2/:_id',
                element: <SamsungId></SamsungId>,
                loader: () => fetch('http://localhost:5000/samsung')
            },
            {
                path: '/home/3',
                element: <SonyData></SonyData>,
                loader: () => fetch('http://localhost:5000/sony')
            },
            {
                path: '/home/3/:_id',
                element: <SonyId></SonyId>,
                loader: () => fetch('http://localhost:5000/sony')
            },
            {
                path: '/home/4',
                element: <LavaData></LavaData>,
                loader: () => fetch('http://localhost:5000/lava')
            },
            {
                path: '/home/4/:_id',
                element: <LavaId></LavaId>,
                loader: () => fetch('http://localhost:5000/lava')
            },
            {
                path: '/home/5',
                element: <IntelData></IntelData>,
                loader: () => fetch('http://localhost:5000/intel')
            },
            {
                path: '/home/5/:_id',
                element: <IntelId></IntelId>,
                loader: () => fetch('http://localhost:5000/intel')
            },
            {
                path: '/home/6',
                element: <NokiaData></NokiaData>,
                loader: () => fetch('http://localhost:5000/nokia')
            },
            {
                path: '/home/6/:_id',
                element: <NokiaId></NokiaId>,
                loader: () => fetch('http://localhost:5000/nokia')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateApple/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)

            },
            {
                path: '/updateSamsung/:id',
                element: <UpdateSamsung></UpdateSamsung>,
                loader: ({ params }) => fetch(`http://localhost:5000/samsung/${params.id}`)
            },
            {
                path: '/updateNokia/:id',
                element: <UpdateNokia></UpdateNokia>,
                loader: ({ params }) => fetch(`http://localhost:5000/nokia/${params.id}`)
            },
            {
                path: '/updateSony/:id',
                element: <UpdateSony></UpdateSony>,
                loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
            },
            {
                path: '/updateIntel/:id',
                element: <UpdateIntel></UpdateIntel>,
                loader: ({ params }) => fetch(`http://localhost:5000/intel/${params.id}`)
            },
            {
                path: '/updateLava/:id',
                element: <UpdateLava></UpdateLava>,
                loader: ({ params }) => fetch(`http://localhost:5000/lava/${params.id}`)
            }

        ]
    },
])

export default Routes;