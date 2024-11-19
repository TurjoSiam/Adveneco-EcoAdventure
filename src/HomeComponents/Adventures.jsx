import { useLoaderData } from "react-router-dom";
import AdventureDetails from "./AdventureDetails";
import 'animate.css';

const Adventures = () => {

    const allData = useLoaderData();

    return (
        <div className="w-11/12 mx-auto space-y-5">
            <h2 className="text-3xl font-extrabold">Eco-adventure Experiences</h2>
            <div className="grid grid-cols-3 gap-7 animate__animated animate__fadeIn animate__slow">
                {
                    allData.map(data => <AdventureDetails key={data.id} data={data}></AdventureDetails>)
                }
            </div>
        </div>
    );
};

export default Adventures;