import "./Contact.css";
import bgSlider from "./assets/bg1Slider.jpg";

import { useRef } from "react";
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
                  <h3 className="title__contact__items">Correo</h3>{" "}
                  <p className="description__contact__items">
                    Ruiz Cortines 214 PTE Col. <br /> Hercules <br /> Guadalupe,
                    N.L. C.P. 67120
                  </p>{" "}
                </section>
              </li>
              <li className="item__contact">
                <IconPhoneFilled color="#000" size={45} />
                <section>
                  <h3 className="title__contact__items">Teléfono</h3>{" "}
                  <p className="description__contact__items">
                    Monterrey: 814 164 8031 <br /> CDMX: 559 014 6070
                  </p>{" "}
                </section>
              </li>
              <li className="item__contact">
                <IconMailFilled color="#000" size={45} />
                <section>
                  <h3 className="title__contact__items">Correo</h3>{" "}
                  <p className="description__contact__items">
                    procam@gmail.com
                  </p>{" "}
                </section>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
