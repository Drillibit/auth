import React from 'react';
import { Link } from 'react-router-dom';

const MatCard = (props) => {
    const {_id, branch, name, price, priceGold, pricePlatinum } = props.mat;
    return(
        <div className="card slideLeft" key={_id}>
            <p className="card_text">Город: {branch}</p>
            <p className="card_text">{name}</p>
            <p className="card_text">Цена: {price}тг.</p>
            <p className="card_text">Цена Вип 1: {priceGold}тг.</p>
            <p className="card_text">Цена Вип 2: {pricePlatinum}тг.</p>
            <button className="btn_red" onClick={() => {
                props.dispatch(startRemoveMaterial({ _id: material._id }));
            }}>Удалить {material.name}</button>
            <Link className="form_btn" to={{ pathname: `/edit/${material._id}` }}>Редактировать</Link>
        </div>
    )
}

export default MatCard;