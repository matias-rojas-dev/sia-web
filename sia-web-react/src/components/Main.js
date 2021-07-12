import React from 'react'
import { Link } from 'react-router-dom'
import Featured1 from '../assets/img/featured-1.PNG'
import Featured2 from '../assets/img/featured-2.PNG'
import Featured3 from '../assets/img/featured-3.PNG'
import Featured4 from '../assets/img/featured-4.PNG'
import Footer from './Footer'

const Main = () => {
    return (
        <div>

            <div class="header-imagen">
            </div>
            <div class="container">
                <div class="initial-info">
                    <h2>PRESS ON NAILS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta, iste quam laudantium quos quod
                        possimus est rem repellendus praesentium repudiandae consequatur quidem, pariatur delectus. Eius commodi
                        quae voluptates exercitationem minus rem impedit vitae totam, iste earum vero ipsum. Atque sapiente
                        tempore
                        ad cumque dolore ipsam amet .</p>
                    <button type='button' class="fill">
                        <Link to='/about-us'>
                            Sobre nosotros
                        </Link>
                    </button>
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </div>
                <div class="featured">
                    <h2 class="featured-title">Productos destacados</h2>
                    <hr class="slash-2" />
                    <div class="featured-container-img">
                        <img src={Featured1} />
                        <img src={Featured2} />
                        <img src={Featured3} />
                        <img src={Featured4} />
                    </div>
                </div>
                <div class="more-products">
                    <h2 class=" featured-container-img featured-title">Productos en oferta</h2>
                    <hr class="slash-2" />

                    <div class="more-products-container">
                        <div class="more-products-card">
                            <img src={Featured1} />
                            <p>$00.000</p>
                        </div>
                        <div class="more-products-card">
                            <img src={Featured2} />
                            <p>$00.000</p>
                        </div>
                        <div class="more-products-card">
                            <img src={Featured3} />
                            <p>$00.000</p>
                        </div>
                        <div class="more-products-card">
                            <img src={Featured1} />
                            <p>$00.000</p>
                        </div>
                        <div class="more-products-card">
                            <img src={Featured3} />
                            <p>$00.000</p>
                        </div>
                        <div class="more-products-card">
                            <img src={Featured1} />
                            <p>$00.000</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='parallax'>
            </div>
        </div>

    )
}

export default Main;