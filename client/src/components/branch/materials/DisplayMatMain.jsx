import React from 'react';
import { connect } from 'react-redux';
import MatCard from './MatCard';
import '../../../styles/display_mat.css';

const DisplayMatMain = (props) => {
    return (
        <div className="display_mat">
            <p>Hello from DisplayMAT</p>
            <MatCard />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mat: state.mat
    }
}

export default connect(mapStateToProps)(DisplayMatMain);