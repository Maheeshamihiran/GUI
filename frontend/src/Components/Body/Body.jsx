import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="content">
          <h1>JOIN FITNEZZ TODAY</h1>
          <p>
            Stay Committed, Stay Strong, And Watch Yourself Grow. Our App Is Designed To Help You Track Your Progress, Reach Your Goals, And Push Your Limits. Whether You're Just Starting Out Or You're A Seasoned Athlete, Every Step You Take Brings You Closer To Your Best Self. Get Inspired, Stay Motivated, And Make Each Workout Count. Your Fitness Journey Starts Here—Let's Crush It Together!
          </p>
          <div className="buttons">
            <Link to="/services" className="btn">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Fitness Class Cards Section */}
      <div className="fitness-classes-container">
      <h2><span className='test'>FITNESS</span> <span className='text'>CLASSES</span></h2>
        <section className="fitness-classes">
       
          <div className="class-card">
            <img src="fitness classes image 2.jpg" alt="Fitness Class 1" />
            <div className="class-info">
              <h3>Flex & Burn Studio</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam, Veritatis!</p>
              <p><strong>2:30 PM</strong> April 22, 2025</p>
              <p><strong>Join Form $15</strong></p>
            </div>
          </div>

          <div className="class-card">
            <img src="fitness classes image3.jpg" alt="Fitness Class 2" />
            <div className="class-info">
              <h3>Power Bootcamp</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam, Veritatis!</p>
              <p><strong>2:30 PM</strong> April 19, 2025</p>
              <p><strong>Join Form $15</strong></p>
            </div>
          </div>
          <div className="class-card">
            <img src="fitness classes image7.jpg" alt="Fitness Class 2" />
            <div className="class-info">
              <h3>HIIT Haven</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam, Veritatis!</p>
              <p><strong>6:30 PM</strong> April 22, 2025</p>
              <p><strong>Join Form $15</strong></p>
            </div>
          </div>

          <div className="class-card">
            <img src="fitness classes image5.jpg" alt="Fitness Class 3" />
            <div className="class-info">
              <h3>ZenStrength Yoga</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam, Veritatis!</p>
              <p><strong>8:30 PM(online)</strong> April 20, 2025</p>
              <p><strong>Join Form $15</strong></p>
            </div>
          </div>
          

        </section>
      </div>

      {/* Featured Classes Section */}
      <section className="featured-classes">
        <h2>FEATURED <span className='text'>CLASSES</span></h2>
        <div className="featured-cards">
          <div className="featured-card">
            <img src="FEATURED CLASSES 5.jpg" alt="Featured Class 1" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="FEATURED CLASSES7.jpg" alt="Featured Class 2" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="FEATURED CLASSES 2.jpg" alt="Featured Class 2" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="FEATURED CLASSES 3.jpg" alt="Featured Class 2" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="FEATURED CLASSES 1.jpg" alt="Featured Class 2" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>
          <div className="featured-card">
            <img src="FEATURED CLASSES 8.jpg" alt="Featured Class 2" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="FEATURED CLASSES 4.jpg" alt="Featured Class 3" />
            <div className="price-overlay">
              <span>$39.99</span>
              <p>Fitness Classes Name Here</p>
            </div>
          </div>
        </div>
      </section>


      <div className="expert-trainers-container">
        <h2><span className='test'>  OUR EXPERT</span> <span className='text'>TRAINERS</span></h2>
        <section className="expert-trainers">
          <div className="trainer">
            <img src="jay-baker.jpg" alt="Trainer 1" />
            <h3>Hawker Hills </h3>
            <p>Female fitness Expert</p>
          </div>
          <div className="trainer">
            <img src="Nandana.jpg" alt="Trainer 2" />
            <h3>Mishael Avarado </h3>
            <p>Certified Personal Trainer -London Private Trainer</p>
          </div>
          <div className="trainer">
            <img src="EXPERT TRAINERS 1.jpg" alt="Trainer 2" />
            <h3>John Smith</h3>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam, Veritatis!</p>
          </div>

          <div className="trainer">
            <img src="shalani thilakarathne.jpg" alt="Trainer 2" />
            <h3>Shalani Thilakarathne</h3>
            <p> Best Female WorkOut Planer & Gym instructor </p>
          </div>
          <div className="trainer">
            <img src="avanro.jpg" alt="Trainer 3" />
            <h3>Jay-Baker</h3>
            <p>Best online Weight palner & fitness Trainer</p>
          </div>
          <div className="trainer">
            <img src="Best online  Gym instructor.jpg" alt="Trainer 3" />
            <h3>Nandana Kulathunga</h3>
            <p>Best online  Gym instructor</p>
          </div>
        </section>
      </div>
      <section className="supplement-classes">
        <h2>SUPPLEMENTS</h2>
        <div className="supplement-cards">
          <div className="supplement-card">
            <img src="Carbamide Forte PRO.png" alt="Supplement 1" />
            <div className="price-overlay">
              <span>$49.99</span>
              {/* <p>Carbamide Forte PRO</p> */}
            </div>
            <div className="supplement-info">
              <p><strong>FAT BURNER & SLIMMING TABLETS FOR WEIGHT LOSS FOR WOMEN & MEN </strong>- Our Fat Burner supplement is power-packed with 2155.2mg of our premium fat burning complex ...</p>
            </div>
          </div>

          <div className="supplement-card">
            <img src="Carbamide Forte ZMA and Zinc Supplement for Men  Zinc and Magnesium S copy.webp" alt="Supplement 2" />
            <div className="price-overlay">
              <span>$19.99</span>
              {/* <p>Carbamide Forte ZMA</p> */}
            </div>
            <div className="supplement-info">
              <p><strong>Our ZMA</strong> tablets aid in post-workout emuscle recovery and endurance, helping you recover faster and perform better with each workout session.</p>
            </div>
          </div>

          <div className="supplement-card">
            <img src="OPTI-MEN-150.jpg" alt="Supplement 3" />
            <div className="price-overlay">
              <span>$39.99</span>
              {/* <p>OPTI-MEN-150</p> */}
            </div>
            <div className="supplement-info">
              <p><strong>Multi-Vitamin for Active Men </strong>· Supports Cellular Energy & Metabolism – B-Vitamins Support the Breakdown and Transport of Nutrients¹ · Supports Muscle Health</p>
            </div>
          </div>
          
          <div className="supplement-card">
            <img src="Omega-3-example-fatty-acid-pills-supplement.webp" alt="Supplement 3" />
            <div className="price-overlay">
              <span>$9.99</span>
              {/* <p>OPTI-MEN-150</p> */}
            </div>
            <div className="supplement-info">
              <p><strong>Dietary supplement  Definition, Types, Regulation, & Safety </strong>· Supports Muscle Health</p>
            </div>
          </div>
          
          <div className="supplement-card">
            <img src="Dietary supplement.avif" alt="Supplement 3" />
            <div className="price-overlay">
              <span>$29.99</span>
              {/* <p>OPTI-MEN-150</p> */}
            </div>
            <div className="supplement-info">
              <p><strong>The Skinny Guy's Guide to Gaining Weight With Protein Powder 2022</strong>· Supports Cellular Energy & Metabolism · </p>
            </div>
          </div>
         
          
          


         < div className="supplement-card">
            <img src="Protein supplement1.jpeg" alt="Supplement 2" />
            <div className="price-overlay">
              <span>$29.99</span>
              {/* <p>Protein supplement</p> */}
            </div>
            <div className="supplement-info">
              <p>The 5 Best Vitamin Brands for Safety and Quality | livestrong</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Body;