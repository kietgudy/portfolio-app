import aboutLogo from "@/assets/img/about/aboutme.jpg";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Về tác giả</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url={aboutLogo}></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    Hi there...I'm a &nbsp;
                    <TypeAnimation
                      sequence={[
                        "UI/UX Designer",
                        2000,
                        "Web Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      placeholder=""
                    />
                    <span className="arlo_tm_animation_text_word"></span>
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Xin chào, tôi là <strong>Kiệt</strong>. 
                    <br />
                    Với mong muốn được học hỏi, trau dồi kỹ năng và kinh nghiệm thực tế để phát triển bản thân và đóng góp cho công ty.
                    <br />
                    Tôi tin rằng với sự nhiệt huyết, ham học hỏi và tinh thần trách nhiệm cao, tôi sẽ hoàn thành tốt mọi nhiệm vụ được giao và trở thành một thành viên hữu ích cho đội ngũ của công ty.
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Ngày sinh:</label> 17.01.2002
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Giới tính:</label> Nam
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Tốt nghiệp:</label> Đại Học Duy Tân
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Chuyên ngành:</label> Kỹ Thuật Phần Mềm
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Website:</label> <a href="https://github.com/kietgudy" target="_blank">https://github.com/kietgudy</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Sở thích:</label> Lập trình, Đọc sách, Nghe nhạc,...
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Phone:</label> <a href="tel:+0394193923">+0394193923</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href="index.html" download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
