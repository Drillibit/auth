import React from 'react';

const MatCard = (props) => {
    return(
        <div>
            <p>Mat Card</p>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
        </div>
    )
}

export default MatCard;