import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Intel from "./intel";

const IntelData = () => {
    
    const intelData = useLoaderData()

    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                {
                   intelData.map(intel=><Intel
                    key={intel.id}
                    intel={intel}
                   ></Intel>)
                }
            </div>
        </div>
    );
};

export default IntelData;


