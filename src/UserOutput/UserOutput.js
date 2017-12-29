import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.name} likes to run</p>
            <p>{props.name} wants to run</p>
        </div>
        )
};

export default userOutput;