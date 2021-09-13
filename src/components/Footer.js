import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <h3>Warwick Hindu Society</h3>
                    <p className="description">Cupcake ipsum dolor sit amet. I love jelly beans tart cupcake fruitcake sugar plum tart.</p>
                    <ul className="social-media-container">
                        <li><a href="https://www.facebook.com/nhsfwarwick"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/nhsfwarwick/"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.warwicksu.com/societies-sports/societies/hindu/"><i className="fa fa-globe"></i></a></li>
                    </ul>
                    <div className="copyright">
                        <p>Copyright &copy; 2021 Shivani yh this isnt on <span>version control</span> lmao</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;