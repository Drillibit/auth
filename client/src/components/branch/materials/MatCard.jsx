import React, { Component } from 'react';
import '../../../styles/display_mat.css';
class MatCard extends Component {
    constructor(props){
        super(props);
    }
    onClick = () => {
        this.props.removeDisplayMat({id: this.props.data.id});
    }

    render() {
        console.log(this.props)
        const { name, price} = this.props.data;
        return(
            <div className="card slideLeft">
                <p>Mat Card</p>
                <p className="card_text">{name}</p>
                <p className="card_text">Стоимость: {price} тг</p>
                <svg onClick={this.onClick} aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg"><path fill="currentColor" d="M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z"></path></svg>
            </div>
        )
    }
}

export default MatCard;