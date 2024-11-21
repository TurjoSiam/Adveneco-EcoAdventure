import Marquee from "react-fast-marquee";
import client1 from "../../src/assets/client1.jpg"
import client2 from "../../src/assets/client2.jpg"
import client3 from "../../src/assets/client3.jpg"
import client4 from "../../src/assets/client4.jpg"
import client5 from "../../src/assets/client5.jpg"

const HappyMembers = () => {
    return (
        <div className="mx-auto space-y-7 my-20 py-10 font-spinnaker bg-[url('/client-bg.jpg')] text-center">
            <h2 className="text-2xl md:text-3xl text-white font-extrabold">"Hear from Our Happy Explorers"</h2>
            <Marquee direction="left">
                <div className="flex justify-center items-center bg-gray-100 mr-10 rounded-2xl">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.774 1.416 8.303L12 18.896l-7.415 4.487 1.416-8.303-6.001-5.774 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        {/* Profile Picture */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src={client1}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name and Title */}
                        <h3 className="text-lg font-semibold">Sophia Bennett, Travel Blogger</h3>
                        {/* Quote */}
                        <p className="text-gray-600 italic mt-4">
                            "The eco-adventure was an unforgettable experience! From breathtaking views to the commitment to sustainability, it exceeded all my expectations. Highly recommended!"
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mr-10 rounded-2xl bg-gray-100">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.774 1.416 8.303L12 18.896l-7.415 4.487 1.416-8.303-6.001-5.774 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        {/* Profile Picture */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src={client2}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name and Title */}
                        <h3 className="text-lg font-semibold">James Carter, Wildlife Photographer</h3>
                        {/* Quote */}
                        <p className="text-gray-600 italic mt-4">
                            "As a wildlife enthusiast, I was amazed by the respect for nature and the guided tours. The team is passionate and knowledgeable, making the journey truly unique."
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mr-10 rounded-2xl bg-gray-100">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.774 1.416 8.303L12 18.896l-7.415 4.487 1.416-8.303-6.001-5.774 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        {/* Profile Picture */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src={client3}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name and Title */}
                        <h3 className="text-lg font-semibold">Sophia Bennett, Travel Blogger</h3>
                        {/* Quote */}
                        <p className="text-gray-600 italic mt-4">
                            "The eco-adventure was an unforgettable experience! From breathtaking views to the commitment to sustainability, it exceeded all my expectations. Highly recommended!"
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mr-10 rounded-2xl bg-gray-100">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.774 1.416 8.303L12 18.896l-7.415 4.487 1.416-8.303-6.001-5.774 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        {/* Profile Picture */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src={client4}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name and Title */}
                        <h3 className="text-lg font-semibold">Ethan Wilson, Environmental Scientist</h3>
                        {/* Quote */}
                        <p className="text-gray-600 italic mt-4">
                            "It’s inspiring to see an adventure service that prioritizes conservation. The eco-friendly practices were evident, and I left with a deeper connection to nature."
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mr-10 rounded-2xl bg-gray-100">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.774 1.416 8.303L12 18.896l-7.415 4.487 1.416-8.303-6.001-5.774 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        {/* Profile Picture */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                            <img
                                src={client5}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name and Title */}
                        <h3 className="text-lg font-semibold">Olivia Brown, Fitness Coach</h3>
                        {/* Quote */}
                        <p className="text-gray-600 italic mt-4">
                            "The perfect combination of adventure and mindfulness! Every activity was well-planned, and I appreciate the effort to leave no footprint behind. I can't wait to return!"
                        </p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default HappyMembers;