import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import Apple from '../Pages/BrandDetails/Apple';
import Samsung from '../Pages/BrandDetails/Samsung';
import Sony from '../Pages/BrandDetails/Sony';
import Lava from '../Pages/BrandDetails/Lava';
import Intel from '../Pages/BrandDetails/Intel';
import Nokia from '../Pages/BrandDetails/Nokia';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/home/1',
                element: <Apple></Apple>
            },
            {
                path: '/home/2',
                element: <Samsung></Samsung>
            },
            {
                path: '/home/3',
                element: <Sony></Sony>
            },
            {
                path: '/home/4',
                element: <Lava></Lava>
            },
            {
                path: '/home/5',
                element: <Intel></Intel>
            },
            {
                path: '/home/6',
                element: <Nokia></Nokia>
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