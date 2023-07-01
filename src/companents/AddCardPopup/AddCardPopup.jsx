import React from "react";

//попап с формой 
export default function AddCardPopup() {
    return( 
        <div className={`popup popup_type_${name}`}>
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__text">Новое место</h3>
          <form method="post" name="popupAddCardForm" className="popup__form">
            <button type="submit" className="popup__submit popup__submit_card_submit">Создать</button>
          </form>
        </div>
      </div>
    )
}