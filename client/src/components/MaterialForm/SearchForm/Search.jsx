import React from 'react';
import { connect } from 'react-redux';
import MatCard from './MatCard';
import selectMat from '../../../selectors';

const Seacrh = (props) => {
    return(
        <div>
            <section className="container">
                {props.materials.map((material) => {
                    return <MatCard />;
                })}
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        materials: selectMat(state.materials, state.filters)
    }
}

export default connect(mapStateToProps)(Seacrh);