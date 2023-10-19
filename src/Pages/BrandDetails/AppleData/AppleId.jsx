import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AppleIdDesign from "./AppleIdDesign";


const AppleId = () => {

    const [data,setData] = useState([])
    const {_id} = useParams()
    const total = useLoaderData()
    console.log(data);

    useEffect(() => {
        const findData = total?.find(data => data._id === _id)
        setData(findData)
    }, [_id, total])
    console.log(data);


    return (
        <div className="mt-20">
            <AppleIdDesign data={data}></AppleIdDesign>
        </div>
    );
};

export default AppleId;