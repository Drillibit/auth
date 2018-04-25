import React from 'react';
import { connect } from 'react-redux';
import { startRemoveMaterial } from '../../actions/material';
import '../../styles/single_branch.css';

const CurrentMat = (props) => {
    return (
        <div>
            <section>
                {props.materials.map((material) => {
                    return <div key={material._id}>
                        <p>{material.name}</p>
                        <p>Цена: {material.price}</p>
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