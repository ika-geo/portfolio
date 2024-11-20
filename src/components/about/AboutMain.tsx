import Strengths from "../strengths/Strengths";
import TechnologiesItem from "../technologiesItem/TechnologiesItem";
import AboutText from "./AboutText";

const technologiesItem: { technology: string, color: string }[] = [
    {
        technology: 'HTML',
        color: "#dd4b25"
    },
    {
        technology: 'CSS',
        color: "#2EA7D9FF"
    },
    {
        technology: 'SCSS',
        color: "#c96195"
    },
    {
        technology: 'Tailwind CSS',
        color: "#36b7f0"
    },
    {
        technology: 'JavaScript',
        color: "#efd81d"
    },
    {
        technology: 'TypeScript',
        color: "#2f74c0"
    },
    {
        technology: 'React',
        color: "#00d1f7"
    },
    {
        technology: 'Node.js',
        color: "#026b00"
    },
    {
        technology: 'PHP?',
        color: "#7377ad"
    },
    {
        technology: 'Express',
        color: "#fcfcfc"
    },
    {
        technology: 'MongoDB',
        color: "#60a853"
    },
    {
        technology: 'PostgreSQL',
        color: "#2f6792"
    },
    {
        technology: 'MySQL',
        color: "#e48e00"
    },
    {
        technology: 'Git',
        color: "#e04c31"
    }
]

const AboutMain = () => {
    return (
            <>
                <div className="about__strengths">
                    <Strengths/>
                </div>

                <div>

                    <AboutText/>

                    <h2 className="subTitle center">Technologies</h2>
                    <div className="Technologies__block flexEvenly">
                        {technologiesItem.map(item =>
                            <TechnologiesItem
                                key={item.technology}
                                technology={item.technology}
                                color={item.color}
                            />
                        )}
                    </div>
                </div>
            </>
    );
};

export default AboutMain;