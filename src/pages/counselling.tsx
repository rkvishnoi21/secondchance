import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Assuming React Router is used
import './index.css'; // You might want to put your global styles or Tailwind configurations here

function HomePage() {
  return (
    <div className="font-sans"> {/* Base font for the whole page */}

      {/* Main Hero Section */}
      <section id="main_hero" className="pt-2.5" style={{ paddingTop: '10px' }}> {/* Tailwind: pt-2.5 (approx. 10px), inline style for original value */}
        <div className="container mx-auto"> {/* Tailwind: mx-auto for horizontal centering */}
          <div className="lg:w-12/12 md:w-12/12 sm:w-12/12 w-full"> {/* Tailwind: Responsive widths */}
            <div className="flex justify-center"> {/* Tailwind: flex and justify-center to center content */}
              <div className="lg:w-6/12 md:w-6/12 sm:w-12/12 w-full"> {/* Tailwind: Responsive widths */}
                <div className="slider-content text-center"> {/* Tailwind: text-center to center text */}

                  <div id="mobile_banner">
                    <a onClick={() => { /* You'd need to define gtag_report_conversion or remove if not needed */ }} href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID">
                      <img src="images/1.jpg" style={{ maxWidth: '300px' }} alt="" /> {/* Inline style for maxWidth */}
                    </a>
                  </div>

                  <h2 className=" text-white text-[55px] lg:text-[100px] font-extrabold leading-[1.4em] lg:leading-[0.9] mb-3 lg:mb-3.5 tracking-[-3px] uppercase lg:capitalize rounded-[30px] py-2.5 px-2.5 lg:p-2.5 font-math" style={{ animationDelay: '0.4s' }}> {/* Tailwind classes for typography, spacing, etc. + inline style for animationDelay */}
                    Daily <span>Fantasy Sport</span>
                  </h2>
                  <p className="text-gray-300 lg:text-gray-200 font-semibold lg:font-normal mt-0 mb-11 lg:mb-10 mx-0 lg:mx-auto text-base lg:text-lg leading-[1.6] lg:leading-[30px]" style={{ animationDelay: '0.6s' }}> {/* Tailwind classes for text color, font, spacing, etc. + inline style for animationDelay */}
                    Your trusted partner for daily fantasy sports solutions! Our platform offers a secure, compliant method for verifying player identities, creating a seamless and enjoyable experience for all users.
                  </p>
                  <div className="button-box container flex justify-center"> {/* Tailwind: flex and justify-center to center button */}
                    <a onClick={() => { /* You'd need to define gtag_report_conversion or remove if not needed */ }} href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID" className="button"> {/* Tailwind: Flex and justify-center to center content */}
                      <p className="title text-base lg:text-xl font-math text-gray-900 !important mx-auto my-0">Register Now</p> {/* Tailwind classes for typography, color, spacing, important to override default style */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Main Section */}
      <section id="second_main" className="text-center py-16 bg-black bg-blend-multiply" style={{ backgroundColor: '#000400', backgroundBlendMode: 'multiply', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> {/* Tailwind: py-16 (padding top and bottom), bg-black, bg-blend-multiply + inline styles for background */}
        <div className="container mx-auto"> {/* Tailwind: mx-auto for horizontal centering */}
          <div className="flex justify-center"> {/* Tailwind: flex and justify-center to center content */}
            <div className="lg:w-6/12 md:w-6/12 sm:w-12/12 w-full" style={{ margin: 'auto' }}> {/* Tailwind: Responsive widths + inline style for margin: auto */}
              <img src="images/412.jpg" className="w-full" alt="" /> {/* Tailwind: w-full to make image responsive */}
              <br />
              <div className="section-title title-style-three white-title">
                <h2 className="text-yellow-200 lg:text-yellow-300 uppercase text-[36px] lg:text-[45px] font-extrabold mb-2.5 lg:mb-0 leading-[1.4em] tracking-[-2px] font-math"> {/* Tailwind classes for typography, color, spacing, etc. */}
                  Get Your Online Account Today!
                </h2>
                <p className="text-white mb-0">Experience secure and reliable online account services with a trusted provider.</p> {/* Tailwind classes for text color and spacing */}
                <h4 className="text-yellow-400 pt-7 text-xl lg:text-2xl" style={{ paddingTop: '28px', color: '#ffa700' }}> {/* Tailwind classes for text color, padding-top and inline style for original color */}
                  Open your account quickly and join our platform for genuine, trusted account solutions.
                </h4>
                <br />
              </div>
              <div className="button-box container flex justify-center"> {/* Tailwind: flex and justify-center to center button */}
                <a onClick={() => { /* You'd need to define gtag_report_conversion or remove if not needed */ }} href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID" className="button">
                  <p className="title text-base lg:text-xl font-math text-gray-900 !important mx-auto my-0">WhatsApp Now</p> {/* Tailwind classes for typography, color, spacing, important to override default style */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-5 bg-black" style={{ backgroundColor: '#000400', boxShadow: 'rgba(255, 255, 255, 0.50) 0px 6px 6px ,rgba(255, 255, 255, 0.30) 0px 10px 20px', marginBottom: '70px' }}> {/* Tailwind: py-5 (padding top and bottom), bg-black + inline styles for background and margin */}
        <div className="container mx-auto"> {/* Tailwind: mx-auto for horizontal centering */}
          <div>
            <p className="text-center text-white"><strong>Disclaimer:-</strong>  This Website is only for 18+ users. Please Leave This Site If you are from Telangana, Orissa, Assam, Sikkim, Andhra Pradesh and Nagaland. Be aware of fraudsters, we only deal via WhatsApp.</p> {/* Tailwind classes for text alignment and color */}
            <br />
            <Link to="/privacy-policy" className="block text-center text-blue-500 hover:underline">Privacy Policy</Link> {/* Tailwind classes for text alignment, color and hover effect. Assuming React Router <Link> is used */}
            <br />
            <p className="text-center text-white">We Only Promote Fantasy Sports.</p> {/* Tailwind classes for text alignment and color */}
          </div>
          <hr className="border-white" style={{ color: '#fff' }} /> {/* Tailwind: border-white for white border + inline style for original color */}
          <div className="footer-bottom">
            <div className="flex justify-center"> {/* Tailwind: flex and justify-center to center content */}
              <div className="justify-start lotus-content-center">
                <div className="footer-bottom-left text-center"> {/* Tailwind: text-center to center text */}
                  <p className="text-center text-white">Copyright © 2024.All Rights Reserved.</p> {/* Tailwind classes for text alignment and color */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Fixed Button */}
      <div className="bottom_fix fixed bottom-0 bg-yellow-400 py-6 z-20 w-full text-center"> {/* Tailwind: fixed positioning, bottom-0, background-color, padding, z-index, width, text-center */}
        <a className="join-btn no-underline text-white text-base lg:text-lg font-medium bg-gradient-to-r from-blue-900 to-gray-900 py-2.5 px-9 rounded-3xl border-2 border-yellow-300 transition-all duration-300 ease-in"  // Tailwind classes for typography, color, background gradient, padding, rounded corners, border, transition
          onClick={() => { /* You'd need to define gtag_report_conversion or remove if not needed */ }}
          href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID"
        >
          Click Here To Register
        </a>
      </div>

      {/* Floating WhatsApp Button - Consider if needed, Tailwind can handle fixed positioning */}
      {/* <a href="https://whatsapp.com/" className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
      </a> */}


    </div>
  );
}

export default HomePage;