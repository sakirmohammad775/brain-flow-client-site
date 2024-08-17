
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";


const Home = () => {
    return (
      <>
      
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefits></Benefits>
            <Collaboration></Collaboration>
        
            </div>
      </>
    );
};

export default Home;