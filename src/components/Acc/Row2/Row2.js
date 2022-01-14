import React from 'react'
import styles from "./Row2.module.css";
function Row2(){


    return(
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
    )
}
export default Row2;