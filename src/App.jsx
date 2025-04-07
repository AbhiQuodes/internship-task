import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import IntroContainer from "./components/IntroContainer";
import TestomonialsBox from "./components/TestomonialsBox";
import Sectionhead from "./components/Sectionhead";
import Card from "./components/Card";
import advertisingIllustration from "/src/assets/advertisingIllustration.svg";
import searchIllustration from "/src/assets/searchIllustration.svg";
import FooterBar from "./components/FooterBar";
import LogoBar from "./components/LogoBar";
import arrowIcon from "/src/assets/arrowIcon.svg";
import plusIcon from "/src/assets/plusicon.svg";
import minusIcon from "/src/assets/minusIcon.svg";

function App() {
  return (
    <>
      <NavigationBar />
      <IntroContainer />
      <LogoBar></LogoBar>
      <Sectionhead
        title="Services"
        content="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      ></Sectionhead>

      <div className="container">
        <Card bgColor="rgba(243, 243, 243, 1)">
          <div className="box card-box">
            <h3
              style={{ backgroundColor: "rgba(185, 255, 102, 1)" }}
              class="card-title"
            >
              Search engine optimization
            </h3>
            <a class="card-link" href="#">
              <img className="arrow-icon" src={arrowIcon} alt=""></img>Learn
              more{" "}
            </a>
          </div>
          <div className="box card-box">
            <img
              className="box-img"
              src={searchIllustration}
              alt="banner-img"
            ></img>
          </div>
        </Card>

        <Card bgColor="rgba(185, 255, 102, 1)">
          <div className="box card-box">
            <h3 style={{ backgroundColor: "white" }} class="card-title">
              Pay-per-click advertising
            </h3>
            <a class="card-link" href="#">
              <img className="arrow-icon" src={arrowIcon} alt=""></img> Learn
              more
            </a>
          </div>
          <div className="box card-box">
            <img
              className="box-img"
              src={advertisingIllustration}
              alt="banner-img"
            ></img>
          </div>
        </Card>
      </div>

      <Sectionhead
        title="Our Working Process "
        content="Step-by-Step Guide to Achieving Your Business Goals"
      ></Sectionhead>

      <Card bgColor="rgba(243, 243, 243, 1)">
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <hr></hr>
          <p className="card-description">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.{" "}
          </p>

          <div className="card-content">
            <div className="card-number">01</div>
            <div className="card-content-title">Consultation</div>
            <img
              src={minusIcon}
              className="card-content-icon"
              alt="plus-icon"
            ></img>
          </div>
        </div>
      </Card>

      <Card bgColor="rgba(185, 255, 102, 1)" style={{ width: "100%" }}>
        <div className="card-content">
          <div className="card-number">02</div>
          <div className="card-content-title">
            Research and Strategy Development
          </div>
          <img
            src={plusIcon}
            className="card-content-icon"
            alt="plus-icon"
          ></img>
        </div>
      </Card>

      <Sectionhead
        title="Testimonials"
        content="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      ></Sectionhead>
      <TestomonialsBox></TestomonialsBox>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
