import { Routes, Route, NavLink } from "react-router-dom";
import Shop from "../Shop/Shop";
import Inspiration from "../Inspiration/Inspiration";
import styles from "./Acc.module.css";
function Acc() {
  return (
      <div className={styles.AccMain}>
          <div className={styles.row1}>
            <div className ={styles.inrow1, styles.row1_text}>
                <h1 className={styles.Acc_row1_h1}>Acc. Jewelry</h1>
                <p>Acc. wants you to feel dressed up everyday. You don't have to grow up from those games you enjoyed as a child. Layer up, look chic and love your life. With minimalism in our mind, we want to make it easy for you to experiment with your style.</p>
            </div>
            <div className ={styles.inrow1, styles.row1_photo}></div>
          </div>
          <div className={styles.row2}>
            <div className={styles.row2_left}>
              <h2>A Look at History</h2>
              <div className={styles.row2_photo1}></div>
              <p>About 5,000 years ago, jewellery-making became a major craft in Mesopotamia. The most significant archaeological evidence comes from the Royal Cemetery of Ur.</p>
            </div>
            <div className={styles.row2_right}>
              <div className={styles.row2_right_buttom}>
                <h2>Since 2014</h2>
                <div className={styles.row2_photo2}></div>
                <p>Most cultures have had a practice of keeping large amounts of wealth stored in the form of jewellery. Numerous cultures store wedding dowries.</p>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <h1 className={styles.row3_h1}>
                 We want to give every woman the means to style her own look with our small decorative items of personal adornment: brooches, rings, necklaces, earrings, pendants, cufflinks, and bracelets.
            </h1>
          </div>
          <div className={styles.row4}>
            <div className={styles.row4_left}>
                <span>Get Inspired</span>
                <div></div>
            </div>
            <div className={styles.row4_right}>
                <span>Shop now</span>
                <div></div>
            </div>
          </div>
      </div>
  )
}

export default Acc;
