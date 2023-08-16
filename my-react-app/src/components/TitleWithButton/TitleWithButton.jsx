import React from "react";


const TitleWithButton = (props) => {
    
    return (
        <>
            <div className='fav-sub'>
                <h1>{props.titleName}</h1>
                <div className="underline">

                <p className=''>_______</p>  
                </div>
                <p>{props.titleBody}</p>
                <button><a href={props.link}>Learn More</a></button>
            </div>
        </>
      
    )
}

export default TitleWithButton;

