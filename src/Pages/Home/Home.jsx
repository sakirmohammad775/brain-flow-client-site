
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Benefits from "./Benefits";


const Home = () => {
    return (
      <>
      
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefits></Benefits>
            
        
            </div>
      </>
    );
};

export default Home;