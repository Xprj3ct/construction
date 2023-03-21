import React from 'react'
import "./Electrical.css"

function Electrical() {
  return (
    // <div>
    // <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 200px; height: 200px;">

    // <rect classNameName="fill1 stroke1" x="9" y="9" width="83" height="84" rx="4" fill="#fff" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></rect><path className="fill1 stroke1" d="M23 71C23 69.8954 23.8954 69 25 69H76C77.1046 69 78 69.8954 78 71V75H23V71Z" fill="#fff" stroke-width="2px" style={{animationDuration: "10s"}}></path><path className="fill1 stroke1" d="M78 75V71C78 69.8954 77.1046 69 76 69H25C23.8954 69 23 69.8954 23 71V75M78 75H23M78 75H86V15H15V75H23" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></path><g className="line-3d-printing1-overall fill1 stroke1" style={{animationDuration: "10s"}}><rect className="fill2 stroke2" x="15" y="29" width="71" height="7" fill="#fff" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></rect><g className="line-3d-printing1-tool fill2 stroke2" style={{animationDuration: "10s"}}><path className="fill2 stroke2" d="M59 24C59 23.4477 59.4477 23 60 23H72C72.5523 23 73 23.4477 73 24V42C73 42.5523 72.5523 43 72 43H70H62H60C59.4477 43 59 42.5523 59 42V24Z" fill="#fff" stroke-width="2px" style={{animationDuration: "10s"}}></path><path className="fill2 stroke2" d="M62 43V48H70V43H62Z" fill="#fff" stroke-width="2px" style={{animationDuration: "10s"}}></path><path className="fill2 stroke2" d="M70 48H62L65.1318 53.4806C65.5157 54.1524 66.4843 54.1524 66.8682 53.4806L70 48Z" fill="#fff" stroke-width="2px" style={{animationDuration: "10s"}}></path><path className="fill2 stroke2" d="M62 43H60C59.4477 43 59 42.5523 59 42V24C59 23.4477 59.4477 23 60 23H72C72.5523 23 73 23.4477 73 24V42C73 42.5523 72.5523 43 72 43H70M62 43V48M62 43H70M62 48H70M62 48L65.1318 53.4806C65.5157 54.1524 66.4843 54.1524 66.8682 53.4806L70 48M70 48V43" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></path></g></g><circle className="fill2 stroke2" cx="20" cy="84" r="4" fill="#fff" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></circle><circle className="fill2 stroke2" cx="33" cy="84" r="4" fill="#fff" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></circle><circle className="fill2 stroke2" cx="46" cy="84" r="4" fill="#fff" stroke="#000" stroke-width="2px" style={{animationDuration: "10s"}}></circle></svg>
    // </div>
    <div>
      <div
        className="grid grid-cols-12 w-full pt-10 md:h-[50vh] h-[50vh]"
        id="construction-wrapper"
      >
        <div className="col-span-12">
          <div className="flex flex-col h-full px-5 gap-3">
            <h1 className="font-monserrat md:text-5xl text-4xl font-bold text-green-500 mt-auto">
              Unlock the power of renewable energy <br />
              <span className="text-white font-light">
                with LuckyLumac's expert Electrical services
              </span>
              <br />
              <div className="w-32 h-3 my-2 bg-green-700"></div>
              <div className="w-32 h-3 my-2 bg-warning"></div>
            </h1>
            <p className="md:w-[50vw] font-monserrat text-xl font-normal text-white md:block hidden mb-10">
              LuckyLumac is your trusted provider of Electrical and Renewable
              Energy services. Our team offers a comprehensive range of
              solutions, from installation and maintenance to design and
              consulting. We are committed to harnessing the power of renewable
              energy sources to drive a sustainable future. Whether you require
              services for residential, commercial or industrial projects, we
              have the knowledge and expertise to ensure the highest quality
              results. Choose LuckyLumac for all your Electrical and Renewable
              Energy needs, and power your future with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#050223] text-gray-300 px-5 font-monserrat flex md:hidden">
        LuckyLumac is your trusted provider of Electrical and Renewable Energy
        services. Our team offers a comprehensive range of solutions, from
        installation and maintenance to design and consulting. We are committed
        to harnessing the power of renewable energy sources to drive a
        sustainable future. Whether you require services for residential,
        commercial or industrial projects, we have the knowledge and expertise
        to ensure the highest quality results. Choose LuckyLumac for all your
        Electrical and Renewable Energy needs, and power your future with
        confidence.
      </div>
    </div>
  );
}

export default Electrical