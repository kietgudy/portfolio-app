import desktopLogo from "@/assets/img/logo/desktop_logo.png";
import { useState } from "react";
import { SiZalo } from "react-icons/si";
const LeftPart = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  return (
    <>
      <div className="arlo_tm_leftpart_wrap">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : ""}
                  onClick={() => setActiveTab("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === "about" ? "active" : ""}
                  onClick={() => setActiveTab("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === "skills" ? "active" : ""}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeTab === "projects" ? "active" : ""}
                  onClick={() => setActiveTab("projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={() => setActiveTab("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/tuannkiet1701"
                    target="_blank"
                  >
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="http://zalo.me/0394193923" target="_blank">
                    <i className="xcon-zalo">
                      <SiZalo style={{ width: "40px" }} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a className="arlo_tm_resize" href="#">
            <i className="xcon-angle-left"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
