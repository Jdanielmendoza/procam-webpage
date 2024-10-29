import "./Contact.css";
import bgSlider from "./assets/bg1Slider.jpg";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* icons */
import {
  IconMailFilled,
  IconPhoneFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";

const Input = ({ type = "text" }) => {
  return <input type={type} className="Input__contact__form" required />;
};
const Contact = () => {
  const form = useRef();
  const [selectedOption, setSelectedOption] = useState("option1");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5lex3d6", "template_upff4uk", form.current, {
        publicKey: "f7TvsMaB0stPR4EBk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="containerSliderContact">
      <section className="section__header__contact">
        <img
          src={bgSlider}
          alt="bgImageSlider"
          className="bg__slider__contact"
        />
        <h3 className="contact__title">CONTÁCTANOS</h3>
        <p className="descriptionContact">
          Vive la emoción de ver tu empresa crecer® con un equipo CNC Pro-Cam,
          ingresa tus datos y te contactaremos en un momento.
        </p>
      </section>

      <section className="container__location__form__contact ">
        <div className="container__form__location__cellphone__email">
          <form ref={form} onSubmit={sendEmail} className="form__contact">
            <section>
              <div className="input__container_label_input">
                <label>
                  Nombre <strong style={{ color: "red" }}>*</strong>{" "}
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="Input__contact__form"
                  required
                />
              </div>

              <div className="input__container_label_input">
                <label>Apellido</label>
                <input
                  type="text"
                  name="last_name"
                  className="Input__contact__form"
                />
              </div>
            </section>

            <div className="input__container_label_input">
              <label>
                Correo electronico <strong style={{ color: "red" }}>*</strong>
              </label>
              <input
                type="email"
                name="user_email"
                className="Input__contact__form"
                required
              />
            </div>

            <div className="input__container_label_input">
              <label>
                Telefono <strong style={{ color: "red" }}>*</strong>
              </label>
              <input
                type="number"
                name="telefone"
                className="Input__contact__form"
                required
              />
            </div>

            <div className="input__container_label_input">
              <label>
                Cuentanos sobre tu proyecto{" "}
                <strong style={{ color: "red" }}>*</strong>{" "}
              </label>
              <textarea
                name="message"
                className="textarea__contact__form"
                required
                rows={10}
                maxLength={400}
              />
            </div>

            <input
              type="submit"
              value="Enviar"
              className="Input__contact__form button__contact__form"
            />
          </form>
          <div className="container__location__phone__email__contact">
            <ul>
              <li className="item__contact">
                <IconMapPinFilled color="#000" size={45} />
                <section>
                  <h3 className="title__contact__items">Ubicacion</h3>{" "}
                  <p className="description__contact__items">
                    Unifranz, Av Busch, 1113, <br /> Santa Cruz de la Sierra,
                    Santa Cruz, Bolivia
                  </p>{" "}
                </section>
              </li>
              <li className="item__contact">
                <IconPhoneFilled color="#000" size={45} />
                <section>
                  <h3 className="title__contact__items">Teléfono</h3>{" "}
                  <p className="description__contact__items">
                    Procam: +591-78318599 <br /> : SCZ: +591-60388024
                  </p>{" "}
                </section>
              </li>
              <li className="item__contact">
                <IconMailFilled color="#000" size={45} />
                <section>
                  <h3 className="title__contact__items">Correo</h3>{" "}
                  <p className="description__contact__items">
                    maquinas@procamcnc.com
                  </p>{" "}
                </section>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container__map__contact">
          <div className="filter-switch__contact" id="firstFilter">
            <input
              checked={selectedOption === "option1"}
              id="option1"
              name="options"
              type="radio"
              onChange={() => setSelectedOption("option1")}
            />
            <label className="filter-switch__option__contact" htmlFor="option1">
              Santa Cruz
            </label>

            <input
              checked={selectedOption === "option2"}
              id="option2"
              name="options"
              type="radio"
              onChange={() => setSelectedOption("option2")}
            />
            <label className="filter-switch__option__contact" htmlFor="option2">
              Cochabamba
            </label>

            <span className="filter-switch__background__contact"></span>
          </div>
          {/* <section className="cities__maps" >
            <input type="button" value="Santa Cruz" />
            <input type="button" value="Cochabamba" />
          </section> */}
          <div className="div__map__contact">
            {selectedOption == "option1" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.5056721460808!2d-63.19250902628458!3d-17.773899714361892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c1ef48c399%3A0xeeccdce63103b937!2sFAB%20LAB%20SANTA%20CRUZ!5e0!3m2!1ses-419!2sbo!4v1730234452886!5m2!1ses-419!2sbo"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.9280117017565!2d-66.2199044!3d-17.3914237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e374a4693f218b%3A0x363bd6b41eb0453c!2sJQ5H%2BCXF%2C%20Colcapirhua!5e0!3m2!1ses-419!2sbo!4v1730220516494!5m2!1ses-419!2sbo"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
