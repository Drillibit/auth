import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startAddBranch } from '../../actions/branch';
import '../../styles/branch_form.css';

const BranchFormMain = (props) => {
    return (
        <div className="branch_form">
            <h1>Форма создания филиала</h1>
            <Form
                onSubmit={(branch) => {
                    props.dispatch(startAddBranch(branch));
                }}
            />
        </div>
    );
};

export default connect()(BranchFormMain);