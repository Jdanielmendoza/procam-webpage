import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import machine2CNC from "./assets/machines/machine-cnc.webp";
import cuttingAcrylic from "./assets/videos/Cutting_acrylic.mp4";
import bgPlasma from "./assets/backgrounds/bgPlasma.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
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
      {/* <div className="video__home__cutting" >
        <video src={cuttingAcrylic} loop muted autoPlay  >
        <h4>
          Con un enfoque en precisión, eficiencia y calidad, ayudamos a
          optimizar los procesos de producción
        </h4>
        </video>
      </div> */}
    </div>
  );
};

export default Home;
