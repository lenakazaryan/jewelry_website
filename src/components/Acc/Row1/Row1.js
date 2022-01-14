import React from 'react'
import styles from "./Row1.module.css";
function Row1(){


    return(
        <div className={styles.row1}>
            <div className ={styles.inrow1, styles.row1_text}>
                <h1 className={styles.Acc_row1_h1}>Acc. Jewelry</h1>
                <p>Acc. wants you to feel dressed up everyday. You don't have to grow up from those games you enjoyed as a child. Layer up, look chic and love your life. With minimalism in our mind, we want to make it easy for you to experiment with your style.</p>
            </div>
            <div className ={styles.inrow1, styles.row1_photo}></div>
        </div>
    )
}
export default Row1;