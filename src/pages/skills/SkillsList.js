import React, { useState } from "react";
import * as styles from "./Skills.module.scss";
import marketing_logo from "../../assets/marketing-icon.png";
import ux_logo from "../../assets/ux-research.png";
import web_logo from "../../assets/web-icon2.png";
import { Skill } from "../../components";

const Skills = () => {
  const [skillsData] = useState([
    {
      id: 1,
      name: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sapien in metus faucibus faucibus. Cras viverra ipsum et ligula maximus, vitae scelerisque metus aliquam. Curabitur eget purus consequat, gravida risus eu, convallis sem. Aliquam sed ipsum enim",
      image: web_logo,
    },
    {
      id: 2,
      name: "UX Research",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sapien in metus faucibus faucibus. Cras viverra ipsum et ligula maximus, vitae scelerisque metus aliquam. Curabitur eget purus consequat, gravida risus eu, convallis sem. Aliquam sed ipsum enim",
      image: ux_logo,
    },
    {
      id: 3,
      name: "Marketing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sapien in metus faucibus faucibus. Cras viverra ipsum et ligula maximus, vitae scelerisque metus aliquam. Curabitur eget purus consequat, gravida risus eu, convallis sem. Aliquam sed ipsum enim",
      image: marketing_logo,
    },
  ]);

  // const handleDeleteSkill = (id) => {
  //   setSkillsData(currentSkillsData => (
  //     currentSkillsData.filter(skill => skill.id !==id )
  //   ))
  // }

  return (
    <React.Fragment>
      <h1 className={styles.title}>My Skills</h1>
      <article className={styles.container}>
        {skillsData.map(({ id, name, content, image }) => (
          <Skill key={id} name={name} content={content} image={image} />
        ))}
      </article>
    </React.Fragment>
  );
};

export default Skills;
