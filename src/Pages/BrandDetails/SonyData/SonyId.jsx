import { useEffect, useState } from "react";
import SonyIdDesign from "./SonyIdDesign";
import { useLoaderData, useParams } from "react-router-dom";


const SonyId = () => {
    const [data, setData] = useState([])
    const { _id } = useParams()
    const total = useLoaderData()
    console.log(data);

    useEffect(() => {
        const findData = total?.find(data => data._id === _id)
        setData(findData)
    }, [_id, total])
    console.log(data);


    return (
        <div className="mt-20">
            <SonyIdDesign data={data}></SonyIdDesign>
        </div>
    );
};

export default SonyId;