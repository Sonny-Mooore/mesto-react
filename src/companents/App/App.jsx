import React, { useState, useEffect } from "react";
import Header from "../../companents/Header/Header";
import Main from "../../companents/Main/Main";
import Footer from "../Footer/Footer";
import AddCardPopup from "../AddCardPopup/AddCardPopup";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import api from "../../utils/Api";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext.js";
import CardContext from "../../utils/Contexts/CardContext.js";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";


function App() {
    // popups states
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(Boolean(null));
    //

    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    // console.log(cards);


    //     function handleCardLike(card) {
    //         // Снова проверяем, есть ли уже лайк на этой карточке
    //         const isLiked = !!(card.likes.some(element => element._id === currentUser._id))
    //         // console.log(isLiked)
    //         // Отправляем запрос в API и получаем обновлённые данные карточки
    // //state.map((c) => c._id === card._id ? newCard : c)

    //             api.setLike(card._id, !isLiked).then((newCard) => {
    //                 setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    //             })

    //                 // api.deleteLike(card._id, !!isLiked).then((res) => {
    //                 // setCards((state) => state.map((c) => c._id !== card._id))})
    //     }


    // function handleCardDelete(card) {
    //     // api.deteteCard(card._id)
    //     setCards((prevCards) => prevCards.filter((card) => card._id !== card._id));
    //     // setCards(cards.filter(card => console.log(card)))
    // }

    function handleUpdateAvatar(avatarData) {
        api.setAvatar(avatarData)
            .then((data) => {})
                .catch((error) => console.error(`Ошибка при обновлении данных Пользователя ${error}`))
    }

    function handleUpdateUser(userData) {
        api.setUserInfo(userData).then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        }).catch((error) => console.error(`Ошибка при обновлении данных Пользователя ${error}`))
    }

    useEffect(() => {
        api.getUserInfo()
            .then((data) => setCurrentUser(data))
            .catch((error) => console.error(`Ошибка при создании данных ${error}`))

        api.getDefaultCards()
            .then((data) => setCards(data))
            .catch((error) => console.error(`Ошибка при создании данных ${error}`));
    }, [])

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
                    <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileOpen} onAddPlace={handleAddPlaceOpen} onEditAvatar={handleEditAvatarOpen} // onCardLike={handleCardLike} onCardDelete={handleCardDelete}
                    />
                    <Footer />
                    {/* <Routes><Route path="/" element={<Header />} /></Routes> */}

                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

                    <AddCardPopup isOpen={handleAddPlaceOpen} onClose={closeAllPopups}  />

                    <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar}  isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}/>

                    <ImagePopup onClose={closeAllPopups} card={selectedCard} />
                </CardContext.Provider>
            </CurrentUserContext.Provider>

            {/* <PopupWithForm name="delete-card" nameButton={'Да'} title={'Вы уверены?'} /> */}
        </div>
    );
}
export default App;
