import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Branches = (props) => {
    return (
        <div className="menu_branches dropdown">
                <button className="dropbtn">Филиалы</button>
            <div className="dropdown-content">
            {props.branches.map((branch) => {
                return (<Link
                    key={branch._id}
                    to={{
                        pathname: `/branch/${branch._id}`,
                        state: { ...branch }
                    }}
                >{branch.branchName}</Link>);
            })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        branches: state.branches
    }
}

export default connect(mapStateToProps)(Branches);