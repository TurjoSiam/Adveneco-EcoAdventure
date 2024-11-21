import DynamicTitle from "../DynamicTitle/DynamicTitle";
import Adventures from "../HomeComponents/Adventures";
import Banner from "../HomeComponents/Banner";
import HappyMembers from "../HomeComponents/HappyMembers";

const Home = () => {

    <DynamicTitle title="Adveneco | Home"></DynamicTitle>

    return (
        <div className="mx-auto font-spinnaker">
            <Banner></Banner>
           <Adventures></Adventures>
           <HappyMembers></HappyMembers>
        </div>
    );
};

export default Home;