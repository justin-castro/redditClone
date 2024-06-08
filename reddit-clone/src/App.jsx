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
  List,
} from "phosphor-react";
import Avvvatars from "avvvatars-react";
import "./App.css";
import { useState, useEffect } from "react";
import Banner from "./assets/bannerBackground.png";

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
      {/* Header */}
      <div className="header grid grid-cols-header">
        <div className="header-nav__mobile">
          <List size={24} />
        </div>
        <div className="header__logo">
          <div classsName="header__logo mobile">
            <a className="flex header-logo__button" href="#">
              <RedditLogo size={32} />
            </a>
          </div>
          <div className="header__logo desktop">
            <a className="flex header-logo__button" href="#">
              <RedditLogo size={32} />
              <span>knowit</span>
            </a>
          </div>
        </div>
        <div className="header__searchbar">
          <MagnifyingGlass size={24} />
          <input
            className="header__search-input mobile"
            placeholder="Search Knowit"
          />
          <input
            className="header__search-input desktop"
            placeholder="Search in r/Helldivers"
          />
        </div>
        <div className="header__actions flex align-center">
          <EggCrack className="desktop" size={24} />
          <a className="flex header-action__button" href="#">
            <ChatCircleDots size={24} />
          </a>
          <a className="flex header-action__button" href="#">
            <Plus size={24} />
          </a>
          <a className="flex header-action__button" href="#">
            <Bell size={24} />
          </a>
          <a className="flex header-action__button" href="#">
            <Avvvatars style="shape" />
          </a>
        </div>
      </div>
      {/* Main Container */}
      <div className="container">
        <div className="navigation-container grid navigation-grid__side-navigation">
          <ul>
            <li>Home</li>
            <li>Popular</li>
            <li>All</li>
          </ul>
          <ul>
            <li>Create a custom feed</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Popular</li>
            <li>All</li>
            <li>All</li>
            <li>All</li>
          </ul>
          <ul>
            <li>About Reddit</li>
            <li>Advertise</li>
            <li>Help</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="main-container">
          <img className="main-container__banner" src={Banner} alt="" />
          <div className="main-container__intro">
            <div className="main-container__thread-info">
              <div className="main-container__thread-content">
                <img
                  className="main-container__icon"
                  src="https://styles.redditmedia.com/t5_2ya0t/styles/communityIcon_ql5iyxjfuvic1.jpg?format=pjpg&s=c2ffada26a84a71ed5b3ec07bba0a1f825ce9833"
                  alt=""
                  width={80}
                />
                <h1>r/Helldivers</h1>
              </div>
              <div className="thread-title__actions flex">
                <button className="thread-action action-button__primary flex align-center">
                  <span className="flex align-center">
                    <Plus size={18} />
                    Create a post
                  </span>
                </button>
                <button className="thread-action action-button__primary flex">
                  <span className="flex align-center">
                    <Bell size={18} />
                  </span>
                </button>
                <button className="thread-action action-button__primary flex align-center">
                  <span className="flex align-center">Joined</span>
                </button>
                <button className="thread-action action-button__primary flex align-center">
                  <span className="flex align-center">
                    <DotsThree size={24} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="thread-body__about-feed">
            <h3>Helldivers</h3>
            <p>
              A subreddit dedicated to HELLDIVERS and HELLDIVERS 2, intense
              co-op shooters set in a satirical dystopian future where you play
              as one of mankind's elite soldiers determined to spread managed
              democracy. Developed by Arrowhead Game Studios.
            </p>
          </div>
          {/* <div className="thread-body"><Post /></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
