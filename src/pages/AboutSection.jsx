import React from 'react'
import styles from './../styles/styles.module.css'
import { Container } from '@mui/material'
function AboutSection() {
  return (
    <Container className={styles.textcenter}>
        <h2 className={styles.heading2}>Stylish Portfolio is the perfect theme for your next project!</h2>
        <p className={styles.ptext}>This theme features a flexible, UX friendly slidebar menu and stock photos from our friends at <a href='#'>Unsplash</a>!        </p>
        <a href="#" className={styles.blackButton}>What We Offer</a>
    </Container>
  )
}

export default AboutSection