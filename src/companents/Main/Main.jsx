import React, { useEffect, useState } from "react";
import api from "../../utils/Api";
import Card from "../Card/Card.jsx";


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userId, setUserId] = useState('');
    const [cards, setCards] = useState([])

    // console.log(onCardClick);
    useEffect(() => {
        api.getUserInfo().then(data => {
            // console.log(cards);
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
            setUserId(data._id)
            // console.log(data)
        }).catch((error)=> console.error(`Ошибка при создании данных ${error}`))
    }, []);

    useEffect(() => {
        api.getDefaultCards().then(data => {
            setCards(data)
        }).catch((error)=> console.error(`Ошибка при создании данных ${error}`))
    }, []);



    // console.log(cards);
    return (
        <main>
            <section className="profile">
                <button onClick={onEditAvatar} type="button" className="profile__avatar-overlay">
                    <img className="profile__avatar" src={userAvatar} alt="" />
                </button>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__title profile__title_name ">{userName}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__button" />
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-card" />
            </section>
            <section className="elements">
                {cards.map((card) => <Card onCardClick={onCardClick} key={card._id} card={card} userId={userId} />)}
            </section>


        </main>

    )
}
export default Main;