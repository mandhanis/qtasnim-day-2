import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VidButton = ({ recipe_id }) => {
  return (
    <>
      <div className="vid-sec px-5 m-5">
        <div className="vid-1 rounded border-0">
          <Link to={`/video/${recipe_id}`} className="border-0 width-auto">
            <button className="vid-1 border-0 rounded d-flex justify-content-center align-items-center">
              <FaPlay style={{ color: "#ffffff" }} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VidButton;
