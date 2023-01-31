import React from 'react';
import profileImage from "../assets/large/IMG_2425.jpg"

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
              Hello, my name is Minh Truong. I am currently finishing my coding bootcamp with University of Minnesota. 
            My goal is to create more visually appealing websites with functional back-end, while working as a full-time 
            Web Developer. I am currently learning data structures and making my algorithm more efficient. 
              I love organizing, and problem solving. Also, like Dr.Gregory House from "House", anomalies bug me, which is 
            why I spend so much time on debugging. 
            <br></br>
            I spend my free times listening to podcasts, playing video games and doing outdoor photography.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;