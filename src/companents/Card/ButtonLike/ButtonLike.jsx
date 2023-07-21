import React, { useState, useEffect } from 'react'
import api from '../../../utils/Api';


function ButtonLike({ card, currentUserId }) {

    const [isLiked, setLike] = useState(true)
    const [counter, setCounter] = useState(false)

    useEffect(() => {
        setLike(card.likes.some((item) => currentUserId === item._id));
    }, [card.likes, currentUserId]);


    const handleLike = () => {
        if (isLiked) {
            api.deleteLike(card._id)
                .then((res) => {
                    setLike(false)
                    setCounter(res.likes.length)
                }
                ).catch((error) => console.error(`ошибка при снятие лайка ${error}`))
        } else {
            api.setLike(card._id)
                .then((res) => {
                    setLike(true)
                    setCounter(res.likes.length)
                }
                ).catch((error) => console.error(`ошибка при установке лайка ${error}`))
        }
    }
    useEffect(handleLike, []);



    return (
        <>
            <button onClick={handleLike} type="button" className={`element__button ${isLiked ? "element_button-active" : ''}`} />
            <span className="element__button_like-counter">{counter}</span>
        </>
    )
}

export default ButtonLike;