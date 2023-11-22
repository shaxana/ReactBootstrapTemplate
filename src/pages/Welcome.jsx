import React from 'react'
import styles from './../styles/styles.module.css'
import { Container } from '@mui/material'
function Welcome() {
  return (
    <section className={styles.welcomeBackground}>
        <Container className={styles.headingWelcome}>
            
    <pre    >Welcome to your next website!</pre>
    <a href="#" className={styles.Welcomebutton}> Download Now</a>
   
        </Container>
    </section>
  )
}

export default Welcome