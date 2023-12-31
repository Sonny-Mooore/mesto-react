import React, { useState, useEffect } from "react";
import Header from "../../companents/Header/Header";
import Main from "../../companents/Main/Main";
import Footer from "../Footer/Footer";
import AddCardPopup from "../AddCardPopup/AddCardPopup";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import api from "../../utils/Api";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";
import CardContext from "../../utils/Contexts/CardContext.js";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";
// import DeleteCardPopup from "../DeleteCardPopup/DeleteCardPopup";

function App() {
    // popups states
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    //   const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(true);
    const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
    //
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    function handleCardLike(card) {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        // Снова проверяем, есть ли уже лайк на этой карточке

        const isLiked = card.likes?.some((item) => item._id === currentUser._id);

        if (isLiked) {
            api
                .deleteLike(card._id)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    );
                })
                .catch((error) => console.error(`Ошибка при удалении ${error}`));
        } else {
            api
                .setLike(card._id)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    );
                })
                .catch((error) => console.error(`Ошибка при нажатии лайка ${error}`));
        }
    }

    function handleCardDelete(myCardId) {
        api
            .deteteCard(myCardId)
            .then(() => {
                setCards(cards.filter((card) => card._id !== myCardId));
            })
            .catch((error) => console.error(`Ошибка при удалении карточки ${error}`));
    }

    function handleUpdateAvatar(avatarData) {
        api
            .setAvatar(avatarData)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) =>
                console.error(`Ошибка при обновлении аватара Пользователя ${error}`)
            )
            .catch((error) =>
                console.error(`Ошибка при обновлении данных карточки ${error}`)
            );
    }

    function handleUpdateUser(userData) {
        api
            .setUserInfo(userData)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) =>
                console.error(`Ошибка при обновлении данных Пользователя ${error}`)
            );
    }

    function handleAddPlaceSubmit(cardData) {
        api.addCard(cardData).then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
        }).catch((error) =>console.error(`Ошибка при добавлении новой карточки ${error}`))
    }

    useEffect(() => {
        api
            .getUserInfo()
            .then((data) => setCurrentUser(data))
            .catch((error) => console.error(`Ошибка при получении данных Пользователя  ${error}`));

        api
            .getDefaultCards()
            .then((data) => setCards(data))
            .catch((error) => console.error(`Ошибка при получении данных карточек ${error}`));
    }, []);

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
    //   function handleDeleteCardPopupOpen() {
    //     setDeleteCardPopupOpen(true);
    //   }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({ name: "", link: "" });
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
                        onCardDelete={handleCardDelete}
                        onCardLike={handleCardLike}
                    />
                    <Footer />

                    <EditProfilePopup
                        onUpdateUser={handleUpdateUser}
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                    />

                    <AddCardPopup
                        onAddPlace={handleAddPlaceSubmit}
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                    />

                    <EditAvatarPopup
                        onUpdateAvatar={handleUpdateAvatar}
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                    />

                    <ImagePopup onClose={closeAllPopups} card={selectedCard} />

                    {/* <DeleteCardPopup onClose={closeAllPopups} isOpen={isDeleteCardPopupOpen}/> */}
                </CardContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    );
}
export default App;
