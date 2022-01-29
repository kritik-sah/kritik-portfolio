import React from 'react'
import Skill from './Skill'
import SkillData from '../data/SkillData'
const Skills = () => {
        return(
            <>
            <div className=" m-2">
            <h4 className="txt-u-line" id="skills">Skills:</h4>
            <br />
            <div className="skills">
            {SkillData.map(function (Props){
            return(
            <Skill 
            
                key = {Props.id}
                imgLink = {Props.imgLink}
                imgAlt = {Props.imgAlt}
                tooltipMsg = {Props.tooltipMsg}
                targateLink = {Props.targateLink}
            />
                )})}
                </div>
            </div>
        
        </>)
    
}

export default Skills
