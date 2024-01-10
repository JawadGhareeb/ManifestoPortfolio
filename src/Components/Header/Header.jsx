import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./header.css";
gsap.registerPlugin(ScrollTrigger);
export const Header = () => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Gallery", path: "gallery" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Contact", path: "contacts" },
  ];
  const textNav = useRef([]);
  const overlay1 = useRef();
  const overlay2 = useRef();
  const overlay3 = useRef();
  const li1 = useRef();
  const li2 = useRef();
  const navtext = textNav.current;
  const navtext1 = textNav.current;
  const tl = gsap.timeline();
  const revealMenu = () => {
    setIsClick(!isClick);
    if (!isClick) {
      gsap.to(li1.current, {
        duration: 0.2,
        rotate: "45deg",
        translateY: "4px",
      });
      gsap.to(li2.current, {
        duration: 0.2,
        rotate: "-45deg",
        translateY: "-6px",
      });
      tl.to(overlay1.current, {
        height: "100%",
        borderRadius: "0 0 50% 50%",
        duration: 1,
        zIndex: 3,
        onStart: () => {
          gsap.to(overlay2.current, {
            height: "100%",
            borderRadius: "50% 50% 0 0",
            duration: 1,
            zIndex: 3,
          });
          gsap.to(overlay3.current, {
            zIndex: 3,
          });
        },
      });
      navtext.forEach((txt) => {
        tl.to(txt, {
          y: -10,
          duration: 0.3,
        });
      });
    } else {
      navtext1.reverse().forEach((txt) => {
        tl.to(txt, {
          y: 80,
          duration: 0.3,
          onStart: () => {
            gsap.to(li1.current, {
              duration: 0.2,
              rotate: "0deg",
              translateY: "0px",
            });
            gsap.to(li2.current, {
              duration: 0.2,
              rotate: "0deg",
              translateY: "0px",
            });
          },
        });
      });
      tl.to(overlay1.current, {
        height: "0",
        borderRadius: "0",
        duration: 1,
        onStart: () => {
          gsap.to(overlay2.current, {
            height: "0",
            borderRadius: "0",
            duration: 1,
          });
          gsap.to(overlay3.current, {
            zIndex: -1,
          });
        },
      });
    }
  };
  const closeMenu = () => {
    navtext1.reverse().forEach((txt) => {
      tl.to(txt, {
        y: 80,
        duration: 0.3,
        onStart: () => {
          gsap.to(li1.current, {
            duration: 0.2,
            rotate: "0deg",
            translateY: "0px",
          });
          gsap.to(li2.current, {
            duration: 0.2,
            rotate: "0deg",
            translateY: "0px",
          });
        },
      });
    });
    tl.to(overlay1.current, {
      height: "0",
      borderRadius: "0",
      duration: 1,
      onStart: () => {
        gsap.to(overlay2.current, {
          height: "0",
          borderRadius: "0",
          duration: 1,
        });
        gsap.to(overlay3.current, {
          zIndex: -1,
        });
      },
    });
  };
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="header-content">
            <div
              className="logo"
              onClick={() => {
                navigate("/");
                closeMenu();
              }}
            >
              <img src="/assest/logo-white.png" alt="" />
            </div>
            <div className="menu" onClick={revealMenu}>
              <div className="btn outline-1"></div>
              <div className="btn outline-2"></div>
              <ul className="open">
                <li ref={li1}></li>
                <li ref={li2}></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="w-screen h-0 bg-black fixed inset-0 top-0"
          ref={overlay1}
        ></div>
        <div
          className="w-screen h-0 bg-black fixed left-[0] bottom-0"
          ref={overlay2}
        ></div>
        <ul
          className={`fixed inset-0 flex flex-col justify-center items-center h-screen w-screen text-white text-[48px] font-[500] uppercase tracking-[1px] md:text-[65px]`}
          ref={overlay3}
        >
          {navItems.map((item, index) => {
            return (
              <div className="w-fit px-[20px] overflow-hidden" key={index}>
                <li
                  className="translate-y-[80px] cursor-pointer"
                  ref={(el) => (textNav.current[index] = el)}
                  onClick={() => {
                    navigate(item.path);
                    closeMenu();
                  }}
                >
                  {item.link}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
