import React from "react";
import * as styles from "./App.module.scss";
import image from "./assets/Murray_ChloeWilliams_Professional.jpg";
import { Header } from "./components/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className={styles.container}>
          <section>
            <h1>Chloe Williams</h1>
            <h3>Software Developer AND Sporty Spice</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
              sapien in metus faucibus faucibus. Cras viverra ipsum et ligula
              maximus, vitae scelerisque metus aliquam. Curabitur eget purus
              consequat, gravida risus eu, convallis sem. Aliquam sed ipsum enim.
            </p>
          </section>
          <img src={image} alt="Chloe Williams" />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
