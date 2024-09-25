import "./assets/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { SocialIcon } from "react-social-icons";
import profilePic from "./assets/images/img2.jpg";
import Background from "./assets/images/jess-bailey-q10VITrVYUM-unsplash.jpg";
import contactImg from "./assets/images/map.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  AOS.init();
  return (
    <div className="App">
      <header className="app-header">
        <div className="profile-page">
          <nav className="navbar navbar-expand-lg fixed-top bg-primary">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="#">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </a>
                <button
                  className="navbar-toggler navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  {/* <li className="nav-item"><a className="nav-link " href="#skill">Skills</a></li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#project">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="page-content">
        <div>
          <div className="profile-page">
            <div className="wrapper">
              <div
                className="page-header page-header-small"
                filter-color="blue"
              >
                <div
                  className="page-header-image"
                  data-parallax="true"
                  style={{ backgroundImage: `url(${Background})` }}
                ></div>
                <div className="container">
                  <div className="content-center">
                    <div className="cc-profile-image">
                      <img src={profilePic} alt="Image" />
                    </div>
                    <div className="h2 title">Gabriela-Raluca Mavriche</div>

                    <p className="category text-white">
                      <br></br>
                    </p>
                    <a
                      className="btn btn-black mr-2"
                      href="#contact"
                      data-aos="zoom-in"
                      data-aos-anchor="data-aos-anchor"
                    >
                      Hire Me
                    </a>
                    {/* <a className="btn btn-black" data-aos="zoom-in" data-aos-anchor="data-aos-anchor" href='#'>
                      Download CV</a> */}
                  </div>
                </div>

                <div className="section">
                  <div className="container">
                    <div className="button-container">
                      <a
                        className="btn-round "
                        href="#"
                        title="Follow me on Linkedin"
                      >
                        <SocialIcon url="https://www.linkedin.com/in/gabriela-raluca-mavriche/" />
                      </a>
                      <a
                        className="btn-round"
                        href="#"
                        title="Follow me on Github"
                      >
                        <SocialIcon url="https://github.com/ralucamavriche" />
                      </a>
                      <a
                        className=" btn-round "
                        href="#"
                        title="Follow me on Instagram"
                      >
                        <SocialIcon url="https://www.instagram.com/ralucamavriche/" />
                      </a>
                      <a
                        className="btn-round "
                        href="#"
                        title="Follow me on Facebook"
                      >
                        <SocialIcon url="https://www.facebook.com/ralucamavriche/" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section" id="about" style={{ paddingTop: "100px" }}>
            <div className="container">
              <div className="card">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card-body">
                      <div className="h3 title mt-0">About</div>
                      <p>
                        I am a dedicated and sociable software engineer with a
                        passion for continuous learning and growth. Known for my
                        friendly and responsible approach, I excel in team
                        environments where collaboration and communication are
                        key to success. I have a natural ability to quickly
                        grasp new technologies and methodologies, allowing me to
                        adapt to evolving challenges with ease. I am always
                        eager to contribute innovative ideas while learning from
                        others, making me a valuable and dynamic team member.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="h3 title mt-0">Basic Information</div>
                      <div className="row">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Age:</strong>
                        </div>
                        <div className="col-sm-8">26</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Email:</strong>
                        </div>
                        <div className="col-sm-8">ralucamavriche@gmail.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Phone:</strong>
                        </div>
                        <div className="col-sm-8">0743302140</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Address:</strong>
                        </div>
                        <div className="col-sm-8">Iasi, România</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4">
                          <strong className="text-uppercase">Language:</strong>
                        </div>
                        <div className="col-sm-8">Romanian, English</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------Skill------------------------------------- */}

          {/* <div className="section" id="skill">
            <div className="container">
              <div className="h4 title text-center mb-4">Professional Skills</div>
              <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">HTML5&CSS3</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60"
                            aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">80%</span>
                        </div>
                      </div>


                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div><span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">React.js</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div><span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Angulare 2+</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div><span className="progress-value">50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Python</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div><span className="progress-value">75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Java</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div><span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">C/C++</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div><span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">OOP</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div><span className="progress-value">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Node.js(+Express.js)</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div><span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">MongoDB</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div><span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ---------------------------Projects------------------------------------- */}

          <div className="section" id="project">
            <div className="container text-center">
              <div className="h3 title pb-5 text-center" data-aos="fade-up">
                Projects
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">MedCare</p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">
                        React, MongoDB, Express.js, Node.js
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a href="#" class="btn btn-primary">
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/medcare-ui"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        The final project was created using the React,
                        Express.js, Node.js and MongoDB. The application is
                        designed to manage patients and appointments while
                        providing a meaningful experience for family doctors
                        through an intuitive and easily accessible interface.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">
                          Blood Donation Management
                        </p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">
                        MERN Stack, Redux, Bootstrap,SCSS
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://www.youtube.com/watch?v=KuNZsfiEU_8&feature=youtu.be"
                          class="btn btn-primary"
                        >
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/Blood-Donation-Management"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        The application helps blood donation centers and donors
                        to more easily access certain information, notifies
                        donors when blood is needed, reduces waiting time, and
                        creates a steady flow of donors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">Mini Projects </p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">React</div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://mini-projects-in-react.netlify.app/"
                          class="btn btn-primary"
                        >
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/Mini-Projects-In-React"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        This application contains several smaller projects made
                        in React such as: FormValidation or Google Map.
                      </p>
                      <div class="btn-project"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">Organic Shop</p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">
                        Angular, Firebase, Bootstrap 4
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a href="#" class="btn btn-primary">
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/Oshop"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        An e-commerce application that has implemented both the
                        admin side and the client side. The application
                        contains: CRUD operations, forms with custom validation,
                        searching, sorting and pagination, authentication and
                        authorization and a lot more!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">Shopping List</p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">
                        MongoDB, Node.js, Express.js, React.js, Redux,
                        Reactstrap
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://ralucamavriche.github.io/MERN-Shopping-List-Client/"
                          class="btn btn-primary"
                        >
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/MERN-Shopping-List-Client"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        The application is created with the MERN Stack. I also
                        implemented Redux for state management and some other
                        things like Reactstrap and React Transitions. On the
                        backend side, I added user registration and login with
                        JWT (JSON Web Tokens) in Node/Express.
                      </p>
                      <div class="btn-project"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 ">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">IoT Simulator</p>
                        <div className="card-subtitle mb-2 text-muted">
                          C / C++
                        </div>
                      </div>
                      <p className="card-text">
                        A client application with a graphical interface that
                        acts as a remote for several competing servers. The
                        customer can choose which devices to connect from those
                        available and he can change the status. I used C / C++
                        as a technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">News Web Manager</p>
                        <div className="card-subtitle mb-2 text-muted">
                          PHP, HTML5&CSS3 and JavaScript
                        </div>
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://github.com/andreeavata2/Wews"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        A web application that centralizes daily articles with a
                        suite of news sites. With a REST API, the user can
                        display all items depending on the selected category.
                        The technologies used are PHP, HTML5&CSS3 and
                        JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">ScienceCalc</p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">
                        Android, Java
                      </div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://github.com/ralucamavriche/ScienceCalc-Android"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        It will have support for trigonometric functions and
                        other functions. Also it will support composed
                        expressions (use math library).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="card mb-3">
                    <div
                      className="card-body py-5"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <div className="card-title">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <p className="font-weight-bold">Desing Test </p>
                      </div>
                      <div className="card-subtitle mb-2 text-muted">React</div>
                      <div style={{ margin: "15px" }} class="btn-project">
                        <a
                          href="https://ralucamavriche.github.io/DesignTest/"
                          class="btn btn-primary"
                        >
                          DEMO
                        </a>
                        <a
                          href="https://github.com/ralucamavriche/DesignTest"
                          class="btn btn-primary"
                        >
                          Github
                        </a>
                      </div>
                      <p className="card-text">
                        This application was made during the technical
                        interview. With the help of resources and requirements
                        set by the interviewer, I had to realize the design and
                        functionality of the application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------Experience------------------------------------- */}

          <div className="section" id="experience">
            <div className="container cc-experience">
              <div
                className="h4 text-center mb-4 "
                style={{ fontWeight: "700" }}
              >
                Work Experience
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-danger">
                    <div className="card-body cc-experience-header">
                      <p>10/2017 - 10/2019</p>
                      <div className="h5">
                        Asociația Studenților Informaticieni Ieșeni
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Member</div>
                      <p>
                        Involvement in organizing projects within the
                        association: FII Practic, FIICode, Hackathon; but also
                        in those of the faculty: Google HashCode, Stagii pe
                        bune, Admittance, Ziua Porților Deschise had an
                        important role in the development of social and
                        practical skills.
                      </p>
                      <a href="https://asii.ro/" target="_blank">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-danger">
                    <div className="card-body cc-experience-header">
                      <p>03/2020 - 04/2020</p>
                      <div className="h5">Training Fii Practic</div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Node.js</div>
                      <p>
                        I learned about JavaScript, how to build a REST API, how
                        to secure the API, and how to add authentication to it.
                        I learned to use Express.js as a framework, working with
                        databases (MongoDB) and how to integrate an external
                        service into my API.
                      </p>
                      <a href=" https://fiipractic.asii.ro/" target="_blank">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------Education------------------------------------- */}

          <div className="section">
            <div className="container cc-education">
              <div
                className="h4 text-center mb-4"
                style={{ fontWeight: "700" }}
              >
                {" "}
                Education
              </div>

              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-danger">
                    <div className="card-body cc-education-header">
                      <p>10/2017 - 07/2020</p>
                      <div className="h5">Bachelor's Degree</div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Faculty of Computer Science</div>
                      <p className="category">
                        University of Alexandru Ioan Cuza
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 bg-danger">
                    <div className="card-body cc-education-header">
                      <p>10/2021 - 07/2024</p>
                      <div className="h5">Master Degree </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="h5">Software Development and Business Information Systems, FEAA</div>
                      <p className="category">
                        University of Alexandru Ioan Cuza
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------Contact------------------------------------- */}

          <div className="section" id="contact">
            <div className="cc-contact-information">
              <div className="container">
                <div
                  className="cc-contact"
                  style={{
                    backgroundImage: `url(${contactImg})`,
                    maxWidth: "100%",
                    height: "auto",
                    //  backgroundRepeat: 'no-repeat',
                    backgroundSize: "contain",
                  }}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <div className="card mb-0">
                        <div className="h4 text-center title">Contact Me</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card-body">
                              <p className="mb-0">
                                <strong>Address </strong>
                              </p>
                              <p className="pb-2">Iasi, România</p>
                              <p className="mb-0">
                                <strong>Phone</strong>
                              </p>
                              <p className="pb-2">0743302140</p>
                              <p className="mb-0">
                                <strong>Email</strong>
                              </p>
                              <p>ralucamavriche@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container text-center">
          <a
            className="cc-linkedin btn btn-link"
            href="https://www.linkedin.com/in/gabriela-raluca-mavriche/"
          >
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </i>
          </a>
          <a
            className="cc-github btn btn-link"
            href="https://github.com/ralucamavriche"
          >
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faGithubAlt} size="2x" />
            </i>
          </a>
          <a
            className="cc-instagram btn btn-link"
            href="https://www.instagram.com/ralucamavriche/"
          >
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </i>
          </a>
          <a
            className="cc-facebook btn btn-link"
            href="https://www.facebook.com/ralucamavriche/"
          >
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </i>
          </a>
        </div>
        <div className="h4 title text-center">Mavriche Gabriela-Raluca</div>
        <div className="text-center text-muted">
          <p>@CV App - Personal wesite for resume.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
