import data from "./data.json";
import Post from "./Post";
import {
  MagnifyingGlass,
  Bell,
  Plus,
  ChatCircleDots,
  EggCrack,
  House,
  ArrowCircleUpRight,
  RedditLogo,
  Megaphone,
  Question,
  BookOpen,
  Wrench,
  MicrophoneStage,
  UsersThree,
  HourglassLow,
  CirclesThreePlus,
  Scroll,
  Scales,
  Article,
  CaretUp,
  CaretDown,
  DotsThree,
  X,
  PushPinSimple,
  ArrowFatUp,
  ArrowFatDown,
  Export,
  Medal,
  ArrowSquareOut,
} from "phosphor-react";
import Avvvatars from "avvvatars-react";
import "./App.css";
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
        <div className="logo">
          <RedditLogo size={32} />
          <span>knowit</span>
        </div>
        <div className="searchbar">
          <MagnifyingGlass size={20} />
          <input
            className="search-input"
            type="text"
            placeholder="Search in r/Helldivers"
          />
        </div>
        <div className="actions">
          <EggCrack size={24} />
          <ChatCircleDots size={24} />
          <Plus size={24} />
          <Bell size={24} />
          <Avvvatars style="shape" />
        </div>
      </div>
      <div className="grid navigation">
        <div className="container">
          <ul>
            <li> Home</li>
            <li>Popular</li>
            <li>All</li>
          </ul>
          <ul>
            <li> Create a custom feed</li>
          </ul>
          <ul>
            <li> Home</li>
            <li>Popular</li>
            <li>All</li>
            <li>All</li>
            <li>All</li>
          </ul>
          <ul>
            <li> About Reddit</li>
            <li>Advertise</li>
            <li>Help</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="container">
          <img
            className="banner"
            src="https://styles.redditmedia.com/t5_2ya0t/styles/bannerBackgroundImage_vpo0ffwsuryc1.png"
            alt=""
          />
          <div className="thread-title flex">
            <div className="flex">
              <img
                className="thread-icon"
                src="https://styles.redditmedia.com/t5_2ya0t/styles/communityIcon_ql5iyxjfuvic1.jpg?format=pjpg&s=c2ffada26a84a71ed5b3ec07bba0a1f825ce9833"
                alt=""
                width={80}
              />
                <h1>r/Helldivers</h1>
            </div>
              <div className="flex">
              <button>Create a post</button>
              <button>
                <Bell />
              </button>
              <button>Joined</button>
              <button>...</button>
              </div>
          </div>
          <div className="grid body">
            <Post />
            <div className="container">
              <h3>Helldivers</h3>
              <p>
                A subreddit dedicated to HELLDIVERS and HELLDIVERS 2, intense
                co-op shooters set in a satirical dystopian future where you
                play as one of mankind's elite soldiers determined to spread
                managed democracy. Developed by Arrowhead Game Studios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
