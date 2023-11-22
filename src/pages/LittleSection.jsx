import React from 'react'
import styles from './../styles/styles.module.css'
import { Container } from 'react-bootstrap'


function LittleSection() {
  return (
    <section className={styles.offerbackground}>
    <Container className={styles.offersectioncontainer}>
   
  <div className={styles.title}>
  <h2>The buttons below are impossible to resist...</h2>
  </div>
  <a href="#" className={styles.whitebutton}>Click Me!</a>
  <a href="#" className={styles.blackbutton}>Look at Me!</a>
  
  </Container>
 </section>
  )
}

export default LittleSection