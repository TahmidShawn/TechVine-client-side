/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const Product = ({ product }) => {

    const { _id, Name, Type, Price, Image, BrandName, Rating } = product

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

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
                <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
            </div>

        </div>
    );

}
export default Product;