import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
//попап с формой 
export default function AddCardPopup({ closeAllPopups, isAddPlacePopupOpen}) {
    return( 
      <PopupWithForm
      onClose={closeAllPopups}
      popupIsOpen={isAddPlacePopupOpen}
      name="add-Card"
      nameButton={"Создать"}
      title={"Новое место"}
      children={
          <>
              <input
                  name="name"
                  id="card-name"
                  minLength={2}
                  maxLength={30}
                  required=""
                  placeholder="Название"
                  className="popup__input popup__input_card_name "
                  type="text"
              />
              <span id="card-name-error" className="popup__form-error" />
              <input
                  name="link"
                  id="card-link"
                  required=""
                  placeholder="Ссылка на картинку"
                  className="popup__input popup__input_card_link"
                  type="url"
              />
              <span id="card-link-error" className="popup__form-error" />
          </>
      }
  />
    )
}