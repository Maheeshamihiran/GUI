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
          <section className="about-section lightgreen-bg">
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


        
    <div className="what-we-do-container">
      <h2 className="title">WHAT WE DO</h2>
      <div className="columns">
        <div className="column">
          <h3>We Educate</h3>
          <p>ACE certifies thousands of exercise professionals and health coaches every year by assessing their ability to provide safe and effective programs, while elevating the industry by creating innovative continuing education programs that help move careers forward.</p>
        </div>
        <div className="column">
          <h3>We Research</h3>
          <p>ACE commissions, supports and disseminates scientifically-rooted, evidence-based research to evaluate health and fitness programs and practices to ensure that our health and fitness professionals have the latest information and tools to grow their careers.</p>
        </div>
        <div className="column">
          <h3>We Champion</h3>
          <p>ACE brings movement to the masses by advocating for universal access to health and fitness programs and interventions and investing in underserved communities across the nation through outreach, education and expanded access to health and fitness programs.</p>
        </div>
        <div className="column">
          <h3>We Serve</h3>
          <p>ACE serves as America's Authority on Fitness®, moving health and fitness education into the public forum and supporting health and fitness professionals with safe, scientifically-rooted, innovative and effective resources to inspire people to lead healthy, active lives.</p>
        </div>
        <div className="column">
          <h3>We Connect</h3>
          <p>ACE moves people everywhere towards better health — and towards a better quality of life — by connecting them with ACE Certified health and fitness professionals who help them move their goals from a vision to reality.</p>
        </div>
        <div className="column">
          <h3>We Advocate</h3>
          <p>ACE builds meaningful and collaborative relationships with policy makers, industry experts and community leaders to collectively advocate for the power of physical activity as preventative health.</p>
        </div>
      </div>
    </div>
        
        <div className="mission-container">
         
          <section className="about-section red-bg">
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
          <section className="about-section lightgreen-bg">
            <div className="about-text">
              <h1>Our Mission</h1>
              <p className="mission-paragraph">To be the leading nonprofit advocate for achieving health through physical activity and other lifestyle changes by providing accessible NCCA-accredited certifications and scientifically rooted education to fitness professionals and health enthusiasts to significantly impact preventable, inactivity-related lifestyle diseases by 2035.</p>
              <button className="about-button">Leadership →</button>
            </div>
          </section>
        </div>

        <div className="mission-container">
         
          <section className="about-section dark-bg">
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
          <section className="about-section lightgreen-bg">
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