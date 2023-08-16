import React from "react";
const Title = (props) => {
    return (
        <div className='' >
            <div className="container-recipe">
            <div className='thumb'></div>
            <h2 className='thumb-text'>{props.title}</h2>
            </div>
        </div>
    )
}

export default Title;


