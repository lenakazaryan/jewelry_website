import React from 'react'
import styles from "./Row4.module.css";
function Row4(){

    return(
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

    )
}
export default Row4;