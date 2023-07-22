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

function App() {
    // popups states
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
    //
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([])

// console.log(currentUser);


    function handleCardDelete(myCardId) {
        api.deteteCard(myCardId).then(() => {
            setCards(cards.filter((card) => card._id !== myCardId));
        })
    }


    function handleAddPlaceSubmit(cardData) {
        api.addCard(cardData).then((newCard) => {
            setCards([newCard, ...cards]);
        })
    }



    function handleUpdateAvatar(avatarData) {
        api
            .setAvatar(avatarData)
            .then((data) => {
                setCurrentUser(data)
                closeAllPopups();
            }).catch((error) =>console.error(`Ошибка при обновлении аватара Пользователя ${error}`))
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
            setCards([newCard, ...cards])
            closeAllPopups();
        })
    }

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
        setSelectedCard({name: '', link: ''});
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
                    />
                    <Footer />
                    {/* <Routes><Route path="/" element={<Header />} /></Routes> */}

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
                </CardContext.Provider>
            </CurrentUserContext.Provider>

            {/* <PopupWithForm name="delete-card" nameButton={'Да'} title={'Вы уверены?'} /> */}
        </div>
    );
}
export default App;
