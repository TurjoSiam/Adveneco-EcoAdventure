import Adventures from "../HomeComponents/Adventures";
import Banner from "../HomeComponents/Banner";

const Home = () => {

    return (
        <div className="mx-auto font-spinnaker">
            <Banner></Banner>
           <Adventures></Adventures>
        </div>
    );
};

export default Home;