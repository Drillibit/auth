import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatCard from './MatCard';
import { removeDisplayMat } from '../../../actions/displayMat';
import '../../../styles/display_mat.css';

class DisplayMatMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumCount: [],
            sumRes: 0 
        }
    }


    onSumCountChange = (price) => {
        this.setState({
            sumCount: this.state.sumCount.concat([price])
        })
        let arr = this.state.sumCount;
        function add (a,b){
            return a + b;
        }
        let initial = price || 0;
        let res = arr.reduce(add, initial);
        this.setState({
            sumRes: res
        })
    }
   render() {    
        return (
            <div className="display_mat">
                <p>История счёта:{this.state.sumRes}</p>
                <div className="card_container">
                {this.props.mat.map((m, index) => {
                    return <MatCard 
                            key={index} 
                            data={m} 
                            onSumCountChange={(val) => {
                                this.onSumCountChange(val)
                            }} 
                            removeDisplayMat={(id) => {
                                this.props.dispatch(removeDisplayMat(id))
                    }}/>
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mat: state.mat
    }
}

export default connect(mapStateToProps)(DisplayMatMain);