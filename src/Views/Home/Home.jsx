import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import machine2CNC from "./assets/machines/machine-cnc.webp";
import cuttingAcrylic from "./assets/videos/Cutting_acrylic.mp4";
import bgPlasma from "./assets/backgrounds/bgPlasma.jpg";

import { IconGeometry, IconHeadset, IconBolt  } from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="containerHome">
      <Slider />
      {/*  */}
      <div className="home__divider">
        <p>Cortes precisos, resultados excelentes.®</p>
      </div>
      {/*  */}
      <section className="container__home__custommachine">
        <img src={bgPlasma} alt="bg-plasma" className="bg__plasma__home" />
        <div className="home__custommachine">
          <div className="item__customachine">
            <h3 className="h3__title">Personalización sin límites</h3>
            <p>
              Con nuestra CNC Router, ofrecemos{" "}
              <strong style={{ color: "#E396FF" }}>soluciones a medida </strong>
              para tus proyectos más exigentes.
            </p>
            <br />
            <p>
              Desde cortes precisos en madera y acrílico hasta
              <strong style={{ color: "#E396FF" }}>
                {" "}
                trabajos especializados{" "}
              </strong>
              en contrachapados y aluminio, nuestra máquina se adapta a tus
              necesidades.
            </p>
          </div>
          <div className="item__customachine image__item__custommachine__home">
            <img src={machine2CNC} alt="cnc-machine" />
          </div>
        </div>
      </section>

      {/*  */}
      {/*  <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div> */}
      <div className="container__card__video__home">
        <div className="card_video__home__cutting">
          <div className="video__home__cutting">
            <video src={cuttingAcrylic} loop muted autoPlay></video>
          </div>
          <div className="container__conternt__video">
            <div>
              <h3 class="title__video__home">Mejora tu Producción</h3>
              <p className="description__video">
                Con un enfoque en precisión, eficiencia y calidad, ayudamos a
                optimizar los procesos de producción
              </p>
            </div>

            <section>
              <div className="tag__list__video">
                <IconGeometry stroke={2} />
                <p className="description__icon">Precisión</p>
              </div>
              <div className="tag__list__video">
                <IconBolt stroke={2} />
                <p className="description__icon">Eficiencia Energética</p>
              </div>
              <div className="tag__list__video">
                <IconHeadset stroke={2} />
                <p className="description__icon">Soporte Técnico</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
