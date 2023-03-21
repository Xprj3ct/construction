import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/images/construction-image-null.jpg";
import image2 from "../assets/images/projects1.jpeg";
import image3 from "../assets/images/projects2.jpeg";
import { BsArrowDownSquareFill } from "react-icons/bs";


function Construction() {
  useEffect(() => {
    Aos.init({ duration: 2000 }, []);
  });

  return (
    <div className="overflow-x-hidden">
      <div
        className="grid grid-cols-12 w-full pt-10 md:h-[50vh] h-[50vh]"
        id="construction-wrapper"
      >
        <div className="col-span-12">
          <div className="flex flex-col h-full px-5 gap-3">
            <h1
              className="font-monserrat md:text-5xl text-xl font-bold text-green-500 mt-auto"
              data-aos="slide-left"
            >
              Your partner for successful <br />
              <span className="text-white font-normal">
                Civil Engineering and Construction projects.
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
                Luckylumac offers top-tier civil engineering and construction
                services. Our experienced team specializes in site analysis,
                project management, and custom solutions to meet our clients'
                needs. We prioritize safety, attention to detail, and timely
                delivery within budget. Trust Luckylumac as your partner for
                successful projects that bring your vision to life.
                <div
                  className="flex items-center justify-center md:mt-0 md:relative -mt-36"
                  data-aos="fade-left"
                >
                  <span className="w-52 h-52 opacity-10 md:opacity-100 bg-green-700"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-10">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-20 bg-gray-200 text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Construction</span>
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
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>
                    Design and construction of buildings and structures
                  </span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    At Luckylumac, we understand that every building or
                    structure project is unique, which is why we offer
                    customized design solutions that meet the specific needs of
                    our clients. We take pride in our attention to detail,
                    ensuring that every element of the design is carefully
                    considered and that the final result is both functional and
                    visually appealing. Our construction team is comprised of
                    skilled and experienced professionals who are dedicated to
                    delivering high-quality workmanship. We use the latest
                    technology and equipment to ensure that every project is
                    completed efficiently and to the highest standards of
                    quality. Whether you are looking to build a new home, a
                    commercial building, or an industrial facility, Luckylumac
                    has the expertise and resources to bring your project to
                    life. We are committed to providing exceptional service, and
                    we strive to exceed our clients' expectations on every
                    project we undertake.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Transportation infrastructure</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    Effective transportation infrastructure is essential for
                    economic growth and development, as it enables the efficient
                    movement of goods and people, facilitating trade, commerce,
                    and tourism. It also plays a crucial role in improving
                    access to education, healthcare, and other essential
                    services. Transportation infrastructure design and
                    development require specialized knowledge and expertise,
                    including traffic analysis, engineering, and planning. At
                    Luckylumac, we offer a comprehensive range of transportation
                    infrastructure services. Our team of experts has the
                    knowledge and experience necessary to ensure that
                    transportation infrastructure projects are completed
                    efficiently, safely, and within budget. We work closely with
                    our clients to understand their unique needs and provide
                    customized solutions that meet their objectives. Trust us to
                    provide high-quality transportation infrastructure services
                    that support economic growth and improve quality of life.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Structural engineering</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    This field focuses on the design and analysis of structures
                    such as buildings, bridges, and other infrastructure. We use
                    state-of-the-art technology and advanced engineering
                    principles to develop efficient and effective structural
                    designs that meet the specific needs of our clients. We work
                    closely with our clients to understand their objectives and
                    provide customized solutions that balance safety,
                    cost-effectiveness, and functionality. Our services include
                    structural analysis, design, and evaluation of new and
                    existing structures, as well as seismic and wind
                    engineering. Trust Luckylumac to provide high-quality
                    structural engineering services that are safe, reliable, and
                    cost-effective. Our team of experts is dedicated to ensuring
                    that every project is completed to the highest standards of
                    quality and safety, delivering outstanding results that meet
                    our clients' needs and exceed their expectations.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Urban planning and development</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    Our team of urban planners and developers has extensive
                    experience in creating comprehensive plans and strategies
                    for communities of all sizes. We work with government
                    agencies, private developers, and community groups to create
                    plans that are tailored to the unique needs and goals of
                    each community. Our services include land use planning,
                    transportation planning, environmental planning, economic
                    development, and community engagement. We use the latest
                    technology and tools to analyze data, forecast trends, and
                    model scenarios, enabling us to provide our clients with
                    innovative and effective solutions that promote
                    sustainability, livability, and economic growth. We are
                    committed to working collaboratively with our clients and
                    stakeholders to ensure that our plans and strategies are
                    inclusive and reflect the needs and desires of the
                    community.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Geotechnical engineering</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-normal md:text-lg text-sm">
                    At Luckylumac, our team of geotechnical engineers has
                    extensive experience in providing solutions to complex
                    engineering challenges related to soil and rock mechanics.
                    We use state-of-the-art technology and advanced analytical
                    tools to understand the behavior of the earth's materials
                    and design structures that can withstand the forces they
                    impose. Our services include site investigation, soil
                    testing, geotechnical analysis, foundation design, and slope
                    stabilization. We work closely with our clients to develop
                    customized solutions that meet their specific needs,
                    ensuring that their projects are safe, reliable, and
                    efficient. Whether you are planning a new construction
                    project or need to evaluate the stability of existing
                    structures, Luckylumac can provide you with high-quality
                    geotechnical engineering services that meet the highest
                    standards of quality and safety. Trust our team of experts
                    to deliver innovative and cost-effective solutions that
                    ensure the success of your project.
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

export default Construction