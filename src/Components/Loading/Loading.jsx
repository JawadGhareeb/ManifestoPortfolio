import { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { Load } from "../../Store/load";

export const Loading = () => {
  const [countLoad, setCountLoad] = useState(0);
  const percentLoad = "%";
  const loadingPara = useRef();
  const spanPara = useRef();
  const pleaseRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (countLoad < 100) {
      const interval = setInterval(() => {
        setCountLoad((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(interval);
    }

    if (countLoad === 100) {
      gsap.to(loadingPara.current, {
        duration: 0.4,
        width: 0,
        onComplete: () => {
          gsap.to(pleaseRef.current, {
            duration: 0.5,
            opacity: 0,
          });
          setTimeout(() => {
            gsap.to(spanPara.current, {
              y: -85,
              duration: 0.4,
              onComplete: () => {
                dispatch(Load());
              },
            });
          }, 500);
        },
      });
    }
  }, [countLoad, dispatch]);

  return (
    <Fragment>
      <div className="flex items-center justify-center w-screen h-screen bg-[#0c0c0c] text-white text-[45px] font-[500] tracking-[2px] uppercase md:text-[65px]">
        <h3 className="flex items-center gap-[10px] overflow-hidden">
          <span className="font-[300]" ref={spanPara}>
            {countLoad}
            {percentLoad}
          </span>
          <p ref={loadingPara}>Loading</p>
        </h3>
      </div>
      <span
        className="w-full fixed bottom-[40px] text-center text-[#777]"
        ref={pleaseRef}
      >
        Please wait, content is loading
      </span>
    </Fragment>
  );
};
