import React, {useState} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
//попап с формой 
export default function AddCardPopup({ onClose, isOpen, onAddPlace}) {
  
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(event) {
    event.preventDefault()

    onAddPlace({
      name:name,
      link:link
    })

  }

    return( 
      <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      popupIsOpen={isOpen}
      name="add-Card"
      nameButton={"Создать"}
      title={"Новое место"}
      children={
          <>
              <input
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  value={name ||''}
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
                  onChange={(event) => setLink(event.target.value)}
                  value={link ||''}
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