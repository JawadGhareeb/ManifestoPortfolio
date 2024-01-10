import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { arrImages } from "../../Cart/CartImages";
import "./fullscreen.css";

export const FullScrennScroll = () => {
  let count = 0;
  const slidesRef = useRef([]);
  const textSlide = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const slides = slidesRef.current;
    const texts = textSlide.current;
    let currentSlideIndex = 0;
    let isAnimating = false;

    const showSlide = (index) => {
      const media = gsap.matchMedia();
      count++;
      if (isAnimating) return;
      isAnimating = true;

      const img = slidesRef.current[index];
      gsap.fromTo(
        img,
        { scale: 1, top: "4em" },
        {
          scale: 1,
          top: "0%",
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        }
      );
      texts.forEach((text, index) => {
        gsap.to(text, {
          duration: 1,
          ease: "power4.inOut",
          y: -155 * count,
        });
      });
      media.add("(max-width: 850px", () => {
        texts.forEach((text, index) => {
          gsap.to(text, {
            duration: 1,
            ease: "power4.inOut",
            y: -60 * count,
          });
        });
      });
    };

    const hideSlide = (index) => {
      const media = gsap.matchMedia();
      count--;
      if (isAnimating) return;
      isAnimating = true;

      const slide = slides[index];
      const img = slidesRef.current[index].querySelector("img");

      gsap.to(img, {
        scale: 1,
        top: "4em",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to(slide, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      });
      texts.forEach((text, index) => {
        gsap.to(text, {
          duration: 1,
          ease: "power4.inOut",
          y: -155 * count,
        });
      });
      media.add("(max-width: 850px", () => {
        texts.forEach((text, index) => {
          gsap.to(text, {
            duration: 1,
            ease: "power4.inOut",
            y: -60 * count,
          });
        });
      });
    };

    const handleScroll = (e) => {
      if (isAnimating) return;

      if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
        currentSlideIndex++;
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        currentSlideIndex--;
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <>
      <div className="fullscreen">
        <div className="full-name">
          <div className="name">
            {arrImages.map((image, index) => {
              return (
                <h3 ref={(el) => (textSlide.current[index] = el)} key={index}>
                  <span>{image.spn}</span>
                  <p>{image.parag}</p>
                </h3>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fixed inset-0" style={{ height: "400vh" }}>
        <div className="slide-images">
          {arrImages.map((image, index) => (
            <div
              className="slideimage"
              id={`slide-${image.id}`}
              key={index}
              ref={(el) => (slidesRef.current[index] = el)}
            >
              <img src={image.srcImag} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
