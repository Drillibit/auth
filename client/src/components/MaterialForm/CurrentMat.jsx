import React from 'react';
import { connect } from 'react-redux';
import { startRemoveMaterial } from '../../actions/material';

const CurrentMat = (props) => {
    return (
        <div>
            <ul>
                {props.materials.map((material) => {
                    return <li key={material._id}>
                        <p>{material.name}</p>
                        <p>Цена: {material.price}</p>
                        <button onClick={() => {
                            props.dispatch(startRemoveMaterial({ _id: material._id }));
                        }}>Удалить</button>
                    </li>;
                })}
            </ul>
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