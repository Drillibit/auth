import React from 'react';

const RenderInfo = (props) => {
    let info = props.state;
    return (
        <div>
            <p>Name {info.username}</p>
            <p>Email {info.email}</p>
            <p></p>
        </div>
    );
};

export default RenderInfo;