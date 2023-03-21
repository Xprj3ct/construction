import React, { useEffect } from 'react'
import image1 from "../assets/gallery/project-image -1.jpg";
import image2 from "../assets/gallery/project-image -2.jpg";
import image3 from "../assets/gallery/project-image -3.jpg";
import image4 from "../assets/gallery/project-image -4.jpg";
import image5 from "../assets/gallery/project-image -5.jpg";
import image6 from "../assets/gallery/project-image -6.jpg";
import image7 from "../assets/gallery/project-image -7.jpg";
import image8 from "../assets/gallery/project-image -8.jpg";
import image9 from "../assets/gallery/project-image -9.jpg";
import image10 from "../assets/gallery/project-image -10.jpg";
import image11 from "../assets/gallery/project-image -11.jpg";
import image12 from "../assets/gallery/project-image -12.jpg";
import image13 from "../assets/gallery/project-image -13.jpg";
import image14 from "../assets/gallery/project-image -14.jpg";
import image15 from "../assets/gallery/project-image -15.jpg";
import image16 from "../assets/gallery/project-image -16.jpg";
import image17 from "../assets/gallery/project-image -17.jpg";
import image18 from "../assets/gallery/project-image -18.jpg";
import image19 from "../assets/gallery/project-image -19.jpg";
import image20 from "../assets/gallery/project-image -20.jpg";
import image21 from "../assets/gallery/project-image -21.jpg";
import image22 from "../assets/gallery/project-image -22.jpg";
import image23 from "../assets/gallery/project-image -23.jpg";
import image24 from "../assets/gallery/project-image -24.jpg";
import image25 from "../assets/gallery/project-image -25.jpg";
import image26 from "../assets/gallery/project-image -26.jpg";
import image27 from "../assets/gallery/project-image -27.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function Projects() {

    useEffect(() => {
      Aos.init({ duration: 2000 }, []);
    });

  return (
    <div className="md:mt-36 mt-16 font-monserrat">
      <div className="col-span-12 md:mt-11 mt-11 bg-slate-900 text-white">
        <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 text-xl p-6 md:p-20 mb-10">
          <div className="text-lg font-semibold md:text-3xl">
            <p>
              Over the years we are know for offering a satisfactory, exceptional,
              quality service and uncompromising integrity in all our civil engineering
              and electrical services
            </p>
          </div>
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl bg-slate-900 font-semibold uppercase flex flex-col justify-between items-start py-10">
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
                  <li className="border-b py-2" data-aos="flip-left">
                    Relyant Global
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Central Asia Development Group (CADG)
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Federal Ministry of Water Resources
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Federal University of Petroleum Resources Effurun
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Federal Fire Service
                  </li>
                  <li className="border-b py-2">
                    Niger Delta Development Commission
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Edo state Government
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Delta state Government
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Energy commission of Nigeria
                  </li>
                  <li className="py-2" data-aos="flip-left">
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
      <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        <img src={image2} alt="project-image-1" data-aos="zoom-in" />
        <img src={image3} alt="project-image-1" data-aos="zoom-in" />
        <img src={image4} alt="project-image-1" data-aos="zoom-in" />
        <img src={image5} alt="project-image-1" data-aos="zoom-in" />
        <img src={image6} alt="project-image-1" data-aos="zoom-in" />
        <img src={image7} alt="project-image-1" data-aos="zoom-in" />
        <img src={image8} alt="project-image-1" data-aos="zoom-in" />
        <img src={image9} alt="project-image-1" data-aos="zoom-in" />
        <img src={image10} alt="project-image-1" data-aos="zoom-in" />
        <img src={image11} alt="project-image-1" data-aos="zoom-in" />
        <img src={image12} alt="project-image-1" data-aos="zoom-in" />
        <img src={image13} alt="project-image-1" data-aos="zoom-in" />
        <img src={image14} alt="project-image-1" data-aos="zoom-in" />
        <img src={image15} alt="project-image-1" data-aos="zoom-in" />
        <img src={image16} alt="project-image-1" data-aos="zoom-in" />
        <img src={image17} alt="project-image-1" data-aos="zoom-in" />
        <img src={image18} alt="project-image-1" data-aos="zoom-in" />
        <img src={image19} alt="project-image-1" data-aos="zoom-in" />
        <img src={image20} alt="project-image-1" data-aos="zoom-in" />
        <img src={image21} alt="project-image-1" data-aos="zoom-in" />
        <img src={image22} alt="project-image-1" data-aos="zoom-in" />
        <img src={image23} alt="project-image-1" data-aos="zoom-in" />
        <img src={image24} alt="project-image-1" data-aos="zoom-in" />
        <img src={image25} alt="project-image-1" data-aos="zoom-in" />
        <img src={image26} alt="project-image-1" data-aos="zoom-in" />
        <img src={image27} alt="project-image-1" data-aos="zoom-in" />
      </div>
    </div>
  );
}

export default Projects