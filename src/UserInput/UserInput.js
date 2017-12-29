import React from 'react';

const style = {
        width: '40%',
        margin: '20px auto',
        border: '15px solid',
        padding : '20px'
    };

const userInput = (props) => {
    return (
        <div style={style}>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
};

export default userInput;