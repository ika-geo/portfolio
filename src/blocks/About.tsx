import Ball from "../components/ball/Ball";
import AboutMain from "../components/about/AboutMain";
import LanguageContact from "../components/about/LanguageContact";


const About = () => {
    return (
        <div className="about block" id='About'>

            <Ball
                className={"center"}
                top={50}
                left={50}
                color={"white"}
            />

            <div className="wrapper">

                <div className="about__block">

                    <h1 className="title center about__Title">ABOUT ME</h1>

                    <div className="about_top grid2">
                        <AboutMain/>
                    </div>


                    <LanguageContact/>

                </div>
            </div>
        </div>
    );
};


export default About;