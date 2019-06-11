import React from 'react';
import './Button.css';



function Action (props) {
    return(
        <div>
            <button type="button">{props.action}</button>
        </div>
    )
};


export default Action;