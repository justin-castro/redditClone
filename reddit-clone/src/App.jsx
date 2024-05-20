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
      <div>
        <img src="#" alt="" />
        <h1>r/Helldivers</h1>
        <Post />
      </div>
    </>
  );
}

export default App;
