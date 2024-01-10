import { Fragment, useEffect, useRef, useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./contact.css";
export const Contact = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const labelsRef = useRef([]);
  const createRef = useRef();
  const greatRef = useRef();
  const visionRef = useRef();
  const handelFocus = (e) => {
    const element = e.target.id;
    const elementLabel = labelsRef.current[element];
    gsap.to(elementLabel, {
      width: "100%",
      duration: 0.5,
    });
  };
  const handelBlur = (e) => {
    const element = e.target.id;
    const elementLabel = labelsRef.current[element];
    gsap.to(elementLabel, {
      width: "0%",
      duration: 0.5,
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };
  const handleMouseMove = (event) => {
    if (isHovered) {
      setPosition({
        x: event.nativeEvent.offsetX - event.target.clientWidth / 2,
        y: event.nativeEvent.offsetY - event.target.clientHeight / 2,
      });
    }
  };

  useEffect(() => {
    const text = new SplitType(createRef.current, { split: "chars" });
    const chars = text.chars;
    gsap.set(chars, { opacity: 0, y: 50 });
    chars.forEach((char, index) => {
      gsap.to(char, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    const greate = new SplitType(greatRef.current, { split: "chars" });
    const charsGreate = greate.chars;
    gsap.set(charsGreate, { opacity: 0, y: 50 });
    charsGreate.forEach((char, index) => {
      gsap.to(char, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    const vision = new SplitType(visionRef.current, { split: "chars" });
    const visionChars = vision.chars;
    gsap.set(visionChars, { opacity: 0, y: 50 });
    visionChars.forEach((char, index) => {
      gsap.to(char, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
  }, []);
  return (
    <Fragment>
      <div className="w-screen h-screen bg-[#0c0c0c] pt-[55px] pb-[100px]">
        <div className="container">
          <div className="texth3 flex flex-col items-center justify-center text-center gap-[35px] pb-[145px] text-white text-[46px] uppercase leading-[1.3] tracking-[1px]">
            <div>
              <span className="font-[100]" ref={createRef}>
                Let's create
              </span>
              <h3 className="font-[500]" ref={greatRef}>
                Something great together
              </h3>
            </div>
            <p className="font-[300] text-[18px]" ref={visionRef}>
              Contact us and let's bring your vision to life
            </p>
          </div>
          <div className="w-[100%] lg:w-[70%] m-auto">
            <form className="w-full flex flex-col justify-center items-center gap-[45px]">
              <div className="boxes-inputs w-full flex items-center justify-between">
                <div className="box-input w-[45%] relative">
                  <input
                    id="0"
                    onFocus={handelFocus}
                    onBlur={handelBlur}
                    className="w-full bg-transparent py-[12px] pr-[12px] resize-none text-white caret-white focus:outline-none placeholder:text-white text-[14px] font-[500]"
                    type="text"
                    placeholder="What's Your Name"
                  />
                  <label
                    className="absolute left-[0] bottom-[-4px] w-[0%] h-[2px] bg-white"
                    ref={(ref) => (labelsRef.current[0] = ref)}
                  ></label>
                </div>
                <div className="box-input w-[45%] relative">
                  <input
                    id="1"
                    onFocus={handelFocus}
                    onBlur={handelBlur}
                    className="w-full bg-transparent py-[12px] pr-[12px] resize-none text-white caret-white focus:outline-none placeholder:text-white text-[14px] font-[500]"
                    type="text"
                    placeholder="Your Email"
                  />
                  <label
                    className="absolute left-[0] bottom-[-4px] w-[0%] h-[2px] bg-white"
                    ref={(ref) => (labelsRef.current[1] = ref)}
                  ></label>
                </div>
              </div>
              <div className="box-input w-full relative">
                <input
                  id="2"
                  onFocus={handelFocus}
                  onBlur={handelBlur}
                  className="w-full bg-transparent py-[12px] pr-[12px] resize-none text-white caret-white focus:outline-none placeholder:text-white text-[14px] font-[500]"
                  placeholder="Tell Us About Your Project"
                />
                <label
                  className="absolute left-[0] bottom-[-4px] w-[0%] h-[2px] bg-white"
                  ref={(ref) => (labelsRef.current[2] = ref)}
                ></label>
              </div>
            </form>
          </div>
          <div
            className="send"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "0.5s linear",
            }}
          >
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
