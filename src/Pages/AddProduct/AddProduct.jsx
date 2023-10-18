
const AddProduct = () => {
    return (
        <div className="bg-[#dbdbdb]">
            <form>

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
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full  mx-5" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text  mx-5">Type :</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type " placeholder="Type" className="input input-bordered w-full  mx-5" />
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