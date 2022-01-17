import React from 'react';
import './References.css';
import {Link} from 'react-router-dom';

function References() {
    return (
        <section>
        <div className="main_ref_pages_container">
            <div className="main_ref_page main_ref_second">
                <div className="main_ref_image_container">
                    <Link to='/shop' className="main_ref_page_left main_ref_page_layer"></Link>
                    <img src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/041712101250149-gg.jpg?v=1579013164" alt="ref image" />
                </div>
                <span className="main_ref_page_title black-text">Shop now</span>
                <span className="ref_page_arrow black-text"> <i className="material-icons ref_arrow_icon">arrow_downward</i></span>
            </div>
            <div className="main_ref_page main_ref_second">
                <Link to='/acc' className="main_ref_page_right main_ref_page_layer"> </Link>
                <div className="main_ref_image_container">
                    <img src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/4370658680152-qwerty.jpg?v=1579013168" alt="ref image" />
                </div>
                <span className="main_ref_page_title white-text">About Acc</span>
                <span className="ref_page_arrow white-text">  <i className="material-icons ref_arrow_icon">arrow_downward</i></span>
            </div>
        </div>
    </section>
    )
}

export default References
