import React, { useEffect } from "react";
import image1 from "../assets/images/construction-image4.jpg";
import image2 from "../assets/images/projects1.jpeg";
import image3 from "../assets/images/projects2.jpeg";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 }, []);
  });
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* <div className="w-full h-96" id="image-set">
        <motion.h1
          className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col"
          data-aos="zoom-in"
        >
          <span className="text-3xl text-warning">our{""}</span>
          <span>services</span>
        </motion.h1>
      </div> */}
      <div
        className="grid grid-cols-12 w-full pt-10 md:h-[50vh] h-[50vh]"
        id="image-set"
      >
        <div className="col-span-12">
          <div className="flex flex-col h-full px-5 gap-3">
            <h1
              className="font-monserrat md:text-5xl text-xl font-bold text-green-500 mt-auto"
              data-aos="slide-left"
            >
              Unlock the power of renewable energy <br />
              <span className="text-white font-normal">
                with LuckyLumac's expert Electrical services.
              </span>
              <br />
              <div
                className="w-32 h-3 my-2 bg-warning"
                data-aos="slide-up"
              ></div>
            </h1>
            <p className="md:w-[50vw] font-monserrat text-sm md:text-xl font-normal text-white md:block mb-10"></p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 font-monserrat  w-full">
          <div className="md:col-span-6 col-span-12" data-aos="flip-right">
            <img
              src={image1}
              alt="image-here"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12 md:p-20 p-6 items-start">
            <h1
              className="text-6xl py-5 font-bold uppercase text-green-600"
              data-aos="fade-right"
            >
              <span className="font-light text-orange-500">what we</span> offer
            </h1>
            <div className="flex md:flex-row flex-col md:gap-4 text-white z-50">
              <div
                className="w-92 text-xl flex items-center "
                data-aos="fade-right"
              >
                LuckyLumac offers Electrical and Renewable Energy services, from
                installation and maintenance to design and consulting. We
                prioritize renewable energy sources for a sustainable future. We
                serve residential, commercial, and industrial projects with
                expertise and high-quality results. Choose LuckyLumac for all
                your energy needs and power your future with confidence.
              </div>
              <div
                className="flex items-center justify-center md:mt-0 md:relative -mt-36"
                data-aos="fade-left"
              >
                <span className="w-52 h-52 opacity-10 md:opacity-100 bg-green-700"></span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-10">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-20 bg-gray-200 text-xl p-6 md:p-20 mb-10 shadow-xl">
              {/* <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Energy installation</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    Our construction services encompass a wide range of
                    projects, including commercial, residential, industrial, and
                    infrastructure development. We provide turnkey solutions for
                    all phases of construction, from planning and design to
                    project management and execution. Our team of experts work
                    closely with clients to ensure that their vision is
                    realized, while also taking into account budgetary
                    constraints and timelines. We use the latest technology and
                    equipment to ensure that our projects are completed to the
                    highest quality standards, with a focus on safety and
                    sustainability.
                  </p>
                </div>
              </div> */}
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Electrical Installation</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    We specialize in the design and installation of electrical
                    systems and equipment in buildings, facilities, and
                    industrial sites. Our services include the installation of
                    electrical wiring, lighting systems, power distribution
                    systems, and electrical control systems. We work closely
                    with our clients to understand their specific needs and
                    provide customized solutions that meet their requirements.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Electrical Repair & Maintenance</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    Our team of electricians is equipped to handle any
                    electrical repair needs that may arise, from power outages
                    and circuit overloads to electrical equipment malfunctions.
                    We use advanced diagnostic tools and techniques to quickly
                    identify the source of the problem and provide effective
                    solutions that restore electrical systems to optimal
                    functioning. We also offer maintenance services to ensure
                    the continued safe and efficient operation of electrical
                    systems and equipment. Our maintenance services include
                    routine inspections, testing, and cleaning of electrical
                    systems and equipment to identify and address potential
                    problems before they become major issues.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Power Custom Installation</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    We specialize in custom solar power installations tailored
                    to meet the unique needs and requirements of our clients.
                    Our team of experts works closely with clients to design and
                    implement solar solutions that maximize energy production,
                    reduce costs, and minimize environmental impact. From
                    residential rooftops to large-scale commercial
                    installations, we have the experience and expertise to
                    deliver high-quality, customized solar power solutions.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Equipment Procurement</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    We provide reliable and efficient solar equipment
                    procurement services to clients across various industries.
                    Our team of experts ensures that the solar equipment we
                    procure is of the highest quality and meets the specific
                    needs of our clients. We have established relationships with
                    top manufacturers and suppliers in the industry, allowing us
                    to source solar equipment at competitive prices. Whether
                    it's for a small residential project or a large commercial
                    installation, we are committed to providing our clients with
                    the best solar equipment procurement solutions.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Powered Boreholes</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    Solar Powered Boreholes are water systems that utilize solar
                    energy to pump water from underground sources to the
                    surface. These systems are a reliable and sustainable source
                    of water for communities, farms, and rural areas where
                    access to water is limited or nonexistent. The solar panels
                    used to power the boreholes are designed to convert sunlight
                    into electricity, which is stored in batteries for use when
                    the sun is not shining. This method of pumping water is
                    cost-effective, environmentally friendly, and provides a
                    long-term solution to water scarcity. The installation of
                    solar-powered boreholes has proven to be a game-changer in
                    many areas around the world, providing clean and safe water
                    to communities and reducing their dependence on traditional
                    energy sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-12 gap-5 px-5 my-8">
          <div
            className="md:col-span-6 col-span-12 flex items-center justify-end"
            data-aos="fade-left"
          >
            <img src={image2} alt="" className="h-96 object-cover" />
          </div>
          <div
            className="md:col-span-6 col-span-12 flex items-center justify-start"
            data-aos="fade-left"
          >
            <img src={image3} alt="" className="h-96 " />
          </div>
        </div>
        <div className="w-full flex item-center justify-center">
          <button className="btn btn-lg bg-green-700 ">view gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
