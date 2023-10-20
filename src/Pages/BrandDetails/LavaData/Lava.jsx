/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Lava = ({ lava }) => {
    const { _id, name, type, price, image, brandName, rating } = lava



    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <figure><img className="w-64 h-60" src={image} /></figure>
            <div className="card-body">
                <hr />
                <h2 className="font-bold text-3xl">{name}</h2> <hr />
                <p className="font-bold">Brand Name: {brandName}</p> <hr />
                <p className="font-bold">Type: {type}</p> <hr />
                <p className="font-bold">Price: {price}</p> <hr />
                <p className="font-bold">Rating: {rating}</p> <hr />
                <Link to={`/home/5/${_id}`}><button className="btn btn-info">View Details</button></Link>
                <Link to={`/updateIntel/${_id}`}><button className="btn btn-success">Update Product</button></Link>
            </div>
        </div>
    );
};

export default Lava;