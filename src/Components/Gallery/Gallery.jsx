import { Fragment, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./gallery.css";
gsap.registerPlugin(ScrollTrigger);
export const Gallery = () => {
  const gallRef = useRef(null);
  const ImagesRef1 = useRef(null);
  const ImagesRef2 = useRef(null);
  const ImagesRef3 = useRef(null);
  useEffect(() => {
    gsap.to(gallRef.current, {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".paraRef",
        top: "top 75%",
        scrub: true,
      },
    });
    gsap.fromTo(
      ImagesRef1.current,
      {
        x: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".imagSingle",
          start: "top 100%",
        },
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".imagSingle",
          start: "top 100%",
        },
      }
    );
    gsap.fromTo(
      ImagesRef2.current,
      {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".imagDouble",
          start: "top 100%",
        },
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".imagDouble",
          start: "top 100%",
        },
      }
    );
    gsap.fromTo(
      ImagesRef3.current,
      {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ImagesRef3.current,
          start: "top 100%",
        },
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ImagesRef3.current,
          start: "top 100%",
        },
      }
    );
  });
  return (
    <Fragment>
      <div className="gallery bg-[#0c0c0c]" ref={gallRef}>
        <div className="container">
          <div className="gallery-content">
            <div className="imagSingle" ref={ImagesRef1}>
              <div className="img">
                <img src="/assest/01hero.jpg" alt="" />
              </div>
              <div className="desc-image">
                <p>The Handbag</p>
                <span>Photography</span>
              </div>
            </div>
            <div className="imagDouble">
              <div className="text-image" ref={ImagesRef2}>
                <div className="img">
                  <img src="/assest/02hero.jpg" alt="" />
                </div>
                <div className="desc-image">
                  <p>Woolen Craft</p>
                  <span>Product Design</span>
                </div>
              </div>
              <div className="text-image" ref={ImagesRef3}>
                <div className="img">
                  <img src="/assest/03hero.jpg" alt="" />
                </div>
                <div className="desc-image">
                  <p>Urban Edge</p>
                  <span>Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
