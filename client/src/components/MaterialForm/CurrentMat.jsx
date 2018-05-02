import React from 'react';
import { connect } from 'react-redux';
import { startRemoveMaterial } from '../../actions/material';
import '../../styles/single_branch.css';
import '../../styles/display_mat.css';


const CurrentMat = (props) => {
    return (
        <div>
            <section className="container">
                {props.materials.map((material) => {
                    return <div className="card slideLeft" key={material._id}>
                            <p className="card_text">Город: {material.branch}</p>
                            <p className="card_text">{material.name}</p>
                            <p className="card_text">Цена: {material.price}тг.</p>
                            <p className="card_text">Цена Вип 1: {material.priceGold}тг.</p>
                            <p className="card_text">Цена Вип 2: {material.pricePlatinum}тг.</p>
                            <button className="btn_red" onClick={() => {
                                props.dispatch(startRemoveMaterial({ _id: material._id }));
                            }}>Удалить {material.name}</button>
                        </div>;
                })}
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        materials: state.materials,
        branches: state.branches
    }
}

export default connect(mapStateToProps)(CurrentMat);