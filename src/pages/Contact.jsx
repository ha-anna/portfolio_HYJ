import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("message")) || {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }
  );

  const form = React.useRef();

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  React.useEffect(() => {
    localStorage.setItem("message", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <h2 className="page-title border-bottom">Contact</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact-form border-bottom"
      >
        <label htmlFor="first-name">
          First Name
          <input
            id="first-name"
            type="text"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </label>
        <label htmlFor="last-name">
          Last Name
          <input
            id="last-name"
            type="text"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            onChange={handleChange}
            name="message"
            value={formData.message}
          />
        </label>
        <button className="standard-button">Submit</button>
      </form>
      <div className="address">
        <h3>STUDIO SISEON</h3>
        <address>
          aleja Niepodległosci 76/78 <br /> Warszawa, mazowieckie, 02-607
        </address>
      </div>
    </>
  );
}

export default Contact;
