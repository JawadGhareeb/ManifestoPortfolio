import { Fragment } from "react";
import { textFooter } from "../../Cart/TextFooter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./footer.css";
gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  return (
    <Fragment>
      <div className="footer bg-[#0c0c0c]">
        <div className="flex flex-col items-start w-full">
          {textFooter.map((foot, index) => {
            return (
              <div className={foot.className} key={index}>
                <h1 className="text-[34px] font-[500] uppercase">
                  {foot.title}
                </h1>
                <h1 className="hoverd absolute left-[40%] text-[34px] font-[300]">
                  {foot.desc}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="container">
          <p className="parafooter gap-[10px] pt-[65px] pb-[45px] text-white text-center font-[300] tracking-[-1px]  uppercase md:text-[36px] md:tracking-[-2px]">
            All right reserved. created by jawad
          </p>
        </div>
      </div>
    </Fragment>
  );
};
