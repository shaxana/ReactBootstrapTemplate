import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faPen, faThumbsUp, faQuestion, faHeart} from "@fortawesome/free-solid-svg-icons";
import styles from './../styles/styles.module.css'
function Offers() {
  return (
  <section className={styles.offerbackground}>
     <Container className={styles.offersectioncontainer}>
    <div className="heading">
    <h3 className={styles.servicesText}>SERVICES</h3>
    </div>
   <div className={styles.title}>
   <h2>What We Offer</h2>
   </div>
    <div  className={styles.offerList}>
        <div>
            <span className={styles.offerListSpan}>
            <FontAwesomeIcon icon={faMobile} className={styles.offerIcon}/>
            </span>
           
           <h4 className={styles.firstwhitetext} ><strong>Responsive</strong></h4>
            <p className={styles.secondwhitetext}>Looks great on any screen size!</p>
           
        </div>
        <div>
            <span className={styles.offerListSpan}>
            <FontAwesomeIcon icon={faPen} />
            </span>
            <h4 className={styles.firstwhitetext} ><strong>Redesigned</strong></h4>
            <p className={styles.secondwhitetext}>Freshly redesigned for Bootstrap 5.</p>
        </div>
        <div>
            <span className={styles.offerListSpan}>
            <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            <h4 className={styles.firstwhitetext} ><strong>Favorited</strong></h4>
            <p className={styles.secondwhitetext}>Millions of users <FontAwesomeIcon icon={faHeart} />Start Bootstrap!</p>
        </div>
        <div>
            <span className={styles.offerListSpan}>
            <FontAwesomeIcon icon={faQuestion} />
            </span>
            <h4 className={styles.firstwhitetext}><strong>Question</strong></h4>
            <p className={styles.secondwhitetext}>I mustache you a question...</p>
        </div>
    </div>
   </Container>
  </section>
  )
}

export default Offers