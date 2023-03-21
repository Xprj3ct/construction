import React, { useEffect } from "react";
import construction1 from "../assets/images/construction-image-null.jpg";
import icon1 from "../assets/images/ico1.png";
import icon2 from "../assets/images/ico3.png";
import icon3 from "../assets/images/ico2.png";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from 'framer-motion'
import { IoMdArrowDropdown } from 'react-icons/io'
import WeOffer from "../components/WeOffer";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
      Aos.init({ duration: 2000 }, []);
    });

  return (
    <div className="overflow-x-hidden">
      <div className="grid w-full grid-cols-12 h-full mb-10 overflow-x-hidden ">
        <div className="col-span-12 w-full h-96 " id="image-set">
          <motion.h1
            className="flex text-white font-monserrat md:text-5xl uppercase font-semibold md:items-center items-center md:justify-center md:mt-0 mt-12 h-full w-full text-center flex-col"
            data-aos="slide-in"
          >
            <span className="text-3xl">Here's{""}</span>
            <span>who we are</span>
            <IoMdArrowDropdown className="text-2xl text-warning" />
          </motion.h1>
          <div></div>
        </div>
        <div className="col-span-12 md:-mt-[7%] -mt-[30%] md:w-[80%] mx-auto bg-white shadow-xl">
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-6 col-span-12 md:p-20 p-6">
              <h1 className="md:text-4xl text-xl py-5 font-bold uppercase text-green-600">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(22 163 74)",
                    fontWeight: 700,
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="rgb(22 163 74)"
                  multiText={[
                    "Discover Our Story: Passion, Precision, and Perseverance in Every Project",
                  ]}
                  multiTextDelay={2000}
                  typeSpeed={60}
                />
              </h1>
              <p className="text-lg" data-aos="fade-in">
                we are dedicated to being at the forefront of the civil
                engineering and electrical services industry in Nigeria. We
                strive to set the pace by delivering exceptional quality,
                uncompromising integrity, and unparalleled resourcefulness to
                our clients. Our mission is to enhance the value we offer by
                continually elevating the standards of our service delivery. We
                achieve this through a relentless focus on continuous
                improvement and by delivering value-added services that meet and
                exceed our clients' expectations.
              </p>
            </div>
            <div
              className="md:col-span-6 col-span-12 p-6"
              data-aos="slide-left"
            >
              <img src={construction1} alt="construction image" />
            </div>
          </div>
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-3 col-span-12 p-6 md:w-[50px] md:h-80">
              {/* <img src={construction1} alt="dummy" /> */}
            </div>
            <div className="md:col-span-9 bg-gray-800 col-span-12 md:p-20 p-6">
              <h1
                className="text-6xl py-5 font-bold uppercase text-green-600"
                data-aos="zoom-in"
              >
                <span className="font-light text-warning">Vision &</span>{" "}
                mission
              </h1>
              <div className="flex md:flex-row flex-col md:gap-4 text-white">
                <div>
                  As a prominent player in Nigeria's thriving renewable energy
                  sector, we have established ourselves as a premier provider of
                  sustainable solutions since our inception in 1991. Our mission
                  is to provide comprehensive and sustainable civil engineering
                  and electrical solutions to businesses, SMEs, and government
                  sites in Nigeria. We are committed to delivering high-quality
                  solutions that meet the unique needs of our clients while
                  reducing their carbon footprint and operating costs. Our team
                  of expert engineers and electricians works closely with our
                  clients to ensure the safe and efficient operation of their
                  electrical systems and the successful completion of their
                  civil engineering projects. We are dedicated to forging
                  long-lasting partnerships with our clients and contributing to
                  the development of a sustainable future for Nigeria.
                </div>
                <div>
                  LuckyLumac's vision is to be a premier provider of sustainable
                  civil engineering and electrical solutions in Nigeria,
                  delivering customized and innovative solutions that inspire
                  and uplift communities while reducing their carbon footprint.
                  We strive to forge long-lasting partnerships with our clients
                  and collaborate with prominent brands in the industry to
                  provide unrivaled financial savings and renewable energy
                  solutions across the country. Our team of seasoned
                  professionals is committed to excellence, safety, and
                  delivering solutions that meet the unique needs of our
                  clients.
                </div>
              </div>
            </div>
          </div>

          <div>
            <WeOffer />
          </div>
        </div>
      </div>

      <div className="w-full font-monserrat">
        <div className="flex flex-col items-center text-center mt-10 py-20 bg-slate-700 w-full">
          <h1
            className="uppercase text-4xl text-warning py-5 font-semibold"
            data-aos="slide-right"
          >
            KNOW more about our company
          </h1>
          <p className="text-white md:px-60" data-aos="slide-left">
            LuckyLumac is a dynamic and innovative company that has been leading
            the way in sustainable solutions in Nigeria since 1991. Our team is committed to delivering
            exceptional quality and uncompromising integrity in all our civil
            engineering and electrical services. We specialize in the design and
            construction of buildings and structures, transportation
            infrastructure, structural engineering, urban planning and
            development, and geotechnical engineering. Our services are tailored
            to meet the unique needs of our clients, from SMEs to large
            corporations and government agencies. At LuckyLumac, we believe that
            sustainable solutions are essential for the future of Nigeria.
            That's why we are dedicated to providing cutting-edge solutions,
            such as rooftop solar panels, innovative battery storage systems,
            and state-of-the-art solar carports, to transform businesses and
            communities into vibrant ecosystems of renewable energy. Our team of
            seasoned professionals is committed to excellence, safety, and
            delivering services that exceed our clients' expectations. We are
            proud to collaborate with some of the most prominent brands in the
            industry, enabling us to provide our clients with unrivaled
            financial savings and renewable energy across the country. We are
            passionate about forging long-lasting partnerships with our clients
            and contributing to the development of a sustainable future for
            Nigeria. At LuckyLumac, we are committed to harnessing the power of
            engineering and technology to drive progress and inspire positive
            change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
