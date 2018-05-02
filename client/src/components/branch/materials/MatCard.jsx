import React from 'react';
import '../../../styles/display_mat.css';

const MatCard = (props) => {
    return(
        <div className="card">
            <p>Mat Card</p>
            <p>{props.data.name}</p>
            <p>Стоимость: {props.data.price}</p>
        </div>
    )
}

export default MatCard;