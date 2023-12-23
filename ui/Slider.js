'use client'
import React, { useState } from "react";
import SliderContent from "./SliderContent";
import styles from "../src/app/recursos/styles.module.css"
import Link from "next/link";

export default (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };
  

  return (
    <>
      {/* carousel */}
      
      <div className={styles.slideC}>

        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <Link
              href={`./recursos/${item.id}`}
              className={styles.slide}
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </Link>
            <div
              className={styles.reflection}
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="pt-24">
        <button onClick={prev} className="mr-20 h-0 w-0 border-y-[28px] border-y-transparent border-r-[40px] border-r-primary-600"></button>
        <button onClick={next} className="ml-20 h-0 w-0 border-y-[28px] border-y-transparent border-l-[40px] border-l-primary-600"></button>
      </div>
    </>
  );
};