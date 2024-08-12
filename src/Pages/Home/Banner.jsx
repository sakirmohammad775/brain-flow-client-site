import { curve } from "../../assets";
import Section from "../../Component/Section";


const Banner = () => {
    return (
   <>
   <Section className="pt-[12rem] -mt-[5.25]" crosses crossesOffset="lg:translate-y-[5.25]"
   customPaddings id='hero'>
<div className="container relative">
    <div className="relative z-1 max--w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
        <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with BrainFlowCurve{""}
            <img src={curve} alt="" />
        </h1>
    </div>

</div>
   </Section>
   </>
    );
};

export default Banner;