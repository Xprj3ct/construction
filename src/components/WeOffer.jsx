import React, {useEffect} from 'react'
import badge from '../assets/images/pass.png'
import shake from '../assets/images/handshake.png'
import pin from '../assets/images/pin.png'
import tie from '../assets/images/tie.png'
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function WeOffer() {
      useEffect(() => {
        Aos.init({ duration: 2000 }, []);
      });
  return (
    <div>
      <section className="font-monserrat">
        <div className="grid md:grid-cols-12 bg-gray-50">
          <div className="col-span-12 flex flex-col gap-5 md:p-32 p-10">
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
                data-aos="slide-up"
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
                  of life. We are committed to delivering exceptional quality,
                  unparalleled service, and continuous improvement in all our
                  services. Our team of seasoned professionals is dedicated to
                  achieving outstanding outcomes, setting high goals, and taking
                  calculated risks to meet and exceed our clients' expectations.
                  We approach every project with a passion for excellence and a
                  relentless pursuit of the highest standards, ensuring that we
                  always deliver superior solutions that inspire and uplift
                  communities.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md gap-2"
                data-aos="slide-up"
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
                  our clients. Our team is dedicated to understanding and
                  meeting the unique needs of each customer, communicating
                  effectively, and delivering high-quality solutions that exceed
                  expectations. We believe that building trust and fostering
                  long-term relationships with our clients is key to our
                  success. By prioritizing customer satisfaction, we aim to
                  create positive experiences and achieve outstanding outcomes
                  that inspire confidence and loyalty in our services.
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-2 ">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="slide-up"
              >
                <img src={pin} alt="pin" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  quick delivery
                </h1>
                <p className="md:text-left text-center">
                  A top priority at LuckyLumac, where we
                  understand the importance of timely delivery in meeting our
                  clients' needs. We are committed to efficient processes,
                  effective communication, and adaptability to ensure that our
                  clients receive their products and services promptly and in
                  excellent condition. With our focus on quick delivery, we
                  strive to provide a seamless and hassle-free experience for
                  our clients, building lasting relationships and driving
                  business growth.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="slide-up"
              >
                <img src={tie} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  time management
                </h1>
                <p className="md:text-left text-center">
                  A key aspect of LuckyLumac's approach to
                  providing exceptional service to our clients. We recognize
                  that effective time management is critical in ensuring the
                  timely completion of projects, meeting deadlines, and
                  maximizing efficiency. Our team is committed to
                  leveraging time management techniques, tools, and resources to
                  optimize our workflow and ensure that we deliver quality
                  services within the agreed-upon timeline. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeOffer