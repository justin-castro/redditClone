import React from "react";
import data from "./data.json";
import PostButtons from "./PostButtons";
import Avvvatars from 'avvvatars-react'

function Post() {
  return (
    <div>
      {data.data.children.map((data, i) => (
        <div key={data.data.id}>
          <Avvvatars value={data.data.author} style="shape" />
          <p>u/{data.data.author}</p>
          <p></p>
          <h2 className="title">{data.data.title}</h2>
          <p className="flair-text">{data.data.link_flair_text}</p>
          {data.data.link_flair_text.includes("VIDEO") ? (
            <video width="216" height="121" controls>
              <source
                src={data.data.media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          ) : data.data.thumbnail.includes("https") ? (
            <img src={data.data.thumbnail} alt="" />
          ) : (
            <p>{data.data.selftext}</p>
          )}
          <PostButtons
            votes={data.data.ups}
            comments={data.data.num_comments}
          />
        </div>
      ))}
    </div>
  );
}

export default Post;
