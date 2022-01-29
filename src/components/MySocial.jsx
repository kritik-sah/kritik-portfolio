import React from 'react'
import Social from './Social'
import SocialData from '../data/Socials'
const MySocial = () => {
        return(
            <>
            <div className="my-2 text-center">
            
            {SocialData.map(function (Props){
            return(
            <Social 
                key = {Props.id}
                imgLink = {Props.imgLink}
                imgAlt = {Props.imgAlt}
                tooltipMsg = {Props.tooltipMsg}
                targateLink = {Props.targateLink}
            />
                )})}
                </div>
        
        </>)
    
}

export default MySocial