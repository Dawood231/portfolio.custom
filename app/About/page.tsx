import Footer from "../components/Footer";
import Header from "../components/Header";
import "./about.css";
import { GoArrowDownRight } from "react-icons/go";


export default function page() {
  return (
    <div className="about-page">
      <Header />
      <div className="ab-first-cont">
        <div className="ab-text slide-in-left">
          <h1 className="ab-h1">I’m <span> Dawood </span> Siddiqui, </h1>
          <p className="ab-para">
            a passionate website developer with a mission to create innovative, user-friendly digital experiences. From clean code to modern design trends, my goal is to merge functionality with aesthetics.
          </p>
        </div>
        <div className="ab-box slide-in-right">
          <div className="ab-statics">
            <div className="upper-st">
              <div className="st-col-1">
                <h1> 80+</h1> <span>Projects Done</span>
              </div>
              <div className="st-col-2">
                <h1> 80+ </h1> <span>Creative people</span>
              </div>
            </div>
            <div className="lower-st">
              <div className="st-col-1">
                <h1> 70+</h1> <span>Happy Client</span>
              </div>
              <div className="st-col-2">
                <h1>10+ </h1> <span>Years Experience</span>
              </div>
            </div>
          </div>
          <button className="ab-btn">Explore More <GoArrowDownRight />
          </button>
        </div>
      </div>

      <div className="ab-second-cont slide-in-bottom "></div>

      <Footer/>
    </div>
  );
}
