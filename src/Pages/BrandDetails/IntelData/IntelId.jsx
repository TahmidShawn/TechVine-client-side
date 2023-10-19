import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import IntelIdDesign from "./IntelIdDesign";


const IntelId = () => {

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
            <IntelIdDesign data={data}></IntelIdDesign>
        </div>
    );

};

export default IntelId;