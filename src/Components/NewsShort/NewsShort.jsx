import { Fragment, useEffect, useRef } from "react";
import { arrNews } from "../../Cart/Cart";
import { FaArrowRight } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "./news.css";
gsap.registerPlugin(ScrollTrigger);
export const NewsShort = () => {
  const paragraphRef = useRef([]);
  useEffect(() => {
    paragraphRef.current.forEach((parag) => {
      gsap.to(parag, {
        height: 75,
        duration: 0.3,
        scrollTrigger: {
          trigger: parag,
          start: "top 45%",
          end: "top 5%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);
  return (
    <Fragment>
      <div className="news relative z-[1]">
        <div className="container">
          <div className="news-content">
            {arrNews.map((news, index) => {
              return (
                <div className="box-news" key={index}>
                  <div className="date">
                    <span>{news.date}</span>
                  </div>
                  <div className="intro">
                    <span>{news.intro}</span>
                  </div>
                  <div className="news-desc">
                    <h3 className="label-news">{news.label}</h3>
                    <p
                      className="desc-news"
                      ref={(el) => (paragraphRef.current[index] = el)}
                    >
                      {news.desc}
                    </p>
                    <div className="button-news">
                      <button className="btn">{news.btn}</button>
                      <FaArrowRight className="arrow-icon" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
