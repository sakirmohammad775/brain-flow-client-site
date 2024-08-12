
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Section";

const Home = () => {
    return (
      <>
      
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
        
            </div>
      </>
    );
};

export default Home;