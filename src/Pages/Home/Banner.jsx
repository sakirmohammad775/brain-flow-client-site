import { curve, heroBackground } from "../../assets";
import Section from "../../Component/Section";
import Button from "../../Component/Button"
import robot from "../../assets/hero/robot.jpg"
import { BackgroundCircles, BottomLine, Gradient } from "../../Component/design/Hero"
import { heroIcons } from "../../Constant"
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

const Banner = () => {
    const parallaxRef = useRef(null)
    return (
        <>
            <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25]"
                customPaddings id='hero'>
                <div className="container relative" ref={parallaxRef}>
                    <div className="relative z-1 max--w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                        <h1 className="h1 mb-6">
                            Explore the Possibilities of  AI Chatting with
                            <span className="inline-block relative pl-3"> BrainFlow{""}
                                <img src={curve} className="absolute top-full left-0 w-full xl:-mt-1"
                                    width={624}
                                    height={28}
                                    alt="curve" />
                            </span>
                        </h1>
                        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Unleash the power of Ai within BrainFlow.
                            Upgrade your Productivity with brainFlow,the open AI chat app
                        </p>
                        <Button href="/pricing" white>
                            Get Started
                        </Button>
                    </div>

                    {/* hero section */}
                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                            <div className="relative bg-n-8 rounded-[1rem]">
                                <div className="aspect-[33/40] bg-n-10 rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:[1024/490]">
                                    <img src={robot} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} />
                                    <ScrollParallax isAbsolutelyPositioned>
                                        <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/10 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                            {heroIcons.map((icon, index) => (<li className="p-5" key={index}>
                                                <img src={icon} width={24} height={25} alt={icon} />
                                            </li>))}
                                        </ul>
                                    </ScrollParallax>

                                </div>
                            </div>

                        </div>
                        {/* background */}
                        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                            <img src={heroBackground} className="w-full" width={1440} height={1800} alt="hero" />
                        </div>

                    </div>


                </div>
            </Section>
        </>
    );
};

export default Banner;