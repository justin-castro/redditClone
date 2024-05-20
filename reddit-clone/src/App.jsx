import data from "./data.json";
import Post from "./Post";
import { useState, useEffect } from "react";

function App() {
  // const TimestampConverter = ({ timestamp }) => {
  //   // Function to convert Unix timestamp to human-readable date
  //   const convertTimestamp = (timestamp) => {
  //     const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  //     return date.toUTCString(); // Convert to UTC string
  //   };
  // }

  return (
    <>
      <div className="header">
        <span>knowit</span>
        <div className="searchbar">
          <button>Search</button>
          <input type="text" placeholder="Search in r/Helldivers" />
        </div>
        <div className="actions">
          <button>Messages</button>
          <button>Create Post</button>
          <button>Notifications</button>
          <button>Login</button>
        </div>
      </div>
      <div>
        <img src="#" alt="" />
        <h1>r/Helldivers</h1>
      </div>
      <Post />
    </>
  );
}

export default App;
