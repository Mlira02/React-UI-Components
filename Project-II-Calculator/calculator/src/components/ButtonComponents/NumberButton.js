import React from 'react';
import './Button.css';


function Numbers(props) {
    return(
        <div>
            <button type="button">{props.number}</button>
        </div>
    )
};


export default Numbers;
