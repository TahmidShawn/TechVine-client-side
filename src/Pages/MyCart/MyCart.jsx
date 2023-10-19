import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const MyCart = () => {
    const products = useLoaderData()
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                products.map(product=><Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default MyCart;