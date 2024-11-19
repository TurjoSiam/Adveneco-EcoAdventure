import React from 'react';
import 'animate.css';

const AdventureDetails = ({ data }) => {

    const { adventureTitle, image, shortDescription } = data;

    return (
        <div className='relative mx-auto group'>
            <div className='absolute top-3 left-2 bg-[#0000004d] backdrop-blur-lg py-2 px-4 rounded-xl'>
                <h2 className='text-lg text-white'>{adventureTitle}</h2>
            </div>
            <div className='absolute hidden animate__animated animate__fadeIn group-hover:block top-16 mx-3 p-7 bg-[#000000a7] rounded-xl text-white space-y-4'>
                <h2>{shortDescription}</h2>
                <button className='btn btn-sm'>Explore Now</button>
            </div>
            <img className='object-cover rounded-xl' src={image} alt="image" />
        </div>
    );
};

export default AdventureDetails;