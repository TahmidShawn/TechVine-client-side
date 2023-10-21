
import Swal from "sweetalert2";

const LavaIdDesign = ([data]) => {
    const { name, type, price, image, brandName, rating } = data

    const handleSubmit = () => {
        const Name = name
        const Type = type
        const Price = price
        const Image = image
        const BrandName = brandName
        const Rating = rating
        const product = { Name, Type, Price, Image, BrandName, Rating }
        console.log(product);

        fetch('https://assignment-10-server-janbgae6o-tahmids-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // eslint-disable-next-line no-undef
                    Swal.fire({
                        title: 'success',
                        text: 'product added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
            })
    }


    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img src={image} alt="Movie" className="w-80" /></figure>
            <div className="card-body">

                <h2 className="font-bold text-3xl">{name}</h2>
                <p className="font-bold">Brand Name: {brandName}</p>
                <p className="font-bold">Type: {type}</p>
                <p className="font-bold">Price: {price}</p>
                <p className="font-bold">Rating: {rating}</p>
                <button onClick={handleSubmit} className="btn btn-success">Add to Cart</button>
            </div>
        </div>
    );
};

export default LavaIdDesign;