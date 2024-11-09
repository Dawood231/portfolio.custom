import { GoArrowUpRight } from "react-icons/go";
import Header from "../components/Header";

import './project.css'
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="project-page">
        <Header/>

        <div className="project-box slide-in-top">
      <div className="p-text">
        <h1>My Expertise</h1>
        <p>
          Transform ideas into reality by combining creativity, strategy, and
          expertise.
        </p>
      </div>
      <div className="p-line"></div>
      <div className="p-container">

{/* projects  */}

        <div className="p-col slit-in-vertical">
          <div className="p-inner-text"> <h1 className="p-inner-head"> Website For restaurants</h1> 
          <div className="icon-outer"><GoArrowUpRight /></div> 
          </div>
          <div className="p-inner-line"></div>
          <p className="p-inner-para">An Restaurant interactive menu with detailed descriptions, prices, and high-quality photos of each dish.</p>
          <div className="p-inner-image"></div>
        </div>

        <div className="p-col slit-in-vertical">
          <div className="p-inner-text"> <h1 className="p-inner-head">Architecture Website</h1> 
          <div className="icon-outer"><GoArrowUpRight /></div> 
          </div>
          <div className="p-inner-line"></div>
          <p className="p-inner-para">An Restaurant interactive menu with detailed descriptions, prices, and high-quality photos of each dish.</p>
          <div className="p-inner-image"></div>
        </div>

        <div className="p-col slit-in-vertical">
          <div className="p-inner-text"> <h1 className="p-inner-head">Education Website</h1> 
          <div className="icon-outer"><GoArrowUpRight /></div> 
          </div>
          <div className="p-inner-line"></div>
          <p className="p-inner-para">An Restaurant interactive menu with detailed descriptions, prices, and high-quality photos of each dish.</p>
          <div className="p-inner-image"></div>
        </div>

        <div className="p-col slit-in-vertical">
          <div className="p-inner-text"> <h1 className="p-inner-head">E-commerce Website</h1> 
          <div className="icon-outer"><GoArrowUpRight /></div> 
          </div>
          <div className="p-inner-line"></div>
          <p className="p-inner-para">An Restaurant interactive menu with detailed descriptions, prices, and high-quality photos of each dish.</p>
          <div className="p-inner-image"></div>
        </div>
      </div>
      </div>

      <Footer/>

    </div>
  );
}
