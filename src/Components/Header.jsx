import React from "react";
import "../Styles/Port.css";
import { SocialIcon } from "react-social-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import javascript from "../Images/java-script.png";
import react from "../Images/structure.png";
import html from "../Images/html-5.png";
import css from "../Images/css-3.png";
import bootstrap from "../Images/bootstrap.png";
import python from "../Images/python.png";
import project from "../Images/6171704.jpg";
import main from "../Images/boy.png";
import Newheader from "../Components/Newheader";

export default function App() {
  return (
    <div className="container-make ">
      <Newheader />
      <div className="container-fluid pt-5 mb-5  ">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center ">
            <img style={{ width: "75%" }} src={main} />
          </div>
          <div className="col-md-6 pt-4 profile fade-in">
            <h5 className="text-center">Hi, My Name is</h5>
            <h1 className="text-center"> Samrudha Shinde</h1>
            <h3 className="text-center">
              I am a passionate FrontEnd Developer!
            </h3>

            <div className="button">
              <button
                className="me-2 view-resume"
                onClick={() =>
                  window.open(
                    `${process.env.PUBLIC_URL}/SamrudhaShinde__Resume.pdf`,
                    "_blank"
                  )
                }
              >
                View Resume
              </button>

              <button
                className="me-5 contact-info"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Info
              </button>
            </div>
            <div className="contact-info-container">
              <div className="col-4 col-md-2">
                <SocialIcon url="https://www.linkedin.com/in/samrudha-shinde-730a2528b" />
              </div>
              <div className="col-4 col-md-2">
                <SocialIcon url="www.github.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid   profile" id="about">
        <div className="text-center headers">Get To Know More</div>
        <div className="text-center education mb-3">ABOUT ME</div>
        <p className="section-container">
          My name is Samrudha Shinde. I am a front-end developer with a strong
          focus on web development technologies. I have extensive experience
          with HTML, CSS, Bootstrap, JavaScript, and React, which allows me to
          create responsive and dynamic user interfaces. In addition to my
          front-end skills, I am also proficient in backend development with
          Python and Django. I have experience in integrating APIs into the
          frontend with the help of Django. My combined expertise in both
          front-end and back-end development enables me to build comprehensive
          and efficient web applications.
        </p>
      </div>
      <div className="container-fluid  profile" id="education">
        <div className="text-center">
          <div className="headers">Explore My </div>
          <div className="education mb-3">EDUCATION</div>
          <div className="border" style={{ borderRadius: "125px" }}>
            <div className="row mb-2 pt-4">
              <div className="col-md-6">
                KLE Institute of Technology
                <br />
                Master of Computer Application <br />
                CGPA : 7.4
              </div>
              <div className="col-md-6">
                Hubli, Karnataka
                <br />
                Feb 2020 - Sep 2023 <br />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                P. C. Jabin Science College
                <br />
                Bachelor of Computer Application <br />
                63%
              </div>
              <div className="col-md-6">
                Hubli, Karnataka
                <br />
                June 2018 - Sep 2021 <br />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                Private Jr. College
                <br />
                Higher Secondary School Board (12th) <br />
                55 %
              </div>
              <div className="col-md-6">
                Kolhapur, Maharashtra
                <br />
                Mar 2018 <br />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                S.M. Lohiya High School
                <br />
                Secondary High School Board (10th) <br />
                68 %
              </div>
              <div className="col-md-6">
                Kolhapur, Maharashtra
                <br />
                May 2016 <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  profile" id="skills">
        <div className="text-center headers">Explore My </div>
        <div className="education text-center mb-3">SKILLS</div>
        <div className="row">
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={html}
                alt="HTML"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={css}
                alt="CSS"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={javascript}
                alt="JavaScript"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={react}
                alt="React"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-12 mb-4 skills-shadow">
            <div className="card d-flex justify-content-center align-items-center pt-3">
              <img
                src={python}
                alt="Python"
                className="card-img-top company-logo mb-3"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  profile" id="project">
        <div className="text-center headers">Browse My Recent </div>
        <div className="education text-center mb-3">PROJECTS</div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={project} className="card-img-top" alt="Project" />
            <div className="card-title text-center">In Progress</div>
          </div>
        </div>
        <div className="contact-info-container">
          <button className="disabled">GIT HUB</button>
          <button className="disabled">LIVE DEMO</button>
        </div>
      </div>
      <div className="container-fluid profile" id="contact">
        <div className="text-center headers">Get in Touch </div>
        <div className="education text-center mb-3">CONTACT ME</div>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <SocialIcon url="mailto:samrudhashinde07@gmail.com" />
          </div>
          <div className="contact-info-container">
            <SocialIcon url="https://www.linkedin.com/in/samrudha-shinde-730a2528b" />
          </div>
          <div
            className="text-center contact-info-container"
            style={{ fontWeight: "bold" }}
          >
            Phone No. +91-70221-64337
          </div>
        </div>

        <div className="text-center" style={{ fontWeight: "bold" }}>
          Copyright © 2024 Samrudha Shinde
        </div>
        <div className="text-center" style={{ fontWeight: "bold" }}>
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
