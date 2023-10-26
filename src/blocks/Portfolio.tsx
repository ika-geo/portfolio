import PortfolioItem from "../components/portfolioItem/PortfolioItem";

interface PortfolioItemInterface{
    img: string,
    url: string,
    github: string,
    technologies: string[],
    React?: boolean,
    MERN?: boolean
}


const portfolioItems: PortfolioItemInterface[] = [

    {
        img: 'portfolioIMG (11).png',
        url: 'https://posts-client-navy.vercel.app/',
        github: 'https://github.com/ika-geo/posts',
        technologies: ['React, Node, Express, Mongo, SCSS, Typescript'],
        MERN: true
    },
    {
        img: 'portfolioIMG (1).png',
        url: 'https://plants-dev.vercel.app/',
        github:'https://github.com/ika-geo/plants_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        React: true
    },
    {
        img: 'portfolioIMG (2).png',
        url: 'https://travel-dev.vercel.app/',
        github: 'https://github.com/ika-geo/travel_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        React: true
    },
    {
        img: 'portfolioIMG (3).png',
        url: 'https://online-store-dev.vercel.app/',
        github:'https://github.com/ika-geo/online-store_dev',
        technologies: ['React', 'SCSS', 'JavaScript'],
        React: true
    },
    {
        img: 'portfolioIMG (4).png',
        url: 'https://ika-geo.github.io/projectX/',
        github: 'https://github.com/ika-geo/projectX',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        img: 'portfolioIMG (5).png',
        url: 'https://ika-geo.github.io/myProject/',
        github: 'https://github.com/ika-geo/myProject',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        img: 'portfolioIMG (6).png',
        url: 'https://ika-geo.github.io/brunch/',
        github: 'https://github.com/ika-geo/brunch',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        img: 'portfolioIMG (7).png',
        url: 'https://ika-geo.github.io/sportStore/',
        github: 'https://github.com/ika-geo/sportStore',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        img: 'portfolioIMG (8).png',
        url: 'https://ika-geo.github.io/photography/',
        github: 'https://github.com/ika-geo/photography',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: 'portfolioIMG (9).png',
        url: 'https://ika-geo.github.io/yoga/',
        github: 'https://github.com/ika-geo/yoga',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        img: 'portfolioIMG (10).png',
        url: 'https://ika-geo.github.io/pizza/',
        github: 'https://github.com/ika-geo/pizza',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
]


const Portfolio = () => {
    return (
        <div className="portfolio block" id='Projects'>
            <div className="wrapper">
                <div className="portfolio__block">
                    <h1 className="title center">PORTFOLIO</h1>
                    <div className="portfolio__items grid4">
                        {portfolioItems.map(item=>
                            <PortfolioItem
                                img={item.img}
                                url={item.url}
                                github={item.github}
                                technologies={item.technologies}
                                React={item.React}
                                MERN={item.MERN}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;