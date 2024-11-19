import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';

const AdventureDetails = () => {

    const { adventureId } = useParams();
    const alldata = useLoaderData();
    const parseId = parseInt(adventureId);

    const adventure = alldata.find(item => item.id === parseId);

    const { adventureTitle, image, categoryName, adventureCost, bookingAvailability, adventureLevel, location, duration, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = adventure;

    return (
        <div className="relative w-8/12 mx-auto font-spinnaker my-10 animate__animated animate__zoomIn">
            <div className="bg-gradient-to-tr from-sky-100 to-orange-100 grid grid-cols-2 w-8/12 mx-auto py-10 rounded-2xl">
                <div></div>
                <div className="col-span-1 absolute -left-2 top-32">
                    <img className="w-[500px] rounded-xl hover:scale-105 transition-all duration-300 ease-in mb-3" src={image} alt="image" />
                    <h2 className="text-3xl font-bold">{adventureTitle}</h2>
                    <h2 className="text-xl">{categoryName}</h2>
                </div>
                <div className="col-span-1 px-7 font-bold space-y-2">
                    <h1 className="text-3xl font-bold mb-5">Adventure Details</h1>
                    <h2>Location: <span className="font-normal">{location}</span></h2>
                    <h2>Adventure Level: <span className="font-normal">{adventureLevel}</span></h2>
                    <h2>Duration: <span className="font-normal">{duration}</span></h2>
                    <h2>Max group size: <span className="font-normal">{maxGroupSize}</span></h2>
                    <h2>Booking Availability: {bookingAvailability ? <span className="font-normal bg-green-200 p-1 rounded-full">Available</span> : <span className="font-normal bg-red-200 p-1 rounded-full">Not available</span> }</h2>
                    <h2>Eco Friendly Features:
                        <ul className="list-disc font-normal ml-10">
                            <li>{ecoFriendlyFeatures[0]}</li>
                            <li>{ecoFriendlyFeatures[1]}</li>
                        </ul>
                    </h2>
                    <h2>Included Items:
                        <ul className="list-disc font-normal ml-10">
                            <li>{includedItems[0]}</li>
                            <li>{includedItems[1]}</li>
                            <li>{includedItems[2]}</li>
                        </ul>
                    </h2>
                    <h2>Special Instructions:
                        <ul className="list-disc font-normal ml-10">
                            <li>{specialInstructions[0]}</li>
                            <li>{specialInstructions[1]}</li>
                        </ul>
                    </h2>
                    <h2>Adventure Cost: $ <span className="font-normal">{adventureCost}</span></h2>
                    <button className="btn transition-all ease-in duration-300 bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500">Talk With Expert</button>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;