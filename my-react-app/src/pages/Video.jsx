import React from "react";
import Youtube from "../components/Video/Youtube";
import Navbar from "../components/Navbar/Navbar";


const Video = (props) => {
    
    return (
        <>
        <Navbar />
        <div className="d-flex">

        <div className="orange-thing"></div>
        <div className="container">
            <Youtube />
        </div>
        </div>
        </>
    )
}

export default Video;