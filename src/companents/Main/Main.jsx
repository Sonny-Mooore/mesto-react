import React, { useEffect, useState, useContext } from "react";
import api from "../../utils/Api";
import Card from "../Card/Card.jsx";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";
import CardContext from "../../utils/Contexts/CardContext";
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  // const [userName, setUserName] = useState('');
  // const [userDescription, setUserDescription] = useState('');
  // const [userAvatar, setUserAvatar] = useState('');
//   const [userId, setUserId] = useState("");
//   const [cards, setCards] = useState([]);

//   const { name, about, avatar } = useContext(CurrentUserContext);
    const { name, about, avatar } = useContext(CurrentUserContext);
    const currentUser = { name, about, avatar }
    const cards = useContext(CardContext)

//    console.log(currentUser);

//   useEffect(() => {
//       api.getUserInfo().then(data => {
//           // console.log(cards);
//           setUserName(data.name);
//           setUserDescription(data.about);
//           setUserAvatar(data.avatar);
//           setUserId(data._id)
//           // console.log(data)
//       }).catch((error) => console.error(`Ошибка при создании данных ${error}`))
//   }, []);

//   useEffect(() => {
//     api
//       .getDefaultCards()
//       .then((data) => {
//         setCards(data);
//       })
//       .catch((error) => console.error(`Ошибка при создании данных ${error}`));
//   }, []);


  return (
    <main>
    
      <section className="profile">
        <button
          onClick={onEditAvatar}
          type="button"
          className="profile__avatar-overlay">
          <img className="profile__avatar" src={avatar} alt="" />
        </button>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title profile__title_name ">{name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__button"/>
          </div>
          <p className="profile__subtitle">{about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-card"/>
      </section>

      <section className="elements">
        {cards.map((card) => (

            <Card currentUser={currentUser} onCardClick={onCardClick} key={card._id} card={card} />
          ))}
      </section>

    </main>
  );
}
export default Main;
