import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const newProduct = { name, image, brandName, type, price, shortDescription, rating }

        console.log(newProduct);

        if (newProduct.brandName === 'apple') {
            // send data to the server
            fetch('http://localhost:5000/apple', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        else if (newProduct.brandName === 'samsung') {
            // send data to the server
            fetch('http://localhost:5000/samsung', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        else if (newProduct.brandName === 'nokia') {
            // send data to the server
            fetch('http://localhost:5000/nokia', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        else if (newProduct.brandName === 'intel') {
            // send data to the server
            fetch('http://localhost:5000/intel', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        else if (newProduct.brandName === 'sony') {
            // send data to the server
            fetch('http://localhost:5000/sony', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
        else if (newProduct.brandName === 'lava') {
            // send data to the server
            fetch('http://localhost:5000/lava', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

    }
    return (
        <div className="bg-[#dbdbdb]">
            <form onSubmit={handleAddProduct}>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mx-5">Image URL :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full mx-5" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  mx-5">Name :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text  mx-5">Brand Name :</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full mx-5" name="brandName">
                                <option disabled selected>Select Brand</option>
                                <option>apple</option>
                                <option>nokia</option>
                                <option>lava</option>
                                <option>intel</option>
                                <option>samsung</option>
                                <option>sony</option>
                            </select>
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  mx-5">Type :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text  mx-5">Price :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  mx-5">Short description :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" placeholder="Short description" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text  mx-5">Rating :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block font-bold text-xl" />

            </form>
        </div>
    );
};

export default AddProduct;