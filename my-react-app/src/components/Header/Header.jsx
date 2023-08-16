import React from "react";
import Pict from '../../style/img.png'
import { FaSearch } from "react-icons/fa";               



const Header = (props) => {
    
    return (
        <div className='container-home'>
            <div className='cols'>
                <h1>Discover Recipe & Delicious Food</h1> 
                <br />
                <div className="search-group input-group mb-3  mx-3 ">
                    <span className="search-icon input-group-text border-end-0 bg-white border-black" ><FaSearch /></span>
                    <input type="text" className="search-header form-control  bg-white border-start-0 border-black" placeholder="search recipe" aria-label="search recipe" />
                </div> 
                {/* <form>
                    <input type='search' placeholder='&#61442; search recipe' className="search-header" ></input>
                </form> */}
            </div>
            <img src={Pict} alt="Pict" className='pict' />
            <div className='cols-2'>
        </div>
    </div>
    )
}

export default Header;