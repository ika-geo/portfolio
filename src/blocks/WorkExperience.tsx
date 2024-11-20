import Ball from "../components/ball/Ball";

interface WorkItem{
    years: [string, string] | [string, 'present'],
    duties: string,
    position: string,
    companyName: string,
    companyLink: string
}

const workItems: WorkItem[] = [
    {
        years: ['2024/09', '2024/11'],
        duties: 'During the Itransition trainee program, I focused extensively on building full-stack applications with the MERN/PERN stack, creating dynamic and interactive user interfaces with React and structuring backend logic and APIs with Node.js and Express. My work included designing and managing relational data structures in PostgreSQL, where I implemented optimized queries and ensured data integrity throughout the development process. I also integrated WebSockets to enable real-time features, such as live notifications and collaborative updates, which enhanced the interactivity and responsiveness of the applications. This experience deepened my understanding of practical, scalable solutions in full-stack development and reinforced my skills in deploying web applications effectively.',
        position: 'Commercial Software Development Trainee',
        companyName: "Itransition ",
        companyLink: "https://www.itransition.com/"
    },
    {
        years: ['2023/11', '2024/06'],
        duties: 'Engaged in full-stack development, where I manage CRUD operations, create features, components, and handle debugging for seamless user interactions. I work within the MERN stack, utilizing Redux Toolkit, Tailwind, TypeScript, and third-party npm libraries. Actively collaborating with developers for code improvement and quality enhancement. I contribute to new features, ensuring positive user experiences.',
        position: 'Full stack developer (MERN)',
        companyName: "Codeunity",
        companyLink: "https://www.codeunity.in/"
    },
    {
        years: ['2017/03', '2024/05'],
        duties: 'Search for descriptions and pictures of products on the Internet, create descriptions in three languages (Georgian, Russian, English), edit pictures, add to the site.',
        position: 'Digital Content Manager',
        companyName: "Ecommerce domino",
        companyLink: "https://www.domino.com.ge/en/"
    },
    {
        years: ['2014/12', '2016/05'],
        duties: 'Search for descriptions and pictures of products on the Internet, create descriptions, edit pictures, add to the site.',
        position: 'Digital Content Manager',
        companyName: "Ecommerce be.ge",
        companyLink: "https://be.ge/en",
    },
]


const WorkExperience = () => {
    return (
        <div className="workExperience block">

            <Ball
                top={0}
                left={50}
                className='centerX'
                color="#ff6161"
            />


            <div className="wrapper">
                <div className="workExperience__block">
                    <h1 className="workExperience__title center title">WORK EXPERIENCE</h1>
                    {workItems.map(item =>
                        <div key={item.companyName} className="workItem flex">
                            <div className="years">
                                <h2 style={{fontSize: '20px'}}>{item.years[0]}-<span
                                    className={item.years[1] === 'present' ? 'coloredText2' : ''}>{item.years[1]}</span>
                                </h2>
                            </div>
                            <p className="duties text">{item.duties}</p>
                            <div className="position">
                            <h2 className="position__item subTitle coloredText1">{item.position}</h2>
                                <a className='position__company coloredText2' target='_blank'
                                   href={item.companyLink}>{item.companyName}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;