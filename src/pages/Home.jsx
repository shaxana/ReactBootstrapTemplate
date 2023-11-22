import React from "react";
import { Container } from "@mui/material";
import styles from "./../styles/styles.module.css";

function Home() {
  return (
    <header className={styles.background}>
      <Container className={styles.textcenter}>
        <h1 className={styles.heading1}>Stylish Portfolio</h1>
        <h3 className={styles.heading3}>
          A Free Bootstrap Theme by Start Bootstrap
        </h3>
        <a href="#" className={styles.button}>
          Find Out More
        </a>
      </Container>
    </header>
  );
}

export default Home;
