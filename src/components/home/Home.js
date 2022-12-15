import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="Home">
      <div className="About">
        <h1>About Me</h1>
        <div className="About_text">
          <p>Hi, I'm Ahmad.</p> <br></br>
          <p>
            I am a 100% self taught full stack developer from Saskatoon
            Sasktchewan. After several years of professional experience working
            in areas such as sales, marketing, and data analysis, I decided to
            pursue a field that has always interested me - computer programming.{" "}
          </p>
          <br></br>
          <p>In March of 2022 I started learning programming in my spare time. In
          September of 2022 I began dedicating myself full-time to learning
          full-stack web development.
          </p>
          <br></br>
          <p>
            My ultimate goal is to become a full-time professional developer. I
            am open to in-person roles across Canada as well as remote
            positions.
          </p>
        </div>
        <br></br>

        <ul aria-label="Interests">
          <li>
            Technology - especially web development & data engineering and
            visualization
          </li>
          <li>Sports - especially football - Go Bengals - Go Wolverines!</li>
          <li>Gaming - any TFT players hit me up!</li>
          <li>Fitness - sometimes this one is more of a job than interest</li>
          <li>Food - cooking it, eating it, learning about it</li>
          <li>Music - there is nothing more I love than a good concert</li>
        </ul>
      </div>
      <div className="Picture">
        <img src='../../../assets/me.jpg' alt="headshot of Ahmad in a suit" />
      </div>
    </section>
  );
}

export default Home;
