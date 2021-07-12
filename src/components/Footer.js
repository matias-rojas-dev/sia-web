import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div class="container-footer">
                <div class="footer-section">
                    <h3 class="footer-mini-title">Contáctanos</h3>
                    <div>
                        <p><span>Teléfono:</span> +569 00000000 </p>
                        <p><span>Mail:</span> correo@correo.com </p>
                        <p><span>Formulario</span></p>
                    </div>
                </div>
                <div class="footer-section">
                    <h3 class="footer-mini-title">Redes sociales</h3>
                    <div>
                        <Link to='https://www.facebook.com/'>
                            <p className='social-media-p'>Facebook </p>
                        </Link>
                        <Link to="https://www.instagram.com">
                            <p className='social-media-p'>Instagram</p>
                        </Link>
                    </div>
                </div>
                <div class="footer-section">
                    <h3 class="footer-mini-title">Suscríbete a nuestro boletín</h3>
                    <input class="footer-input" placeholder="Tu correo" />
                </div>
                <div class="footer-section">
                    <h3 class="footer-mini-title">Sitio por</h3>
                    <div>
                        <p>Diseñadores </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;