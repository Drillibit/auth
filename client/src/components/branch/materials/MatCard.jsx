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
            <div className="card">
                <p>Mat Card</p>
                <p>{name}</p>
                <p>Стоимость: {price}</p>
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}

export default MatCard;