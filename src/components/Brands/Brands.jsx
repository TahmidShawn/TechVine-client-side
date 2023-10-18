import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {

    const brands = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-2 bg-[#dbdbdb] p-2">
            {
                brands.map(brand => <Brand
                    brand={brand}
                    key={brand.id}
                ></Brand>)
            }
        </div>
    );
};

export default Brands;