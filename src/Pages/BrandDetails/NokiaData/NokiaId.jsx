import { useEffect, useState } from "react";
import NokiaIdDesign from "./NokiaIdDesign";
import { useLoaderData, useParams } from "react-router-dom";

const NokiaId = () => {
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
            <NokiaIdDesign data={data}></NokiaIdDesign>
        </div>
    );
};

export default NokiaId;