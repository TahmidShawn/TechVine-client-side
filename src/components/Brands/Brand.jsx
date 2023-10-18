/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { id, brand_name, brand_url } = brand;



    return (
        <Link to={`/home/${id}`}>
            <div className="card card-compact bg-base-100 rounded-none shadow-lg">
                <figure><img src={brand_url} alt="Shoes" className="w-48 h-32 mt-5" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center"> {brand_name} </h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;