import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="font-spinnaker w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-10 space-y-3 p-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl">
            <h2 className="text-3xl font-bold">About <span className="font-carter font-normal">Adveneco</span></h2>
            <p>Welcome to <span className="font-carter">Adveneco</span>, your gateway to unforgettable eco-adventures! We are dedicated to creating immersive experiences that connect you with the beauty of nature while promoting sustainable tourism practices. <br />Our mission is simple: to inspire a deeper appreciation for the natural world while leaving no trace behind. Whether you're trekking through lush rainforests, kayaking along serene rivers, or camping under star-filled skies, every adventure is designed with care for the environment and respect for local communities.</p>
            <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            <ul className="list-disc ml-10">
                <li><strong>Sustainability at Heart:</strong> Every activity is thoughtfully planned to minimize environmental impact, ensuring that future generations can enjoy the same natural wonders.</li>
                <li><strong>Expert Guides:</strong> Our experienced guides are passionate about nature and well-versed in the areas we explore, ensuring your safety and enhancing your journey with fascinating stories and insights.</li>
                <li><strong>Customized Adventures:</strong> Whether you’re a thrill-seeker or prefer a calm escape, we offer a variety of activities tailored to your preferences.</li>
                <li><strong>Support for Local Communities:</strong> A portion of every booking goes towards supporting the communities we operate in, helping them preserve their cultural and environmental heritage.</li>
            </ul>
            <h2 className="text-2xl font-bold">Our Adventures</h2>
            <p>From hiking majestic mountain trails to snorkeling in vibrant coral reefs, we offer a wide range of eco-friendly activities designed for adventurers of all ages and skill levels. With every trip, we aim to create a perfect balance of adventure, education, and conservation.</p>
            <h2 className="text-2xl font-bold">Our Commitment to the Environment</h2>
            <p>At <span className="font-carter">Adveneco</span>, we follow the principles of Leave No Trace and actively participate in conservation efforts. We strive to reduce waste, avoid single-use plastics, and educate our adventurers on how they can contribute to protecting the environment.</p>
            <h2 className="text-2xl font-bold">Join the Adventure</h2>
            <p>Whether you’re looking for a solo expedition, a family outing, or a group adventure, we’re here to make it unforgettable. Let’s explore the wonders of nature together and make memories that last a lifetime—responsibly.
            </p>
            <Link to="/contactus"><button className="mt-7 btn ease-in duration-300 bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500">Contact us</button></Link>
        </div>
    );
};

export default AboutUs;