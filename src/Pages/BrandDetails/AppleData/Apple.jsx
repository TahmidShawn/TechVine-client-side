
const Apple = ({ apple }) => {

    const { name, type, price, color, image, brandName, rating, detailsButton, updateButton } = apple

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-64 h-60" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <p>{type}</p>
                <p>{price}</p>
                <p>{color}</p>
                <p>{rating}</p>
                <button>{detailsButton}</button>
                <button>{updateButton}</button>
            </div>
        </div>
    );
};

export default Apple;