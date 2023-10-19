/* eslint-disable react/prop-types */


const Product = ({ product }) => {
    const { Name, Type, Price, Image, BrandName, Rating } = product
    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <figure><img className="w-64 h-60" src={Image} /></figure>
            <div className="card-body">
                <hr />
                <h2 className="font-bold text-3xl">{Name}</h2> <hr />
                <p className="font-bold">Brand Name: {BrandName}</p> <hr />
                <p className="font-bold">Type: {Type}</p> <hr />
                <p className="font-bold">Price: {Price}</p> <hr />
                <p className="font-bold">Rating: {Rating}</p> <hr />
                <button className="btn btn-warning">Delete</button>
            </div>

        </div>
    );
};

export default Product;