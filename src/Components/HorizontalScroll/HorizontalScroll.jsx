import { Fragment, useEffect, useRef } from "react";
import { arrImages } from "../../Cart/CartImages";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import style from "./horizontal.module.css";
gsap.registerPlugin(ScrollTrigger);
export const HorizontalScroll = () => {
  let target = 0;
  let current = 0;
  let ease = 0.075;

  const wrapper = useRef(null);
  const slides = useRef([]);

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const updateScaleAndPosition = () => {
    slides.current.forEach((slide) => {
      if (slide) {
        const rect = slide.getBoundingClientRect();
        const centerPosition = (rect.left + rect.right) / 2;
        const distanceFromCenter = centerPosition - window.innerWidth / 2;
        let scale;
        let offsetX;
        if (distanceFromCenter > 0) {
          scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
          offsetX = (scale - 1) * 300;
        } else {
          scale = Math.max(
            0.5,
            1 - Math.abs(distanceFromCenter) / window.innerWidth
          );
          offsetX = 0;
        }
        gsap.set(slide, { scale: scale, x: offsetX });
      }
    });
  };

  const update = () => {
    current = lerp(current, target, ease);
    gsap.set(wrapper.current, {
      x: -current,
    });
    updateScaleAndPosition();
    requestAnimationFrame(update);
  };

  useEffect(() => {
    let wrapperElement = wrapper.current.offsetWidth;
    let windowWidth = window.innerWidth;
    let maxScroll = wrapperElement - windowWidth;

    const handleResize = () => {
      wrapperElement = wrapper.current.offsetWidth;
      windowWidth = window.innerWidth;
      maxScroll = wrapperElement - windowWidth;
    };

    const handleWheel = (e) => {
      target += e.deltaY;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel);

    update();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Fragment>
      <div className={style.sidebar}>
        <div className={style.sidebarItem}>
          <p id={style.header}>
            manifesto <br />
            portfolio
          </p>
          <p className={style.creative}>
            Creative Studio Agency <br /> strategy agency with an addaptive.
          </p>
        </div>
      </div>
      <div className={style.slider}>
        <div className={style.sliderWrapper} ref={wrapper}>
          {arrImages.map((img, idx) => {
            return (
              <div
                className={style.slide}
                key={idx}
                ref={(el) => (slides.current[idx] = el)}
              >
                <img src={img.srcImag} alt="" />
              </div>
            );
          })}
          {arrImages.map((img, idx) => {
            return (
              <div
                className={style.slide}
                key={idx + arrImages.length}
                ref={(el) => (slides.current[idx + arrImages.length] = el)}
              >
                <img src={img.srcImag} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
