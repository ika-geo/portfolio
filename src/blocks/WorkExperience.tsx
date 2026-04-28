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
            "Managed 100+ daily high-intensity customer calls, resolving service-related issues and technical inquiries",
            "Bug Reporting: Identified platform inconsistencies and provided detailed technical reports to the dev team, improving overall system stability",
            "Mastered CRM systems and internal data tools to track user interactions and optimize resolution workflows"
        ],
        position: 'Sales & Technical Support Specialist',
        companyName: "Topqidva ",
        companyLink: "https://topqidva.store/"
    },


    {
        years: ['2024/09', '2024/11'],
        duties: [
            "API integrations: Successfully integrated Salesforce and Jira services into internal projects, automating ticket creation and lead management via REST APIs",
            "Backend & DB: Designed and optimized PostgreSQL schemas; performed direct database troubleshooting using SQL queries via phpMyAdmin and command-line tools",
            "Technical testing: Managed API environments in Insomnia, grouping requests and using variables to streamline cross-service testing and debugging",
            "Built WebSocket features for low-latency, interactive components"
        ],
        position: 'Commercial Software Development Trainee',
        companyName: "Itransition ",
        companyLink: "https://www.itransition.com/"
    },
    {
        years: ['2024/07', '2024/08'],
        duties: [
            "API Management: Integrated GraphQL APIs with React and PHP backends, troubleshooting data-fetching errors and schema mismatches",
            "Quality Assurance: Collaborated with the QA department to debug and fix production-level issues following MVC and SOLID principles"
        ],
        position: 'Full-Stack Developer Trainee',
        companyName: "Scandiweb ",
        companyLink: "https://scandiweb.com/"
    },
    {
        years: ['2023/11', '2024/06'],
        duties: [
            "End-to-End Development: Developed and maintained MERN stack features (MongoDB, Express, React, Node.js), focusing on API reliability and efficient CRUD logic",
            "Deep Debugging: Performed detailed analysis of server-side logs and browser network requests to identify and resolve complex bugs at the intersection of frontend and backend",
            "Modern Tooling: Leveraged TypeScript and Redux Toolkit to build scalable, type-safe code, reducing integration errors with third-party libraries and services",
            "Performance Optimization: Optimized client-server interactions to ensure smooth UI performance and fast system response times in a fast-paced startup environment"
        ],
        position: 'Full-Stack Developer, Startup',
        companyName: "Codeunity",
        companyLink: "https://www.codeunity.in/"
    },
    {
        years: ['2017/03', '2024/04'],
        duties: [
            "Managed technical content for 10,000+ products, overseeing multilingual database synchronization",
            "Technical filtering: Acted as the first line of defense against website malfunctions; analyzed root causes of content-rendering issues and escalated technical requirements to developers"
        ],
        position: 'Digital Content Manager',
        companyName: "Ecommerce domino",
        companyLink: "https://www.domino.com.ge/en/"
    },
    {
        years: ['2014/12', '2016/05'],
        duties: [
            "Maintained website accuracy and visual presentation for a large-scale e-commerce platform",
            "Conducted basic troubleshooting of content upload errors and ensured data consistency across the site"
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