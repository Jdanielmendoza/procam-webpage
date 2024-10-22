import "./Footer.css"
import {IconMail, IconBrandFacebookFilled, IconBrandWhatsapp,IconBrandInstagram } from '@tabler/icons-react';
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="text__about__footer">
        <h6>Acerca de nosotros</h6>
        <p className="about__description__footer">
          En Pro-Cam, somos expertos en la venta y personalización de maquinaria
          CNC para una amplia gama de industrias. Nos especializamos en brindar
          soluciones innovadoras, adaptadas a las necesidades específicas de
          cada cliente. Con un enfoque en precisión, eficiencia y calidad,
          ayudamos a optimizar los procesos de producción, ofreciendo máquinas
          confiables y un servicio personalizado. Nuestro compromiso es
          potenciar el éxito de nuestros clientes mediante tecnología de
          vanguardia y un acompañamiento cercano en cada etapa del proceso.
        </p>
      </div>
      <hr />
      <div className="custom-container__footer">
      <div className="col-md-8">
            <p className="copyright-text">
              Copyright &copy; 2024 Todos los derechos reservados{" "}
              <a href="/">procam</a>.
            </p>
          </div>

          <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                 {/*  <i className="fa fa-facebook"></i> */}
                 <IconBrandFacebookFilled />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  {/* <i className="fa fa-twitter"></i> */}
                  <IconBrandWhatsapp stroke={2} />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  {/* <i className="fa fa-dribbble"></i> */}
                  <IconBrandInstagram stroke={2} />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  {/* <i className="fa fa-linkedin"></i> */}
                  <IconMail stroke={2} />
                </a>
              </li>
            </ul>
      </div>
    </footer>
  );
};

export default Footer;
