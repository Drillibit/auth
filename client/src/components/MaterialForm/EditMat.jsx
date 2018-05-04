import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startEditMat } from '../../actions/material';

const EditMat = (props) => {
    return (
        <div>
            <Form 
                data={props.branches}
                material={props.material}
                onSubmit={(material) => {
                    props.dispatch(startEditMat(props.material._id, material))
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        material: state.materials.find((material) => material._id === props.match.params.id),
        branches: state.branches 
    };
};

export default connect(mapStateToProps)(EditMat);