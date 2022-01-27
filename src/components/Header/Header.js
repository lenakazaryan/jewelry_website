import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Bucket from './Bucket';

function Header() {
    useEffect(()=>{
        const M = window.M;
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals, {})
    })

    return ( 
        <header className="white">
            <div className="header_top">
                <Link to='/'>
                    <div className="main_logo_container">
                        <img src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/logo.png?v=1579013171" alt="logo"/>
                    </div>
                </Link>
            </div>   
            <Bucket />   
        </header>
    );
}

export default Header;