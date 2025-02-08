import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';
import { useState } from "react";

const AdventureDetails = () => {

    const { adventureId } = useParams();
    const alldata = useLoaderData();
    const parseId = parseInt(adventureId);

    const adventure = alldata.find(item => item.id === parseId);

    const { adventureTitle, image, categoryName, adventureCost, bookingAvailability, adventureLevel, location, duration, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = adventure;

    const handleTalkWithExpert = () => {

        const presentTime = new Date;
        const presentHour = presentTime.getHours();
        const presentMinute = presentTime.getMinutes();
        const timeInMinutes = presentHour * 60 + presentMinute;

        const startTime = 10 * 60;
        const endTime = 20 * 60;

        if (timeInMinutes >= startTime && timeInMinutes <= endTime) {
            window.open("https://meet.google.com/", "_blank");
        }
        else {
            document.getElementById('my_modal').showModal();
        }
    }


    return (
        <div className="md:relative w-11/12 w-10/12 lg:w-8/12 mx-auto font-spinnaker my-10 animate__animated animate__zoomIn">

            <div className="bg-gradient-to-tr from-sky-100 to-orange-100 grid grid-cols-1 gap-7 md: md:gap-0 md:grid-cols-2 w-full lg:w-8/12 mx-auto py-4 md:py-10 rounded-2xl">
                <div></div>
                <div className="ml-7 md:ml-0 col-span-1 md:absolute md:left-5 lg:-left-2 top-32">
                    <img className="w-[300px] lg:w-[500px] rounded-xl hover:scale-105 transition-all duration-300 ease-in mb-3" src={image} alt="image" />
                    <h2 className="text-2xl lg:text-3xl font-bold">{adventureTitle}</h2>
                    <h2 className="text-xl">{categoryName}</h2>
                </div>
                <div className="col-span-1 px-7 font-bold space-y-2">
                    <h1 className="text-3xl font-bold md:mb-5">Adventure Details</h1>
                    <h2>Location: <span className="font-normal">{location}</span></h2>
                    <h2>Adventure Level: <span className="font-normal">{adventureLevel}</span></h2>
                    <h2>Duration: <span className="font-normal">{duration}</span></h2>
                    <h2>Max group size: <span className="font-normal">{maxGroupSize}</span></h2>
                    <h2>Booking Availability: {bookingAvailability ? <span className="font-normal bg-green-200 p-1 rounded-full">Available</span> : <span className="font-normal bg-red-200 p-1 rounded-full">Not available</span>}</h2>
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
                    <button onClick={handleTalkWithExpert} className="btn transition-all ease-in duration-300 bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500">Talk With Expert</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl">Thanks for your interest !</h3>
                            <p className="py-4 text-lg">Consulting session only available from <span className="text-orange-600">10:00 am</span> to <span className="text-orange-600">08:00 pm</span>.</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;