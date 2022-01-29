import React from 'react';
import Card from './Card';
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Cards = (myCard) => {
const [cards, setCards] = useState(myCard.data.slice(0, myCard.data.length));

const [pageNumber, setPageNumber] = useState(0);

const cardsPerPage = 4;
const pagesVisited = pageNumber * cardsPerPage;

const displayCard = cards.slice(pagesVisited, (pagesVisited + cardsPerPage)).map((Props) => {
      return (
        <Card 
        key= {Props.id}
        cardName = {Props.cardName}
        cardDec = {Props.cardDec}
        imgLink = {Props.imgLink}
        imgAlt = {Props.imgAlt}
        targateMsg = {Props.targateMsg}
        targateLink = {Props.targateLink}
        />
      );
    });

  const pageCount = Math.ceil(myCard.data.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <h1 className="spacer heading-center"><b>{myCard.title}</b></h1>
      {displayCard}
      <div>
      <center>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </center>

      </div>
    </>
  );
}








//   return(
//     <>
//     <div>
//     <h1 className="spacer heading-center"><b>{myCard.title}</b></h1>
//     </div>
//     {myCard.data.map(function (Props){
//     return(
//     <Card 
//         cardName = {Props.cardName}
//         cardDec = {Props.cardDec}
//         imgLink = {Props.imgLink}
//         imgAlt = {Props.imgAlt}
//         targateMsg = {Props.targateMsg}
//         targateLink = {Props.targateLink}
//         />
//         )})}

// </>)
// }
























export default Cards
