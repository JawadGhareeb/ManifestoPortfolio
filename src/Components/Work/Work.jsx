import { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { enter, leave } from "../../Store/mouseMove";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import "./work.css";
gsap.registerPlugin(ScrollTrigger);
export const Work = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const workRef1 = useRef(null);
  const workRef2 = useRef(null);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsHovered(true);
    dispatch(enter());
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    dispatch(leave());
    // Reset the position when the mouse leaves
  };
  const handleMouseMove = (event) => {
    if (isHovered) {
      setPosition({
        x: event.nativeEvent.offsetX - event.target.clientWidth / 2,
        y: event.nativeEvent.offsetY - event.target.clientHeight / 2,
      });
    }
  };
  const getBackgroundDirection = () => {
    if (position.x > 0 && position.y > 0) {
      return "from-top-left";
    } else if (position.x > 0 && position.y < 0) {
      return "from-bottom-left";
    } else if (position.x < 0 && position.y > 0) {
      return "from-top-right";
    } else {
      return "from-bottom-right";
    }
  };
  useEffect(() => {
    const charwork1 = new SplitType(workRef1.current, { split: "chars" });
    const char1 = charwork1.chars;
    char1.forEach((ch1, index) => {
      gsap.to(ch1, {
        duaration: 0.5,
        color: "#fff",
        scrollTrigger: {
          trigger: ch1,
          scrub: true,
        },
      });
    });
    const charwork2 = new SplitType(workRef2.current, { split: "chars" });
    const char2 = charwork2.chars;
    char2.forEach((ch2, index) => {
      gsap.to(ch2, {
        duaration: 0.5,
        color: "#fff",
        scrollTrigger: {
          trigger: ch2,
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <Fragment>
      <div className="work relative z-[1]">
        <div className="container">
          <div className="work-content">
            <p className="workRef1" ref={workRef1}>
              Immerse yourself in your
            </p>
            <h3 className="workRef2" ref={workRef2}>
              World of stunning designs
            </h3>
            <div
              className="btn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "0.3s linear",
              }}
            >
              <button
                className={`${isHovered ? getBackgroundDirection() : ""}`}
              >
                View all works
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
