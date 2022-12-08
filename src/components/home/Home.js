import React from "react";
import "./Home.css";
import Me from '../../assets/me.jpg'

function Home() {
  return (
    <div className="Home">
      <div className="About">
        <h1>About Me</h1>
        <p>
          Hi, I'm Ahmad. I am a 100% self taught full stack developer from
          Saskatoon Sasktchewan. After several years of professional experience
          working in areas such as sales, marketing, and data analysis, I
          decided to pursue a field that has always interested me - computer
          programming. In March of 2022 I started learning programming in my
          spare time. In September of 2022 I began dedicating myself full-time
          to learning full-stack web development. My ultimate goal is to become
          a full-time professional developer. I am open to in-person roles
          across Canada as well as remote positions. In my spare time I like to
          golf, run, watch football, and play video games. I drink entirely too
          much coffee and love dogs.
        </p>
      </div>
      <div className="Picture">
        <img src={Me} />
      </div>
    </div>
  );
}

export default Home;
