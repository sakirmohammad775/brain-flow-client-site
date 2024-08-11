import ButtonGradient from "../../assets/svg/ButtonGradient";
import Button from "../../Component/Button";


const Home = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold underline ">hello World</h3>
            <div className="pt-[76px] lg:pt-[5.35rem] overflow-hidden">
                <Button></Button>
            </div>
            <ButtonGradient></ButtonGradient>
        </div>
    );
};

export default Home;