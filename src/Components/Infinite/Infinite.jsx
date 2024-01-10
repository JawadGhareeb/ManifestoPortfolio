import { Fragment, useEffect } from "react";
import "./infinite.css";

export const Infinite = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <Fragment>
      <div className="scroller tow relative z-[1]" data-speed="slow">
        <ul className="tag-list scroller__inner text-white">
          {" "}
          <li>The Buzz Feed.</li>
          <li> Stay Informed. </li>
        </ul>
      </div>
    </Fragment>
  );
};
