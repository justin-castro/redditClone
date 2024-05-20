import React from "react";

function PostButtons(props) {
  return (
    <div>
      <button>{props.votes}</button>
      <button>{props.comments}</button>
      <button className="button badge">X</button>
      <button className="button share">Share</button>
    </div>
  );
}

export default PostButtons;
