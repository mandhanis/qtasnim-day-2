import React from "react";

import Footer from "../components/Footer/Footer";

const AddRecipe = () => {
    
    return (
        <>
        <div className="mx-5 pt-5 px-5">
            <div className="add-img container d-flex justify-content-center align-items-center flex-column p-3">
                <input type="file" className="form-control "/>
            </div> 
            <div className="">
                <input type="text" className="container add-title border-0 px-3" placeholder="Title" />
            </div>
            <div >
                <textarea className="add-ingre container border-0  p-3 " placeholder="Ingredients" />
            </div> 
            <div className="">
                <input type="file" className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control" placeholder="Video" />
            </div>
            <div className=" d-flex justify-content-center align-items-center my-5 ">
                <input type="submit" className="btn button" />
            </div>
                
        </div>

        
        <Footer />
        </>
    )
}

export default AddRecipe;