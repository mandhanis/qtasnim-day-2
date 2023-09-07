import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";


const UserComment = (props) => {
    const { data, handleDelete, handleEdit } = props;
    const { user, img_url, text } = data;
    
    
    // const [postData, setPostData] = useState(null);

    return (
        <div className="user-comment my-5 mx-5 px-5 border-bottom">
            <div className="comment-sec d-flex flex-row justify-content-between mt-3 ">
                <div className="d-flex">
                <img src={img_url || UserComment.defaultProps.img_url} className="pfp-user rounded-circle" alt="user" />
                <div className="user mx-3">
                    <h5>{user}</h5>
                    <p>{text}</p>
                </div>
                </div>
                <div className="d-flex gap-3 align-items-center mb-4">
                    <button type="submit" className="border-0 bg-white" onClick={handleEdit}> 
                        <FaEdit className="text-primary"  />
                    </button>
                    <button  type="submit" className="border-0 bg-white"  onClick={handleDelete}>
                        <FaTrash style={{ color: 'red' }}   />
                    </button>
                </div>
            </div>
        </div>
    )
} 
UserComment.defaultProps ={
    img_url: "https://i.pinimg.com/236x/fb/27/41/fb27417d8671d75fba40a9ddf910d4d7.jpg"
}



export default UserComment;



