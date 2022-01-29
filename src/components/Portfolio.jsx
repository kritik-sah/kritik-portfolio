import React from 'react';
import Cards from './Cards';
import PortfolioData from '../data/PortfolioData';


const Portfolio = () => {
    return (
        <div className="container spacer ">
         <div id="portfolio">
            <Cards title={"PORTFOLIO"} data={PortfolioData}/>
         </div>
    </div>
    )
};

export default Portfolio;
