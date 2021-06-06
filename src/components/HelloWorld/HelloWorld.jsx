import React from 'react';

function HelloWorld(props) {
    const {name, lastname} = props;
    return (
        <div>Hello {name}{lastname}</div>
    );
}

export default HelloWorld;