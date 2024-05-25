import React from "react";
import {
  Medal,
  Export,
  ArrowFatUp,
  ArrowFatDown,
  ChatCentered,
} from "phosphor-react";

function PostButtons(props) {
  return (
    <div>
      <button className="post">
        <ArrowFatUp />
        {props.votes}
        <ArrowFatDown />
      </button>
      <button className="post">
        <ChatCentered />
        {props.comments}
      </button>
      <button className="button medal post">
        <Medal />
      </button>
      <button className="button share post">
        <Export />
        Share
      </button>
    </div>
  );
}

export default PostButtons;
