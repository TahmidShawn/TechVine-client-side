
const Newsletter = () => {
    return (
        <div className="bg-slate-700 text-white flex flex-col justify-center items-center p-10 mt-10">
            <h2 className="text-3xl font-bold">Knowledge Newsletter from TechVine</h2>
            <p className="mt-7 text-center">Hear from our seasoned event experts when you subscribe to the newsletter. Access our <br /> eBooks and guides, industry trends, and latest product updates.</p>
            <input className="w-1/2 p-2 mt-6 rounded-sm text-black" type="email" name="" id="" placeholder="Email" />
            <button className="btn bg-white mt-5 px-10 font-bold">Submit</button>
        </div>
    );
};

export default Newsletter;