import Ball from "../components/ball/Ball";

interface WorkItem {
    years: [string, string] | [string, 'present'],
    duties: string[],
    position: string,
    companyName: string,
    companyLink: string
}

const workItems: WorkItem[] = [
    {
        years: ['2024/09', '2024/11'],
        duties: [
            "Participated in the Itransition trainee program, focusing on full-stack application development with MERN/PERN stacks.",
            "Built dynamic user interfaces with React and implemented backend logic using Node.js and Express.js.",
            "Designed and maintained relational database structures in PostgreSQL, ensuring data integrity through optimized queries.",
            "Integrated WebSockets to deliver real-time features like live notifications and collaborative tools.",
            "Learned and applied scalable practices to deploy web applications efficiently.",
            "Gained hands-on experience in bridging theoretical knowledge with practical application."
        ],
        position: 'Commercial Software Development Trainee',
        companyName: "Itransition ",
        companyLink: "https://www.itransition.com/"
    },
    {
        years: ['2023/11', '2024/06'],
        duties: [
            "Designed and developed robust, scalable features using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
            "Implemented efficient CRUD operations to manage data seamlessly across the stack.",
            "Utilized Redux Toolkit, Tailwind CSS, TypeScript, and third-party npm libraries for enhanced development workflows.",
            "Debugged and optimized code for smooth user interactions and improved performance.",
            "Collaborated with developers to enhance code quality through peer reviews and discussions.",
            "Focused on delivering user-centric features, ensuring positive and intuitive user experiences."
        ],
        position: 'Full stack developer (MERN)',
        companyName: "Codeunity",
        companyLink: "https://www.codeunity.in/"
    },
    {
        years: ['2017/03', '2024/05'],
        duties: [
            "Researched product descriptions and images online, adapting content for diverse audiences.",
            "Wrote and translated product descriptions in three languages: Georgian, Russian, and English.",
            "Enhanced product images using photo editing tools for professional presentation.",
            "Managed content uploads, maintaining consistency across multiple language versions.",
        ],
        position: 'Digital Content Manager',
        companyName: "Ecommerce domino",
        companyLink: "https://www.domino.com.ge/en/"
    },
    {
        years: ['2014/12', '2016/05'],
        duties: [
            "Researched product descriptions and images online.",
            "Created compelling product descriptions tailored to customer needs.",
            "Edited and optimized images for web use.",
            "Uploaded and organized content on the website, ensuring accuracy and aesthetic appeal."
        ],
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
                            <ul className='duties'>
                                {item.duties.map(duty => (
                                    <li key={duty} style={{listStyleType: 'disc', listStylePosition: 'inside'}}
                                        className="text">{duty}</li>
                                ))}
                            </ul>
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