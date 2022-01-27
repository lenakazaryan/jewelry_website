import React from 'react';
import styles from './ContactUs2.module.css';


function ContactUs2() {
    return (

        <div className={styles.contact2}>
            <div className={styles.contact2_text}>
                <h3 className={styles.contact2_h1}>Find us</h3>
                <h4 className={styles.contact2_h3}> USA </h4>
                <p>Headquarters: 119 6th St. NE, Washington D.C., 20002, USA <br/>
                    Call: +12026789002 <br/>
                    E-mail: acc.us@info.com </p>
                <div>
                    <h4 className={styles.contact2_h4}>Stay updated</h4>
                    <input className={styles.contact_inp } type="text" placeholder="  Email" />
                    <button className={styles.contactUs_btn}> Subscribe </button>
                </div>



            </div>
            <div className={styles.contact3}>
                <h3 className={styles.contact3_h3}>Canada </h3>
                <p>Head Office: 8391 Yonge St, Toronto, ON, M4D 2D1, Canada <br/>
                    Call: +14163194018 <br/>
                    E-mail: acc.ca@ucraft.com</p>

            </div>
        </div>
    );
}

export default ContactUs2;