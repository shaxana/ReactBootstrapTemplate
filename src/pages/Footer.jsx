import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './../styles/styles.module.css'
import { Icon } from '@mui/material';

function Footer() {
  return (
  <>
  
  
  <div  className={styles.footerList}>
    <div>
        <span className={styles.footerListSpan}>
        <FacebookIcon/>
        </span>
       
       
    </div>
    <div>
        <span className={styles.footerListSpan}>
        <FacebookIcon/>
        </span>
       
    </div>
    <div>
        <span className={styles.footerListSpan}>
        <FacebookIcon/>
        </span>
      
    </div>
  
</div>
    <p className={styles.footertext}>Copyright © Your Website 2023</p>
</>
  )
}

export default Footer