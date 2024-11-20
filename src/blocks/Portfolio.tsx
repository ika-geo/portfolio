import PortfolioItem from "../components/portfolioItem/PortfolioItem";
import Ball from "../components/ball/Ball";
import React, {Fragment} from "react";

interface PortfolioItemInterface{
    img: string,
    url: string,
    github: string,
    technologies: string[],
    stack: string
}

const portfolioItems: PortfolioItemInterface[] = [
    {
        img: 'portfolioIMG (14).png',
        url: 'https://itransition-project-6nth.onrender.com',
        github: 'https://github.com/ika-geo/itransition_project',
        technologies: ['React', 'Node', 'Express', 'PostgreSQL', 'Tailwind', 'WebSocket', 'Salesforce integration', 'Jira integration'],
        stack: 'PERN'
    },
    {
        img: 'portfolioIMG (13).png',
        url: 'https://itransition-task6-client.onrender.com/',
        github: 'https://github.com/ika-geo/itransition__task6',
        technologies: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind', 'WebSocket'],
        stack: 'MERN'
    },
    {
        img: 'portfolioIMG (12).png',
        url: 'http://ikageo.atwebpages.com/front',
        github: 'https://github.com/ika-geo/scandiweb',
        technologies: ['React-Class', 'PHP', 'GraphQL', 'MySQL', 'Tailwind'],
        stack: 'PHP+REACT'
    },
    {
        img: 'portfolioIMG (11).png',
        url: 'https://posts-client-navy.vercel.app/',
        github: 'https://github.com/ika-geo/posts',
        technologies: ['React', 'Node', 'Express', 'MongoDB', 'SCSS', 'Javascript'],
        stack: 'MERN'
    },
    {
        img: 'portfolioIMG (1).png',
        url: 'https://plants-dev.vercel.app/',
        github:'https://github.com/ika-geo/plants_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        stack: 'React'
    },
    {
        img: 'portfolioIMG (2).png',
        url: 'https://travel-dev.vercel.app/',
        github: 'https://github.com/ika-geo/travel_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        stack: 'React'
    },
    {
        img: 'portfolioIMG (3).png',
        url: 'https://online-store-dev.vercel.app/',
        github:'https://github.com/ika-geo/online-store_dev',
        technologies: ['React', 'SCSS', 'JavaScript'],
        stack: 'React'
    },
    {
        img: 'portfolioIMG (4).png',
        url: 'https://ika-geo.github.io/projectX/',
        github: 'https://github.com/ika-geo/projectX',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'

    },
    {
        img: 'portfolioIMG (5).png',
        url: 'https://ika-geo.github.io/myProject/',
        github: 'https://github.com/ika-geo/myProject',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (6).png',
        url: 'https://ika-geo.github.io/brunch/',
        github: 'https://github.com/ika-geo/brunch',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (7).png',
        url: 'https://ika-geo.github.io/sportStore/',
        github: 'https://github.com/ika-geo/sportStore',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (8).png',
        url: 'https://ika-geo.github.io/photography/',
        github: 'https://github.com/ika-geo/photography',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (9).png',
        url: 'https://ika-geo.github.io/yoga/',
        github: 'https://github.com/ika-geo/yoga',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (10).png',
        url: 'https://ika-geo.github.io/pizza/',
        github: 'https://github.com/ika-geo/pizza',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio block" id='Projects'>
            <div className="wrapper">
                <div className="portfolio__block">
                    <Ball
                        top={50}
                        left={0}
                        color="aqua"
                    />

                    <Ball
                        top={50}
                        right={0}
                        color="aqua"
                    />
                    <h1 className="title center">PORTFOLIO</h1>
                    <div className="portfolio__items grid4">
                        {portfolioItems.map(item=>
                            <Fragment key={item.github}>
                                <PortfolioItem
                                    img={item.img}
                                    url={item.url}
                                    github={item.github}
                                    technologies={item.technologies}
                                    stack={item.stack}
                                />
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;