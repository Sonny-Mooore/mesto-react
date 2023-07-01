import React, { useEffect, useState } from "react";
import api from "../../utils/Api";
import Card from "../Card/Card.jsx";


function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])

    // console.log(api.getUserInfo);
    useEffect(() => {
        api.getUserInfo().then(data => {
            console.log(data);
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);

        });
    }, []);

    useEffect(() => {
        api.getDefaultCards().then(data => {
            setCards(data);
        });
    }, []);

    console.log(cards);
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
                {cards.map((card) => <Card key={card.id} card={card} />)}
            </section>


        </main>

    )
}
export default Main;