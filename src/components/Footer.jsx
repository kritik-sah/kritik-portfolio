import React from 'react'
import MySocial from './MySocial'

// import LogoWhite from '../img/itrebelswhite.png'
// import SkillData from '../data/SkillData';
// import PortfolioData from '../data/PortfolioData';
// import CertData from '../data/CertData';
// import { StarFill , StarHalf , Star } from 'react-bootstrap-icons';

const Footer = () => {
    
    return (
        <>
            <footer className='container-fluid footer spacer'>
             {/* <div className="container d-flex justify-content-around">
                <div className="row flex-row spacer">
                    <div className="col-3 flex-column">
                        <img className="img-fluid" src={LogoWhite} alt="Logo"/>
                        <div>
                        <ul className="mr-auto text-center">
                            <li><a href="#about"><p>About Kritik</p></a></li>
                            <li><a href="#portfolio"><p>Portfolio</p></a></li>
                            <li><a href="#CERTIFICATIONS"><p>Certification</p></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-3 flex-column">
                        <h4>Numbers Speaks everything:</h4>
                        <div>
                        <ul>
                            <li><a href="#skills"><p>Numbers of Skills <span className="badge bg-dark">{SkillData.length}</span></p></a></li>
                            <li><a href="#portfolio"><p>Numbers of Projects <span className="badge bg-dark">{PortfolioData.length}</span></p></a></li>
                            <li><a href="#CERTIFICATIONS"><p>No. of Certification <span className="badge bg-dark">{CertData.length}</span></p></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-3 flex-column">
                    <h4>Status & Awards:</h4>
                    <embed type="image/jpg" src="https://camo.githubusercontent.com/e7432bbcd50edb2579bf7158fefc2290d5b066370b543767e3769b232ecdb9cb/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b726974696b2d7361682673686f775f69636f6e733d74727565" width="100%" height="auto" />
                    <div>
                        <ul>
                            <li><a href="https://www.hackerrank.com/kritiksah0" target="_blank" rel="no-follow"><p>HackerRank Stars <span className="badge bg-dark"><StarFill /><StarFill /><StarFill /><Star /><Star /></span></p></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-3 flex-column">
                    <h4>Online Presence:</h4>
                     <MySocial />
                    </div>
                </div>
             </div> */}
                
             <div className="row justify-content-center">
                    <p className="text-center mt-4 py-1" >
                        Kritik Sah Portfolio Desined on React & bootstrap "Thank You❤️"
                    </p>
                    <MySocial />
                </div>
            </footer>
        </>
    )
}

export default Footer
