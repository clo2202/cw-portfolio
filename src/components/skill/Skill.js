import React from "react";
import * as styles from "../../../src/pages/skills/Skills.module.scss";

// eslint-disable-next-line react/prop-types
const Skill = ({ name, content, image }) => {
  return (
    <section className={styles.skill}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{content}</p>
      {/* <button onClick={onDelete}>Delete</button> */}
    </section>
  );
};



export default Skill;
