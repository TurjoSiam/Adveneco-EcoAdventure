import DynamicTitle from "../DynamicTitle/DynamicTitle";
import Adventures from "../HomeComponents/Adventures";
import Banner from "../HomeComponents/Banner";

const Home = () => {

    <DynamicTitle title="Adveneco | Home"></DynamicTitle>

    return (
        <div className="mx-auto font-spinnaker">
            <Banner></Banner>
           <Adventures></Adventures>
        </div>
    );
};

export default Home;