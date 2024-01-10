import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import "./services.css";
gsap.registerPlugin(ScrollTrigger);
export const Services = () => {
  const serviceRef = useRef();
  const serviceHead = useRef();
  const descRef = useRef();
  useEffect(() => {
    const services = new SplitType(serviceHead.current, { split: "chars" });
    const descripe = new SplitType(descRef.current, { split: "chars" });
    gsap.fromTo(
      serviceRef.current,
      {
        scale: 0.85,
      },
      {
        duration: 2,
        scale: 1.0,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
    const serviceChars = services.chars;
    serviceChars.forEach((char) => {
      gsap.to(char, {
        duration: 1,
        color: "#0c0c0c",
        scrollTrigger: {
          trigger: char,
          scrub: true,
        },
      });
    });
    const descChars = descripe.chars;
    descChars.forEach((char) => {
      gsap.to(char, {
        duration: 1,
        color: "#0c0c0c",
        scrollTrigger: {
          trigger: char,
          scrub: true,
        },
      });
    });
  });
  return (
    <Fragment>
      <div className="services relative z-[-1]" ref={serviceRef}>
        <div className="services-content">
          <p className="serviceHead" ref={serviceHead}>
            Our-Services
          </p>
          <div className="container">
            <div className="service-text pt-[35px]">
              <span>2023</span>
              <span>Portfolio Websites</span>
              <div className="desc-services">
                <p className="descRef" ref={descRef}>
                  Our project pages are a playground for creativity where we
                  leverage an assortment of shortcodes to build captivating
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
