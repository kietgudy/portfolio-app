import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import MobileMenu from "../components/mobile/Menu";

const Portfolio = () => {
  return (
    <>
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>

        <MobileMenu/>
        <div className="arlo_tm_content">
          <LeftPart />
          <RightPart />

          <a className="arlo_tm_totop" href="#"></a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
