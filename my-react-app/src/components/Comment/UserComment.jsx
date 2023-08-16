import React from "react";

const UserComment = (props) => {
    
    return (
        <div className="user-comment my-5 mx-5 px-5 border-bottom">
            <div className="comment-sec d-flex mt-3 ">
                <img src={props.img} className="pfp-user rounded-circle" alt="user" />
                <div className="user mx-3">
                    <h5>{props.username}</h5>
                    <p>{props.comment  }</p>
                </div>
            </div>
        </div>
    )
}

export default UserComment;



