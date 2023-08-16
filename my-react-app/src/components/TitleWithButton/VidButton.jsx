import React from "react";
import { FaPlay } from "react-icons/fa";


const VidButton = (props) => {
    
    return (
        <>
           <div className="vid-sec px-5 m-5 ">
            {/* <h3 className="ingre-title mb-5">Video Step</h3> */}
            <div className="vid-1 rounded border-0">
                        <a href="/video" className="border-0 width-auto">
                            <button className="vid-1 border-0 rounded d-flex justify-content-center align-items-center">
                                <FaPlay style={{color: "#ffffff"}} /> 
                            </button>
                        </a>   
            </div>
        </div>
        </>
      
    )
}

export default VidButton;

