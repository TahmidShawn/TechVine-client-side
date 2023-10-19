import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Sony from "./Sony";

const SonyData = () => {

    const sonyData = useLoaderData()

    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                {
                    sonyData.map(sony => <Sony
                        key={sony.id}
                        sony={sony}
                    ></Sony>)
                }
            </div>
        </div>
    );
};

export default SonyData;