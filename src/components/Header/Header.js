import bucket from '../../assets/images/bucket.png';
import './Header.css';


function Header() {``
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        const modals = document.querySelectorAll('.modal');
        const instances = M.Modal.init(modals, {});
    })

    return ( 
        <header className="white">
            <div className="header_top">
                <a href="#">
                    <div className="main_logo_container">
                        <img src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/logo.png?v=1579013171" alt="logo"/>
                    </div>
                </a>
            </div>

            <div className="header_middle">
                <a href="#main_bucket_modal" className="header_bucket_container col 12 offset-l11 right modal-trigger">
                    <div className="header_bucket_image">
                        <img src={bucket} alt="bucket.png" />
                    </div>
                    <div className="header_bucket_counter">
                        <span className="white-text">2</span>
                    </div>
                </a>
            </div>
            
            <div id="main_bucket_modal" className="modal">
                <a href="#!" className="modal-close modal_close_btn waves-effect black-text">
                    <i className="material-icons">close</i>
                </a>
                <div className="modal-content row">
                    <div className="col s12">
                        <h4 className="bucket_modal_title">Shopping cart</h4>
            
                        <div className="bucket_product_list">
                            <div className="bucket_product">
                                <div className="bucket_product_image_container">
                                    <div className="bucket_product_image">
                                        <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/22818050/1454925379.jpg" alt="product image" />
                                    </div>
                                </div>
                                <div className="bucket_product_name">
                                    <p className='left'>Chic yellow gold toggle necklace</p>
                                </div>
                                <div className="bucket_product_delete_icon">
                                    <i className="material-icons right">close</i>
                                </div>
                                <div className="bucket_product_count_container">
                                    <span>QTY: </span>
                                    <span className="bucket_decrease_btn"><i className="fas fa-minus"></i></span>
                                    <span className="bucket_product_count">15</span>
                                    <span className="bucket_increase_btn"><i className="fas fa-plus"></i></span>
                                </div>
                                <div className="bucket_product_price">
                                    <p className="right bold"><span>$</span><span>200.00</span></p>
                                </div>
                            </div>
                            <div className="bucket_product">
                                <div className="bucket_product_image_container">
                                    <div className="bucket_product_image">
                                        <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/22818050/1380372565.jpg" alt="product image" />
                                    </div>
                                </div>
                                <div className="bucket_product_name">
                                    <p className='left'>Chic yellow gold toggle necklace</p>
                                </div>
                                <div className="bucket_product_delete_icon">
                                    <i className="material-icons right">close</i>
                                </div>
                                <div className="bucket_product_count_container">
                                    <span>QTY: </span>
                                    <span className="bucket_decrease_btn"><i className="fas fa-minus"></i></span>
                                    <span className="bucket_product_count bold">15</span>
                                    <span className="bucket_increase_btn"><i className="fas fa-plus"></i></span>
                                </div>
                                <div className="bucket_product_price">
                                    <p className="right bold"><span>$</span><span>200.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="bucket_modal_bottom row">
                            <div className="col s6">
                                <h6 className="bold left">TOTAL</h6>
                            </div>
                            <div className="col s6">
                                <p className="right bold"><span>$</span> <span>400.00</span></p>
                            </div>
                        </div>
                        <p className='left'>Looking for more? <a href="#" className="main_link">Continue shopping</a></p>
                    </div>
                </div>
            </div>            
        </header>
    );
}

export default Header;