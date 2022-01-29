import React from 'react'

const Social = (props) => {
    return (
        <>
        <span className=" d-inline-block">
        <a href={props.targateLink} target="_blank" rel="noreferrer" className=' btn Socialbadge' data-bs-toggle="tooltip" data-bs-placement="bottom" title={props.tooltipMsg}>
         <img src={props.imgLink} alt={props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>
        {/*<a href={props.targateLink} target="_blank" rel="no-follow" className='' data-bs-toggle="tooltip" data-bs-placement="bottom" title={props.tooltipMsg}>
         <img src={props.imgLink} alt={props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>*/}
        </span>
        </>
    )
}

export default Social