import React from "react";

const Counter1 = (props) => {
    <button style={{
        height: '55px',
        width: '55px',
        color: 'blue',
        fontFamily: 'fantasy',
        fontSize: '35px',
        backgroundColor: 'black',
    }}
            onClick={props.incCount}>
        {props.count}
    </button>
}
export default Counter1