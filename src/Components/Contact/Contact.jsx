import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contact.json';
import { useForm, ValidationError } from '@formspree/react';
import { Element } from "react-scroll";
const Contact = () => {
  const [state, handleSubmit] = useForm("xyyrvplj")
  return (
    <Element name="contact">
      <section className="contact-us">
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact us
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when I publish
          something new.
        </p>

        <div className="flex" style={{ justifyContent: "space-between" }}>
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input autoComplete="off" required type="email" name="" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your message:</label>
              <textarea required name="" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button className="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>

            {state.succeeded && (
              <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
              >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
            )}
          </form>
          <div className=" animation">
            <Lottie
              className="contact-animation"
              style={{ height: 360 }}
              animationData={contactAnimation}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;