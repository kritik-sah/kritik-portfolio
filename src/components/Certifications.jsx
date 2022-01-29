import React from 'react';
import Cards from './Cards';
import CertData from '../data/CertData';

const Certifications = () => {
    return (
        <div className="container spacer ">
         <div id="CERTIFICATIONS">
            <Cards title={"CERTIFICATIONS"} data={CertData}/>
         </div>
    </div>
    )
};

export default Certifications;
