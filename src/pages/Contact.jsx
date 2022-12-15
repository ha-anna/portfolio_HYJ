import React from "react";

function Contact() {
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("message")) || {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }
  );

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }

  React.useEffect(() => {
    localStorage.setItem("message", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <div className="contact">
        <h2 className="page-title border-bottom">Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
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
      </div>
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
