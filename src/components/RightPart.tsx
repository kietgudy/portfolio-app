import About from "./contents/About";
import Contact from "./contents/Contact";
import HomeCV from "./contents/HomeCV";
import Project from "./contents/Project";
import Skill from "./contents/Skill";

const RightPart = () => {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <HomeCV />

          <About />
          <Skill />
          <Project/>
          <Contact/>
        </div>
      </div>
    </>
  );
};

export default RightPart;
