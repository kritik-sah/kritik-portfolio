import React from 'react';
const Card = (Props) => {
    return (<>
        <div className="card card-m-w spacer" key={Props.id} >
        <img src={Props.imgLink} className="card-img-top" alt={Props.imgAlt} />
        <div className="card-body">
            <h5 className="card-title">{Props.cardName}</h5>
            <p className="card-text">{Props.cardDec}</p>
            <p className="card-text"><small >{Props.targateMsg}</small></p>
            <a href={Props.targateLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
        </div>
        </div>
        </>)
}

export default Card
