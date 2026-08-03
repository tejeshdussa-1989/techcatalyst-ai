function Home() {

  return (
    <div>

      {/* Navigation */}

      <nav>

        <div className="brand">

          <div className="brand-name">
            TechCatalyst <span>AI</span>
          </div>

          <div className="tagline">
            Empowering AI-Ready Business Analysts 🚀
          </div>

        </div>


        <div className="menu">

  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#features">Features</a>
  <a href="#feedback">Feedback</a>
  <a href="#contact">Contact</a>
  <a href="/login">Login</a>
  <a href="/register">Register</a>

</div>

      </nav>


      {/* Hero */}

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Become an AI-Powered Business Analyst
          </h1>

          <p>
            Master Business Analysis, AI Tools and
            Real-World Digital Transformation Skills.
          </p>


          <button>
            Start Your Journey
          </button>

        </div>

      </section>

{/* About */}

<section className="about" id="about">

  <h2>About TechCatalyst AI</h2>

  <p>
    TechCatalyst AI is a community-driven platform built to empower
    Business Analysts with AI skills, interview preparation,
    real-world project experience, career guidance and industry insights.

    Our mission is to help every aspiring and experienced Business Analyst
    become future-ready through learning, collaboration and innovation.
  </p>

</section>

      {/* Features */}

      <section className="features" id="features">

        <h2>
          Everything You Need To Become Industry Ready
        </h2>


        <div className="cards">


          <div className="card">

            <h3>📚 Interview Preparation</h3>

            <p>
              Practice real-world BA interview questions,
              Agile, SQL, API and documentation scenarios.
            </p>

          </div>



          <div className="card">

            <h3>🏦 BFSI Expertise</h3>

            <p>
              Learn banking, insurance, payments and
              digital transformation use cases.
            </p>

          </div>



          <div className="card">

            <h3>🤖 AI Mock Interviews</h3>

            <p>
              Get AI-powered feedback and improve
              your interview confidence.
            </p>

          </div>


        </div>

      </section>



      {/* Why Choose */}

      <section className="why-section">


        <h2>
          Why Choose TechCatalyst AI?
        </h2>


        <div className="why-cards">


          <div className="why-card">

            <h3>🚀 AI Learning</h3>

            <p>
              Become ready for the future of Business Analysis.
            </p>

          </div>


          <div className="why-card">

            <h3>💼 Real Projects</h3>

            <p>
              Learn from industry-based scenarios.
            </p>

          </div>


          <div className="why-card">

            <h3>🎯 Career Growth</h3>

            <p>
              Build skills required by top IT companies.
            </p>

          </div>


          <div className="why-card">

            <h3>🌎 Community</h3>

            <p>
              Connect with aspiring and experienced analysts.
            </p>

          </div>


        </div>


      </section>

{/* Feedback */}

<section className="feedback" id="feedback">

    <h2>We Value Your Feedback</h2>

    <p>
        Help us improve TechCatalyst AI by sharing your valuable feedback.
    </p>

    <div className="feedback-form">

        <input
            type="text"
            placeholder="Your Name"
        />

        <input
            type="email"
            placeholder="Email Address"
        />

        <textarea
            rows="5"
            placeholder="Write your feedback here..."
        ></textarea>

        <button>
            Submit Feedback
        </button>

    </div>

</section>

{/* Contact */}

<section className="contact" id="contact">

    <h2>Get In Touch</h2>

    <p>
        We'd love to hear from you. Feel free to reach out anytime.
    </p>

    <div className="contact-cards">

        <div className="contact-card">

            <h3>📧 Email</h3>

            <p>support@techcatalystai.com</p>

        </div>

        <div className="contact-card">

            <h3>🌐 Website</h3>

            <p>www.techcatalystai.com</p>

        </div>

        <div className="contact-card">

            <h3>📍 Location</h3>

            <p>Hyderabad, India</p>

        </div>

    </div>

</section>

      <footer>

  <h3>TechCatalyst AI</h3>

  <p>Empowering AI-Ready Business Analysts 🚀</p>

  <br />

  <p>
    © 2026 TechCatalyst AI. All Rights Reserved.
  </p>

  <p>
    Designed & Developed by <strong>Dussa Tejesh Kumar</strong>
  </p>

</footer>


    </div>
  );

}


export default Home;