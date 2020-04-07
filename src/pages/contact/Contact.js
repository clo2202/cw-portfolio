import React from "react";
import * as styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <form className={styles.form}>
      <h1>Get in touch!</h1>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" />
      <label htmlFor="email">Email:</label>
      <input name="email" type="email" />
      <label htmlFor="message">Message:</label>
      <textarea name="message" rows="10" />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
