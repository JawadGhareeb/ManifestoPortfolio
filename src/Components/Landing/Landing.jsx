import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./landing.css";
gsap.registerPlugin(ScrollTrigger);
export const Landing = () => {
  const textRef = useRef(null);
  const h3Ref = useRef(null);
  const li1Ref = useRef(null);
  const li2Ref = useRef(null);
  const li3Ref = useRef(null);
  const imageRef = useRef(null);
  const paraRef = useRef(null);
  useEffect(() => {
    // span animate with GSAP:
    const text = new SplitType(textRef.current, { split: "chars" });
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
    //h3 animate with GSAP:
    const h3 = new SplitType(h3Ref.current, { split: "chars" });
    const h3Chars = h3.chars;
    gsap.set(h3Chars, { opacity: 0, y: 50 });
    h3Chars.forEach((h3char, index) => {
      gsap.to(h3char, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    //Li1 animate with GSAP
    const li1 = new SplitType(li1Ref.current, { split: "chars" });
    const li1Chars = li1.chars;
    gsap.set(li1Chars, { opacity: 0, y: 50 });
    li1Chars.forEach((li1, index) => {
      gsap.to(li1, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    //Li2 animate with GSAP
    const li2 = new SplitType(li2Ref.current, { split: "chars" });
    const li2Chars = li2.chars;
    gsap.set(li2Chars, { opacity: 0, y: 50 });
    li2Chars.forEach((li2, index) => {
      gsap.to(li2, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    //Li3 animate with GSAP:
    const li3 = new SplitType(li3Ref.current, { split: "chars" });
    const li3Chars = li3.chars;
    gsap.set(li3Chars, { opacity: 0, y: 50 });
    li3Chars.forEach((li3, index) => {
      gsap.to(li3, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: index * 0.1,
      });
    });
    //Image animate in GSAP:
    const imageElement = imageRef.current;

    // GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageElement,
        start: "top center",
        scrub: true,
      },
    });
    tl.to(imageElement, {
      width: "100%",
      duration: 3,
    });
    // Update ScrollTrigger
    ScrollTrigger.refresh();
    // Paragragh animate inGSAP:
    const charPara = new SplitType(paraRef.current, { split: "chars" });
    const char = charPara.chars;
    gsap.fromTo(
      paraRef.current,
      {
        duration: 3,
        y: 25,
        scrollTrigger: {
          trigger: ".paraRef",
          scrub: true,
        },
      },
      {
        duratiton: 3,
        y: -650,
        scrollTrigger: {
          trigger: ".paraRef",
          scrub: true,
        },
      }
    );
    char.forEach((ch, index) => {
      gsap.to(ch, {
        duaration: 0.5,
        color: "#fff",
        scrollTrigger: {
          trigger: ch,
          scrub: true,
        },
      });
    });
    const media = gsap.matchMedia();

    media.add("(max-width: 767px", () => {
      gsap.fromTo(
        paraRef.current,
        {
          duration: 3,
          y: -100,
          scrollTrigger: {
            trigger: ".paraRef",
            scrub: true,
          },
        },
        {
          duratiton: 3,
          y: -650,
          scrollTrigger: {
            trigger: ".paraRef",
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <Fragment>
      <div className="landing">
        <div className="container">
          <div className="landing-content">
            <div className="texth3">
              <span ref={textRef} id="word1">
                The Manifesto
              </span>
              <h3 className="bold" ref={h3Ref}>
                Portfolio Website
              </h3>
            </div>
            <ul className="experience">
              <li ref={li1Ref}>Experience the</li>
              <li ref={li2Ref}>perfect blend of creativity</li>
              <li ref={li3Ref}>and functionality</li>
            </ul>
          </div>
        </div>
        <div className="animate-text">
          <div className="image" ref={imageRef}>
            <img src="/assest/00hero.jpg" alt="" />
          </div>
          <p className="paraRef" ref={paraRef}>
            Stand out from the crowd and make a statement with our sleek and
            stylish portfolio template that speaks volumes about your
            creativity.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
