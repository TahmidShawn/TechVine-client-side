import { useLoaderData } from "react-router-dom";
import Advertisement from "../../../components/Advertisement/Advertisement";
import Apple from "./Apple";

const AppleData = () => {

    const appleData = useLoaderData()

    return (
        <div>
            <Advertisement></Advertisement>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
                {
                    appleData.map(apple => <Apple
                        key={apple.id}
                        apple={apple}
                    ></Apple>)
                }
            </div>
        </div>
    );
};

export default AppleData;