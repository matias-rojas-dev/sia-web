import React from 'react'
import IMGAboutUs from '../assets/img/img-aboutus.jpg'
const AboutUs = () => {
    return (
        <div className="info-container">
            <div className="info-title">
                <h2>Sobre nosotros</h2>
            </div>
            <div className="info-section-container">
                <div className="info-text">
                    <p>
                        Nunc et tortor pellentesque leo finibus congue. Aenean cursus a est eu sagittis. Morbi ut urna neque. Sed et neque ac velit ultricies mattis. In aliquam semper hendrerit. Proin iaculis tellus in leo cursus pulvinar. Nam euismod mollis erat, ac pellentesque nibh aliquam a. Praesent varius neque non gravida lobortis. Suspendisse neque felis, rhoncus et finibus ut, convallis quis urna. Curabitur lectus quam, euismod id semper ut, laoreet eget est..
                    </p>
                </div>
                <div className="info-img">
                    <img src={IMGAboutUs} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;