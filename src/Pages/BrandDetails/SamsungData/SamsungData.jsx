import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Samsung from "./Samsung";

const SamsungData = () => {

    const samsungData = useLoaderData()

    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                {
                    samsungData.map(samsung => <Samsung
                        key={samsung.id}
                        samsung={samsung}
                    ></Samsung>)
                }
            </div>
        </div>
    );
};

export default SamsungData;