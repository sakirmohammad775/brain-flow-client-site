
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Card from "./Card";


const Home = () => {
    return (
      <>
      
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            
        
            </div>
      </>
    );
};

export default Home;