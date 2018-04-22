import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import Loadable from 'react-loadable';

const Loading = () => <div>Загрузка...</div>;

const BranchFormMain = Loadable({
    loader: () => import('../BranchForm/BranchFormMain'),
    loading: Loading
});
const SingleBranch = Loadable({
    loader: () => import('../branch/SingleBranch'),
    loading: Loading
});
const MaterialFormMain = Loadable({
    loader: () => import('../MaterialForm/MaterialFormMain'),
    loading: Loading
});

const ProtectedRoutes = ({ users }) => {
    const user = users[0];
    if(user){
        return (
            <div>
                <Route path="/add_branch" component={BranchFormMain} />
                <Route path="/branch/:id" component={SingleBranch} />
                <Route path="/add_material" component={MaterialFormMain} />
            </div>
        );
    } else {
       return <Redirect to="/" />
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ProtectedRoutes);