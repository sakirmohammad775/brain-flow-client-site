
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import Services from "./Services";



const Home = () => {
    return (
      <>
      
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefits></Benefits>
            <Collaboration></Collaboration>
            <Services></Services>
            <Pricing></Pricing>
            <Roadmap></Roadmap>
            <Footer></Footer>
        
            </div>
      </>
    );
};

export default Home;