import React from 'react';
import { connect } from 'react-redux';
import MatCard from './MatCard';
import { removeDisplayMat } from '../../../actions/displayMat';
import '../../../styles/display_mat.css';

const DisplayMatMain = (props) => {
    return (
        <div className="display_mat">
            <p>История счёта:</p>
            {props.mat.map((m, index) => {
                return <MatCard key={index} data={m} rem={(id) => {
                    props.dispatch(removeDisplayMat(id))
                }}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mat: state.mat
    }
}

export default connect(mapStateToProps)(DisplayMatMain);