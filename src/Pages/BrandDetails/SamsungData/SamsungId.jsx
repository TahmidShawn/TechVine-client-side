import { useEffect, useState } from "react";
import SamsungIdDesign from "./SamsungIdDesign";
import { useLoaderData, useParams } from "react-router-dom";


const SamsungId = () => {
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
            <SamsungIdDesign data={data}></SamsungIdDesign>
        </div>
    );
};

export default SamsungId;