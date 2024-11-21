import { useLoaderData } from "react-router-dom";
import Adventure from "./Adventure";
import 'animate.css';

const Adventures = () => {

    const allData = useLoaderData();

    return (
        <div className="w-10/12 mx-auto space-y-3 md:space-y-7 my-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">"Your Next Wild Journey Awaits"</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 animate__animated animate__fadeIn animate__slow">
                {
                    allData.map(data => <Adventure key={data.id} data={data}></Adventure>)
                }
            </div>
        </div>
    );
};

export default Adventures;