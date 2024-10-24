import React, { useState, useEffect, useRef } from "react";
import BoxItem from "./BoxItem/BoxItem";
import "./Slider.css";
/* import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"; */
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const Slider = () => {
  /* const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollCount, setScrollCount] = useState(0); //la cantidad de cajas en mi slider
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const newScrollLeft = scrollLeft + containerRef.current.offsetWidth;
        containerRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
        setScrollLeft(newScrollLeft);
        setScrollCount(scrollCount + 1);
        if (scrollCount == 2) {
          // console.log("volver"); 
          setScrollLeft(0);
          setScrollCount(0);
          containerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
        // console.log(scrollLeft); 
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [scrollLeft]);
 */
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="containerSlider">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <BoxItem
              bgImageBlur="/imageSlider/bg1Slider.png"
              cncImage="/imageSlider/cnc1.png"
              titleBox="CNC Router"
              description1Box="POTENTES, PRECISOS Y CONFIABLES"
              description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
            />
          </div>
         {/*  <div className="embla__slide">
            
          </div> */}
          <div className="embla__slide">
            <BoxItem
              bgImageBlur="/imageSlider/bg2Slider.jpg"
              cncImage="/imageSlider/cnc2.png"
              titleBox="CNC Router"
              description1Box="POTENTES, PRECISOS Y CONFIABLES"
              description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
              colorBox="#175FBB"
            />
          </div>
          <div className="embla__slide">
            <BoxItem
              bgImageBlur="/imageSlider/bg3Slider.jpg"
              cncImage="/imageSlider/cnc3.png"
              titleBox="CNC Router"
              description1Box="POTENTES, PRECISOS Y CONFIABLES"
              description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
              colorBox="#6F96B6"
            />
          </div>
        </div>
      </div>
      {/* <span className="buttonSlzider leftChevron">
        <IconChevronLeft stroke={2} width="40px" height="40px"  />
      </span>
      <div className="containerBoxes" ref={containerRef}>
        <BoxItem
          bgImageBlur="/imageSlider/bg1Slider.png"
          cncImage="/imageSlider/cnc1.png"
          titleBox="CNC Router"
          description1Box="POTENTES, PRECISOS Y CONFIABLES"
          description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
        />
        <BoxItem
          bgImageBlur="/imageSlider/bg2Slider.jpg"
          cncImage="/imageSlider/cnc2.png"
          titleBox="CNC Router"
          description1Box="POTENTES, PRECISOS Y CONFIABLES"
          description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
          colorBox="#175FBB"
        />
        <BoxItem
          bgImageBlur="/imageSlider/bg3Slider.jpg"
          cncImage="/imageSlider/cnc3.png"
          titleBox="CNC Router"
          description1Box="POTENTES, PRECISOS Y CONFIABLES"
          description2Box="Nuestros equipos CNC Router te darán servicio por años y años en tu negocio de manera confiable, visita nuestra sección de testimonios y conoce las experiencias otros empresarios que han trabajado por años con sus equipos."
          colorBox="#6F96B6"
        />
      </div>
      <span className="buttonSlider rightChevron">
        <IconChevronRight stroke={2} width="40px" height="40px"  />
      </span> */}
    </div>
  );
};

export default Slider;

/* import BoxItem from "./BoxItem/BoxItem"
import "./Slider.css"

const Slider = () => {
  return (
    <div className="containerSlider" >
        <div className="containerBoxes">
            <BoxItem></BoxItem>
            <BoxItem></BoxItem>
            <BoxItem></BoxItem>
            <BoxItem></BoxItem>
        </div>
    </div>
  )
}

export default Slider */
