import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Nokia from "./Nokia";

const NokiaData = () => {

    const nokiaData = useLoaderData()

    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                {
                    nokiaData.map(nokia => <Nokia
                        key={nokia.id}
                        nokia={nokia}
                    ></Nokia>)
                }
            </div>
        </div>
    );
};

export default NokiaData;

