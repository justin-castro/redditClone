import React from "react";

function PostButtons(props) {
  return (
    <div>
      <button className="post">{props.votes}</button>
      <button className="post">{props.comments}</button>
      <button className="button badge post">X</button>
      <button className="button share post">Share</button>
    </div>
  );
}

export default PostButtons;
