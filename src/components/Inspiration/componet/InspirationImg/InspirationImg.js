import styles from "./InspirationImg.module.css";
import state from "../../../../helpers/Images/ImgCards";
import React from "react";


function InspirationImg() {
    return (
        <div>
            <div>
                <div className={styles.InspirationMain}>
                    <div className={styles.statePhoto1}>
                        <img src={state[0].img}/>
                    </div>

                    <div className={styles.stateText1}>
                        <h1 className={styles.h1}>Get Inspired</h1> {state[0].description}
                    </div>
                </div>


                <div className={styles.InspirationMain2}>
                    <div>
                        <div className={styles.statePhoto2}>
                            <img src={state[1].img}/>
                        </div>
                        <div> {state[1].description}</div>
                    </div>

                    <div>
                        <div className={styles.statePhoto3}>
                            <img src={state[2].img}/>
                        </div>
                        <div>{state[2].description}</div>
                    </div>
                </div>


                <div className={styles.InspirationMain3}>

                    <div>
                        <div className={styles.statePhoto4}>
                            <img src={state[3].img}/>
                        </div>
                        <div>{state[3].description}</div>
                    </div>

                    <div>
                        <div className={styles.statePhoto5}>
                            <img src={state[4].img}/>
                        </div>
                        <div>{state[4].description}</div>
                    </div>
                </div>

                <div className={styles.InspirationMain4}>
                    <div>
                        <div className={styles.statePhoto6}>
                            <img src={state[5].img}/>
                        </div>
                        <div>
                            {state[5].description}
                        </div>
                    </div>
                </div>

                <div className={styles.InspirationMain5}>
                    <div>
                        <div className={styles.statePhoto7}>
                            <img src={state[6].img}/>
                        </div>
                        <div>{state[6].description} </div>
                    </div>

                    <div>
                        <div className={styles.statePhoto8}>
                            <img src={state[7].img}/>
                        </div>
                        <div>{state[7].description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InspirationImg;