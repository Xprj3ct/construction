import React, { useEffect } from 'react'
import construction1 from "../assets/images/construction-image.jpg";
import construction2 from "../assets/images/construction-image3.jpg";
import construction3 from "../assets/images/construction-image5.jpg";
import image1 from "../assets/images/project-image-1.jpeg";
import image2 from "../assets/images/project-image-2.jpg";
import image3 from "../assets/images/project-image-3.jpg";
import image4 from "../assets/images/project-image-4.jpeg";
import image5 from "../assets/images/project-image-5.jpeg";
import image6 from "../assets/images/project-image-6.jpeg";
import image7 from "../assets/images/project-image-7.jpg";
import image8 from "../assets/images/project-image-8.jpeg";
import construction from "../assets/gallery/project-image -10.jpg";
import electrical from "../assets/gallery/project-image -18.jpg";
import TypeWriterEffect from 'react-typewriter-effect';
import '../pages/timeline.css'
import { Link, NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'
import badge from "../assets/images/pass.png";
import shake from "../assets/images/handshake.png";
import pin from "../assets/images/pin.png";
import tie from "../assets/images/tie.png";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {

  useEffect (() => {
    Aos.init({ duration: 2000}, []);
  })
  return (
    <div className="font-monserrat overflow-x-hidden">
      <section>
        <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <div className="col-span-12 lg:col-span-6" data-aos="flip-up">
            <div className="w-full lg:h-[700px] h-[200px]" id="image-div">
              <img
                src={construction1}
                alt="construction-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 lg:pt-0"
            data-aos="flip-down"
          >
            <div className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-[2rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-20 ">
                <span className="text-green-600">
                  Unleashing excellence through
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3F3D56",
                      fontWeight: 800,
                      display: "block",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={["COMMITMENT.", "Quality.", "Innovation."]}
                    multiTextDelay={2000}
                    typeSpeed={200}
                  />
                </span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
                LuckyLumac is a Pioneering company that leads the way in
                providing innovative and sustainable solutions in the civil
                engineering and electrical services industry. With a team of
                experienced professionals and a dedication to customer
                satisfaction, LuckyLumac delivers exceptional quality and
                efficiency in every project, big or small. Whether it's
                designing and constructing buildings or providing renewable
                energy solutions, LuckyLumac is committed to unleashing
                excellence through innovation.
              </p>
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black">
                  Learn more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
          <div
            className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full"
            data-aos="fade-left"
          >
            <motion.h1
              initial={{ x: -250 }}
              animate={{ x: 0, y: -10 }}
              className="text-gray-500 uppercase text-[2.3rem] md:text-[2.5rem] text-muted py-1"
            >
              <span className="text-warning font-bold uppercase">
                Empowering progress
              </span>{" "}
              with modern power and construction solutions.
            </motion.h1>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold"
            >
              We are committed to delivering innovative and sustainable
              solutions that empower progress and drive positive change in
              communities across Nigeria. At LuckyLumac, we believe that modern
              solutions and technical expertise can unlock incredible potential
              and help transform the future of our communities.
            </motion.p>
          </div>
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            data-aos="fade-up"
          >
            <img
              src={construction2}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            id="escape"
          >
            <img
              src={construction3}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="lg:col-span-6 col-span-12 flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full"
            data-aos="fade-up"
          >
            <h1 className="text-green-600 uppercase text-[2.5rem] py-1">
              <span className="text-muted font-bold">
                we have earned our expertise{" "}
              </span>
              over our years of operation
            </h1>
            <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl text-muted lg:pb-0 md:pb-32">
              In the fields of power and construction engineering for more than
              three decades of successful operation in Nigeria's competitive
              market. The company's unwavering commitment to excellence,
              innovative solutions, and customer satisfaction has enabled it to
              establish a reputation as a premier provider of sustainable
              solutions in the country.
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-white">
                  Learn more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-12 bg-gray-50 overflow-x-hidden">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-5 md:p-32 p-10">
            <h1
              className="uppercase md:text-5xl text-xl text-center md:text-left tracking-wider text-green-600 font-bold"
              data-aos="flip-left"
            >
              what we've stood for over{" "}
              <span className="font-normal text-warning">the years.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 gap-2 shadow-md"
                data-aos="fade-left"
              >
                <img src={badge} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  Excellence
                </h1>
                <p className="md:text-left text-center">
                  At Luckylumac, excellence is not just a standard, it's a way
                  of life. We are committed to delivering exceptional qua....
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md gap-2"
                data-aos="fade-right"
              >
                <img src={shake} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500  md:text-left text-center text-xl tracking-wider"
                  data-aos="flip-left"
                >
                  customer satisfaction
                </h1>
                <p className="md:text-left text-center">
                  We strive to provide exceptional service and value to all of
                  our clients. Our team is dedicated to underst....
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-2 ">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="fade-left"
              >
                <img src={pin} alt="pin" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  quick delivery
                </h1>
                <p className="md:text-left text-center">
                  A top priority at LuckyLumac, where we understand the
                  importance of timely delivery in meeting our clients needs....
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="fade-right"
              >
                <img src={tie} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  time management
                </h1>
                <p className="md:text-left text-center">
                  A key aspect of LuckyLumac's approach to providing exceptional
                  service to our clients. We recognize that effect....
                </p>
              </div>
            </div>

            <div className="w-full items-center flex justify-center">
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-success flex flex-row justify-center items-center gap-3 my-4 text-white">
                  know more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 bg-white md:p-32 p-10 h-full ">
            <div className="flex flex-col h-full ">
              <h1 className="uppercase md:text-5xl text-xl tracking-wider text-gray-600 font-bold"></h1>

              <div className="w-full h-full">
                <div
                  className="flex gap-4 flex-col items-center justify-center w-full h-full "
                  data-aos="flip-left"
                >
                  <span className="md:text-[16rem] text-[18rem] m-0 font-bold text-gray-200">
                    "
                  </span>
                  <div className="md:text-6xl md:-mt-48 -mt-64 text-gray-400 font-bold text-center">
                    We have developed a way to reduce cost by removing the need
                    for a middle man when getting our solar products.
                  </div>
                  <span className="font-normal md:text-6xl text-center flex items-center justify-center text-green-600 tracking-[25px]">
                    {" "}
                    Samuel
                  </span>
                  <div
                    className="md:text-6xl md:my-20  text-gray-600"
                    data-aos="fade-down"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:w-20 w-16 h-16 md:h-20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-6">
        <div className="flex flex-col md:justify-center md:items-center w-full my-8">
          <h1 className="flex flex-col md:items-center font-bold text-warning uppercase text-[2.5rem] ">
            <span className="text-3xl">services</span>
            <span className="text-green-600 md:text-[4rem] m-0">we offer</span>
          </h1>
          <span className="w-16 h-4 bg-warning relative rounded-full"></span>
          {/* <div>
            <div className="main font-monserrat my-10 px-4">
              <h3 className="heading">Here's what we do</h3>

              <div className="container">
                <ul>
                  <li>
                    <h3 className="title font-semibold">
                      {" "}
                      We are Experts in Construction and Electrical services
                    </h3>
                    <p>
                      Our team of skilled craftsmen and licensed electricians
                      work together to deliver exceptional results that exceed
                      our clients' expectations. With a commitment to excellence
                      and innovation, we strive to set a new standard in the
                      construction and electrical services industry.
                    </p>
                    <a href="Services">Read More </a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Power Custom Installation
                    </h3>
                    <p>
                      From residential rooftops to large-scale commercial
                      installations, we have the experience and expertise to
                      deliver high-quality, customized solar power solutions.
                    </p>
                    <a href="/Services">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Equipment Procurement
                    </h3>
                    <p>
                      Whether it's for a small residential project or a large
                      commercial installation, we are committed to providing our
                      clients with the best solar equipment procurement
                      solutions.
                    </p>
                    <a href="services">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Powered Boreholes
                    </h3>
                    <p>
                      The installation of solar-powered boreholes has proven to
                      be a game-changer in many areas around the world,
                      providing clean and safe water to communities and reducing
                      their dependence on traditional energy sources.
                    </p>
                    <a href="Services">Read More </a>
                    <span className="circle"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
              <div className="md:w-[50%] md:mb-0 mb-16" data-aos="slide-right">
                <h1 className="text-md md:text-2xl font-semibold text-green-600">
                  We offer various services such as:
                </h1>
                <h1 className="md:text-6xl text-3xl py-2 font-bold">
                  Construction (Civil Engineering) Services
                </h1>
                <p className="md:text-xl">
                  Luckylumac offers top-tier civil engineering and construction
                  services. Our experienced team specializes in site analysis,
                  project management, and custom solutions to meet our clients'
                  needs. We prioritize safety, attention to detail, and timely
                  delivery within budget. Trust Luckylumac as your partner for
                  successful projects that bring your vision to life.
                </p>
                <div className="flex flex-col w-full">
                  <div>
                    <ul className="list-disc font-bold py-3 mask1">
                      <li>
                        Design and construction of buildings and structures
                      </li>
                      <li>Transportation infrastructure</li>
                      <li>Structural engineering</li>
                      <li>Urban planning and development</li>
                      <li>Geotechnical engineering</li>
                    </ul>
                  </div>
                  <div data-aos="flip-up">
                    <NavLink to="/construction">
                      <button className="btn hover:shadow-lg hover:bg-warning hover:text-green-600 lg:btn-lg flex flex-row justify-center items-center gap-3 my-4 text-white uppercase bg-none">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                        know more
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div data-aos="slide-left">
                <img src={construction} alt="" className="h-[50%] mask1" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-1 justify-center items-center md:mb-0 mb-16">
              <div data-aos="slide-right">
                <img src={electrical} alt="" className="h-[50%] mask1" />
              </div>
              <div className="md:w-[50%] pl-4" data-aos="slide-left">
                <h1 className="text-md md:text-2xl  font-semibold text-green-600">
                  We Also offer:
                </h1>
                <h1 className="md:text-6xl text-3xl py-2 font-bold ">
                  Electrical (Renewable Energy) Engineering Services
                </h1>
                <p className="md:text-xl">
                  LuckyLumac offers Electrical and Renewable Energy services,
                  from installation and maintenance to design and consulting. We
                  prioritize renewable energy sources for a sustainable future.
                  We serve residential, commercial, and industrial projects with
                  expertise and high-quality results. Choose LuckyLumac for all
                  your energy needs and power your future with confidence.
                </p>
                <div className="flex flex-col w-full">
                  <div>
                    <ul className="list-disc font-bold py-3 mask1">
                      <li>
                        Electrical installation 
                      </li>
                      <li>Electrical repair & maintenance</li>
                      <li>Solar power custom installation</li>
                      <li>Solar equipment procurement</li>
                      <li>Solar powered boreholes</li>
                    </ul>
                  </div>
                  <div data-aos="flip-up">
                    <NavLink to="/services">
                      <button className="btn hover:shadow-lg hover:bg-warning hover:text-green-600 lg:btn-lg flex flex-row justify-center items-center gap-3 my-4 text-white uppercase bg-none">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                        know more
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-6 w-full">
        <div className="md:mt-36 mt-10 w-full">
          <div className="md:mt-11 w-full">
            <div className="flex mx-auto flex-col items-center w-full justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div
                  className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10"
                  data-aos="flip-left"
                >
                  <span>Some of</span>
                  <span className="font-bold md:text-5xl text-xl text-warning">
                    Our Clients Since 1991
                  </span>
                  <span className="w-11 h-3 ml-10 bg-green-700"></span>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center">
                    <ul className="steps steps-vertical text-white">
                      <li data-content="" className="step step-gray"></li>
                      <li data-content="" className="step step-gray"></li>
                      <li data-content="" className="step step-warning"></li>
                      <li data-content="" className="step step-warning"></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-lg md:text-xl">
                      <li className="border-b py-2" data-aos="fade-in">
                        Relyant Global
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        {" "}
                        Central Asia Development Group (CADG)
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Federal Ministry of Water Resources
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        {" "}
                        Federal University of Petroleum Resources Effurun
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Federal Fire Service
                      </li>
                      <li className="border-b py-2">
                        Niger Delta Development Commission
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Edo state Government
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Delta state Government
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Energy commission of Nigeria
                      </li>
                      <li className="py-2" data-aos="fade-in">
                        {" "}
                        Rural Water Supply and Sanitation Agency, RUWASA, Delta
                        State
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Testimonials</span>
          </h1>
          <span className="w-16 h-4 bg-green-600 relative rounded-full"></span>
        </div> */}
      </section>

      <section className="flex flex-col px-6">
        <div className="flex md:justify-center md:items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Recent </span>
            <span className="font-thin text-black"> projects</span>
          </h1>
        </div>
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
          <img src={image1} alt="project-image-1" data-aos="zoom-in" />
          <img src={image2} alt="project-image-1" data-aos="zoom-in" />
          <img src={image3} alt="project-image-1" data-aos="zoom-in" />
          <img src={image4} alt="project-image-1" data-aos="zoom-in" />
          <img src={image5} alt="project-image-1" data-aos="zoom-in" />
          <img src={image6} alt="project-image-1" data-aos="zoom-in" />
          <img src={image7} alt="project-image-1" data-aos="zoom-in" />
          <img src={image8} alt="project-image-1" data-aos="zoom-in" />
        </div>

        <div
          className="w-full flex items-center justify-center mb-12"
          data-aos="flip-up"
        >
          <NavLink to="/projects">
            <button className="btn btn-lg btn-success text-white">
              see gallery{" "}
            </button>
          </NavLink>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center w-full bg-slate-900 py-20 px-10">
          <h1 className="text-4xl   text-center uppercase font-bold flex flex-col md:flex-row gap-2">
            <span className="text-green-600" data-aos="slide-in">
              so what are you
            </span>{" "}
            <span className="text-white" data-aos="slide-in">
              {" "}
              waiting for?
            </span>
          </h1>

          <div
            className="w-full flex items-center justify-center my-10"
            data-aos="flip-up"
          >
            <NavLink to="/contact">
              <button className="btn btn-lg flex flex-row gap-2 btn-success text-white">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span>send us a message</span>
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home