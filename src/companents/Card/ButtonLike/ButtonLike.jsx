import React, { useState, useEffect } from "react";
import api from "../../../utils/Api";

function ButtonLike({ card, handleLike, currentUserId, onLike, isLiked }) {
  //   const [isLiked, setLike] = useState(false);
  //   const [counter, setCounter] = useState(false);

  // console.log(handleLike);
  //   useEffect(() => {
  //     setLike(card.likes.some((item) => currentUserId === item._id));
  //   }, [card.likes, currentUserId]);

  //   const handleLike = () => {
  //     if (isLiked) {
  //       console.log("isliked");
  //       api
  //         .deleteLike(card._id)
  //         .then((res) => {
  //           setLike(false);
  //           setCounter(res.likes.length);
  //         })
  //         .catch((error) => console.error(`ошибка при снятие лайка ${error}`));
  //     } else {
  //       console.log("isNOTliked");
  //       api
  //         .setLike(card._id)
  //         .then((res) => {
  //           setLike(true);
  //           setCounter(res.likes.length);
  //         })
  //         .catch((error) => console.error(`ошибка при установке лайка ${error}`));
  //     }
  //   };

  //   useEffect(handleLike, []);

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
