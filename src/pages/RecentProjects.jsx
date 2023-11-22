import React from 'react'
import { Container } from '@mui/material'
import styles from './../styles/styles.module.css'

function RecentProjects() {
  return (
    <section className={styles.recentsection} >
    <Container className={styles.offersectioncontainer}>
   <div className="heading">
   <h3 className={styles.servicesText}>PORTFOLIO</h3>
   </div>
  <div className={styles.title}>
  <h2>Recent Projects</h2>

  <div className='cards'>
    <div className={styles.firstsection}>
    <div className={styles.card}>
        <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-1.jpg" alt="" />
        <div className={styles.cardtext}>
        <h6 className={styles.firstwhitetext}>STATIONARY</h6>
        <p className={styles.secondwhitetext}>A yellow pencil with envelopes on a clean, blue backdrop!  </p>
        </div>
    </div>
    <div className={styles.card}>
        <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-2.jpg" alt="" />
        <div className={styles.cardtext}>
        <h6 className={styles.firstwhitetext}>ICE CREAM</h6>
        <p className={styles.secondwhitetext}>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone! </p>
        </div>
    </div>
    </div>
    <div className={styles.firstsection}>
    <div className={styles.card}>
        <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-3.jpg" alt="" />
        <div className={styles.cardtext}>
        <h6 className={styles.firstwhitetext}>STRAWBERRIES</h6>
        <p className={styles.secondwhitetext}>Strawberries are such a tasty snack, especially with a little sugar on top!</p>
        </div>
    </div>
    <div className={styles.card}>
        <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-4.jpg" alt="" />
        <div className={styles.cardtext}>
        <h6 className={styles.firstwhitetext}>WORKSPACE</h6>
        <p className={styles.secondwhitetext}>A yellow workspace with some scissors, pencils, and other objects!</p>
        </div>
    </div>
    </div>
  </div>
  </div>
   
  </Container>
 </section>
  )
}

export default RecentProjects