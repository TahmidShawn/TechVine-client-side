import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Lava from "./Lava";

const LavaData = () => {
    const lavaData = useLoaderData()
    if (lavaData.length===0) {
        return <p className="text-center mt-10 text-4xl font-bold">no data available</p>
    }

    else {
        return (
            <div>
                <Advertisement></Advertisement>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                    {
                        lavaData.map(lava => <Lava
                            key={lava._id}
                            lava={lava}
                        ></Lava>)
                    }
                </div>
            </div>
        );
    }
};

export default LavaData;