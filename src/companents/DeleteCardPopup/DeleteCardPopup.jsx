import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

//попап с формой
export default function DeleteCardPopup({IsOpen}) {
  return (
    <PopupWithForm
      popupIsOpen={IsOpen}
      name="delete-popup "
      nameButton={"Да"}
      title={"Вы уверены?"}
    />

    // <div className="popup popup_delete-popup ">
    //   <div className="popup__container">
    //     <button type="button" className="popup__closed" />
    //     <h3 className="popup__text">Вы уверены?</h3>
    //     <form method="post" name="deleteCard" className="popup__form">
    //       <button type="submit" className="popup__submit popup__submit_delete_card">Да</button>
    //     </form>
    //   </div>
    // </div>
  );
}
