import React, { useState, useEffect } from "react";
import api from "../../../utils/Api";

function ButtonLike({ card, handleLike, isLiked }) {


  return (
    <>
      <button
        onClick={() => handleLike(card)}
        type="button"
        className={`element__button ${isLiked ? "element_button-active" : ""}`}
      />
      <span className="element__button_like-counter">{card.likes.length}</span>
    </>
  );
}

export default ButtonLike;
