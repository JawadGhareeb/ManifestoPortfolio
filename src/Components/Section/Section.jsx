import { Fragment } from "react";
import "./section.css";
export const Section = () => {
  return (
    <Fragment>
      <div className="section relative z-[1]">
        <div className="container">
          <div className="section-content">
            <h3>Discover</h3>
            <h3 className="h-bold">Our Studio</h3>
            <span>Exploring our World of Visual Design</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
