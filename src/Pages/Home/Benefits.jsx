import Section from "../../Component/Section";
import { benefits } from "../../Constant";
import Heading from "./Heading";


const Benefits = () => {
    return (
        <>
        <Section id="features">
            <div className="container relative z--2">
                <Heading className="md:mx-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with BrainFlow"></Heading>
                <div 
                className="flex flex-wrap gap-10 mb-10">
{
    benefits.map((item)=>(
        <>
        <div key={item.id}>
            <div>
                <h5>{item.title}</h5>
            </div>
        </div>
        </>
    ))
}
                </div>
            </div>
        </Section>
        </>
    );
};

export default Benefits;