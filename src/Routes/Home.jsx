import DynamicTitle from "../DynamicTitle/DynamicTitle";
import Adventures from "../HomeComponents/Adventures";
import Banner from "../HomeComponents/Banner";
import HappyMembers from "../HomeComponents/HappyMembers";
import Stories from "../HomeComponents/Stories";

const Home = () => {

    <DynamicTitle title="Adveneco | Home"></DynamicTitle>

    return (
        <div className="mx-auto font-spinnaker">
            <Banner></Banner>
           <Adventures></Adventures>
           <Stories></Stories>
           <HappyMembers></HappyMembers>
        </div>
    );
};

export default Home;