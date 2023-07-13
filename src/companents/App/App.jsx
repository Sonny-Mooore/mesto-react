import React, { useState, useNavigate, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../companents/Header/Header";
import Main from "../../companents/Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import api from "../../utils/Api";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext.js";
import CardContext from "../../utils/Contexts/CardContext.js";
function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(Boolean(null));

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((error) => console.error(`Ошибка при создании данных ${error}`));

    api
      .getDefaultCards()
      .then((data) => setCards(data))
      .catch((error) => console.error(`Ошибка при создании данных ${error}`));
  }, []);
//   console.log(cards);
//   console.log(currentUser);

  function handleEditProfileOpen() {
    setEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleAddPlaceOpen() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarOpen() {
    setEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="wrapper">
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileOpen}
            onAddPlace={handleAddPlaceOpen}
            onEditAvatar={handleEditAvatarOpen}
          />
          <Footer />
          {/* <Routes><Route path="/" element={<Header />} /></Routes> */}

          <PopupWithForm
            onClose={closeAllPopups}
            popupIsOpen={isEditProfilePopupOpen}
            name="edit-Popup"
            nameButton={"Сохранить"}
            title={"Редактировать профиль"}
            children={
              <>
                <input
                  id="profile-name"
                  name="userName"
                  className="popup__input popup__input_edit_name"
                  minLength={2}
                  maxLength={40}
                  required=""
                  placeholder="Введите имя"
                  type="text"
                />
                <span id="profile-name-error" className="popup__form-error" />
                <input
                  name="userjob"
                  minLength={2}
                  className="popup__input popup__input_edit_job"
                  maxLength={200}
                  required=""
                  id="profile-job"
                  placeholder="Расскажите о себе"
                  type="text"
                />
                <span id="profile-job-error" className="popup__form-error" />
              </>
            }
          />
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
          <PopupWithForm
            onClose={closeAllPopups}
            popupIsOpen={isEditAvatarPopupOpen}
            name="edit-avatar"
            nameButton={"Сохранить"}
            title={"Обновить аватар"}
            children={
              <>
                <input
                  name="avatar"
                  id="avatar-link"
                  required=""
                  placeholder="Ссылка на аватар"
                  className="popup__input  popup__input_avatar_link"
                  type="url"
                />
                <span id="avatar-link-error" className="popup__form-error" />
              </>
            }
          />

          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </CardContext.Provider>
      </CurrentUserContext.Provider>

      {/* <PopupWithForm name="delete-card" nameButton={'Да'} title={'Вы уверены?'} /> */}
    </div>
  );
}

export default App;
