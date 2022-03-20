import React from "react";

const  Counter2 = (props) => (
    <button style={{
        height: '150px',
        width: '80px',
        color: 'red',
        fontFamily: 'fantasy',
        fontSize: '35px',
        backgroundColor: 'black',
    }}
            onClick={props.incCount}>
        {props.count}
    </button>
);
export default Counter2