/* eslint-disable react/prop-types */

const Brand = ({ brand }) => {
    const { brand_name, brand_url } = brand
    return (
        <div className="card card-compact bg-base-100 rounded-none shadow-lg">
            <figure><img src={brand_url} alt="Shoes" className="w-48 h-32 mt-5"/></figure>
            <div className="card-body">
                <h2 className="card-title text-center"> {brand_name} </h2>
            </div>
        </div>
    );
};

export default Brand;