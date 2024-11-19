import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const Adventure = ({ data }) => {

    const { adventureTitle, image, shortDescription, id } = data;

    return (
        <div className='relative mx-auto group'>
            <div className='absolute top-3 left-2 bg-[#0000004d] backdrop-blur-lg py-2 px-4 rounded-xl'>
                <h2 className='text-lg text-white'>{adventureTitle}</h2>
            </div>
            <div className='absolute hidden animate__animated animate__fadeIn group-hover:block top-16 mx-3 p-7 bg-[#000000a7] rounded-xl text-white'>
                <h2 className='mb-3'>{shortDescription}</h2>
                <Link to={`/adventuredetails/${id}`}><button className='btn btn-sm bg-gradient-to-tr from-orange-400 to-orange-200 hover:bg-gradient-to-tr hover:from-orange-200 hover:to-orange-400'>Explore Now</button></Link>
            </div>
            <img className='object-cover rounded-xl' src={image} alt="image" />
        </div>
    );
};

export default Adventure;