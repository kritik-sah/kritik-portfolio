import React from 'react'

const Skill = (Props) => {
    return (
        <>
        <span key={Props.id} className="m-1 d-inline-block">
        <a href={Props.targateLink} target="_blank" rel="noreferrer" className=' btn border border-white skillbadge' data-bs-toggle="tooltip" data-bs-placement="bottom" title={Props.tooltipMsg}>
         <img src={Props.imgLink} alt={Props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>
        {/*<a href={Props.targateLink} target="_blank" rel="no-follow" className='' data-bs-toggle="tooltip" data-bs-placement="bottom" title={Props.tooltipMsg}>
         <img src={Props.imgLink} alt={Props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>*/}
        </span>
        </>
    )
}

export default Skill
