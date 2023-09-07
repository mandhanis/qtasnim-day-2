import React from "react";


const UserPost = (props) => {
    const { data } = props;
    const { sender, pfp } = data;
    
    
    // const [postData, setPostData] = useState(null);

    return (
        <div className="user-comment my-5 mx-5 px-5 ">
            <div className="comment-sec d-flex flex-row justify-content-between mt-3 ">
                <div className="d-flex">
                <img src={pfp || UserPost.defaultProps.pfp} className="pfp-user rounded-circle" alt="user" />
                <div className="user mx-3 gap-1">
                    <p>Recipe Maker</p>
                    <h3 className="sender-user">{sender}</h3>
                </div>
                </div>
            </div>
        </div>
    )
} 
UserPost.defaultProps ={
    pfp: "https://i.pinimg.com/236x/fb/27/41/fb27417d8671d75fba40a9ddf910d4d7.jpg"
}



export default UserPost;



