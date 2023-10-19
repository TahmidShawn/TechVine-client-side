/* eslint-disable react/prop-types */

const SonyIdDesign = ({data}) => {
    const { name, type, price, image, brandName, rating } = data

    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img src={image} alt="Movie" className="w-80" /></figure>
            <div className="card-body">

                <h2 className="font-bold text-3xl">{name}</h2>
                <p className="font-bold">Brand Name: {brandName}</p>
                <p className="font-bold">Type: {type}</p>
                <p className="font-bold">Price: {price}</p>
                <p className="font-bold">Rating: {rating}</p>
                <button className="btn btn-success">Add to Cart</button>
            </div>
        </div>
    )
};

export default SonyIdDesign;