import React from "react";
import { Link } from "react-router-dom";


const TitleWithButton = (props) => {
    
    return (
        <>
            <div className='fav-sub'>
                <h1>{props.titleName}</h1>
                <div className="underline">
                    <p className=''>_______</p>  
                </div>
                <p>{props.titleBody}</p>
                <Link to={`/recipes/${props.link}`} className="border-0 width-auto">
                    <button className="vid-1 border-0 rounded d-flex justify-content-center align-items-center text-white">
                    Learn More
                    </button>
                </Link>
            </div>
        </>
      
    )
}

export default TitleWithButton;

