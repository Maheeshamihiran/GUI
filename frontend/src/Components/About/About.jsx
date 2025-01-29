import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="login-box-1">
        <h2 className='HEading'>It starts with movement</h2>
        <p>
        We believe movement is at the core of what it means to feel healthy, to feel alive, To
         engage in the human experience. We believe every step, jump, or lap puts people on the
          path toward a more active, and fulfilling life. Whether that means an afternoon walk,
           an invigorating dance class, or a heart-pounding set of squats, movement is vitally
            important. In fact,
        it's so important that we've made it our mission to Get People Moving.
        </p>

      </div>

      {/* New Sections */}
      <div className="about-container">
        <div className="mission-container">
          <img src="fitness classes image3.jpg" alt="Teamwork" className="mission-image" />
          <section className="about-section red-bg">
            <div className="about-text">
              <h1>Our Vision</h1>
              <p className="mission-paragraph">To be the leading nonprofit advocate for achieving health
                 through physical activity and other lifestyle changes by providing accessible NCCA-accredited
                  certifications and scientifically rooted education to fitness professionals and health
                   enthusiasts to significantly impact preventable, inactivity-related lifestyle diseases by
                    2035.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
        </div>
        
        <div className="mission-container">
         
          <section className="about-section dark-bg">
            <div className="about-text">
              <h1>WHY FITNEZZ</h1>
              <p className="mission-paragraph"> FITNEZZ leads the movement towards a healthier population by ensuring everyone has access to
          certified exercise professionals and health coaches who provide leadership, expertise and
          programs to help people achieve their goals. As a founding member of the Coalition for the
          Registration of Exercise Professionals, we work to secure recognition of registered exercise professionals 
          for their distinct roles in medical, health, fitness and sports performance fields.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
          <img src="fitness classes image3.jpg" alt="Teamwork" className="mission-image" />
        </div>
        <div className="mission-container">
          <img src="fitness classes image3.jpg" alt="Teamwork" className="mission-image" />
          <section className="about-section red-bg">
            <div className="about-text">
              <h1>Our Mission</h1>
              <p className="mission-paragraph">To be the leading nonprofit advocate for achieving health through physical activity and other lifestyle changes by providing accessible NCCA-accredited certifications and scientifically rooted education to fitness professionals and health enthusiasts to significantly impact preventable, inactivity-related lifestyle diseases by 2035.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
        </div>

        <div className="mission-container">
         
          <section className="about-section red-bg">
            <div className="about-text">
              <h1>Our Mission</h1>
              <p className="mission-paragraph">To be the leading nonprofit advocate for achieving health through physical activity and other lifestyle changes by providing accessible NCCA-accredited certifications and scientifically rooted education to fitness professionals and health enthusiasts to significantly impact preventable, inactivity-related lifestyle diseases by 2035.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
          <img src="fitness classes image3.jpg" alt="Teamwork" className="mission-image" />
        </div>
        <div className="mission-container">
          <img src="fitness classes image3.jpg" alt="Teamwork" className="mission-image" />
          <section className="about-section red-bg">
            <div className="about-text">
              <h1>Our Mission</h1>
              <p className="mission-paragraph">To be the leading nonprofit advocate for achieving health through physical activity and other lifestyle changes by providing accessible NCCA-accredited certifications and scientifically rooted education to fitness professionals and health enthusiasts to significantly impact preventable, inactivity-related lifestyle diseases by 2035.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
}

export default About;