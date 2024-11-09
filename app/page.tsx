
// icons
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { IoGitBranchOutline } from "react-icons/io5";
import { TbServerCog } from "react-icons/tb";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="home-page">
   <Header/>
      <div className="hero">
        <div className="h-text">
          <h3>Hello, This is me</h3>
          <h1 className="tracking-in-expand">Muhammad Dawood Siddiqui</h1>
          <p>
            A Passionate Web Developer specializing in creating dynamic and
            responsive websites. With a strong foundation in HTML, CSS, and
            JavaScript, I bring innovative ideas to life through clean and
            efficient code. I am dedicated to delivering high-quality work that
            meets client needs and exceeds expectations.
          </p>
          <div className="hero-btns swing-in-top-fwd">
            <button className="h-1-btn">View Projects</button>
            <button className="h-2-btn">View Cv</button>
          </div>
        </div>
        <div className="hero-image slide-in-blurred-top">
          <div className="h-image "></div>
        </div>
      </div>

      <div className="skills flip-in-hor-bottom">
        <div className="s-text">
          <h1 className="text-focus-in">My Skills</h1>
          <p>
            I bring a well-rounded set of skills to every project, ensuring both
            technical proficiency and creative problem-solving. From building
            stunning front-end designs to developing robust back-end systems
          </p>
          <button className="s-btn">View More</button>
        </div>
        <div className="s-boxes">
          <div className="r-1-boxes">
            <div className="s-box1">
              <div className="s-icon">
                <CgWebsite />
              </div>
              <span>Front-End Development</span>
            </div>
            <div className="s-box2">
            <div className="s-icon">
              <MdOutlineDeveloperMode />
            </div>
              <span>Back-End Development</span>
            </div>
          </div>
          <div className="r-2-boxes">
            <div className="s-box1">
            <div className="s-icon">
              <IoGitBranchOutline />
              </div>
              <span>Version Control </span>
            </div>
            <div className="s-box2">
            <div className="s-icon">
              <TbServerCog />
            </div>
              <span>Hosting & Deployment</span>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
