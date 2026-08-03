function Register(){

  return(

    <div className="overlay">

      <div className="auth-modal">

        <button className="close-btn">
          ✕
        </button>

        <h2>
          Join TechCatalyst AI 🚀
        </h2>

        <p>
          Become an AI-Ready Business Analyst
        </p>


        <input placeholder="Full Name" />

        <input placeholder="Email Address" />

        <input placeholder="Mobile Number" />


        <select>

          <option>
            Experience Level
          </option>

          <option>
            Fresher
          </option>

          <option>
            1-3 Years
          </option>

          <option>
            3-7 Years
          </option>

          <option>
            7+ Years
          </option>

        </select>


        <input 
          type="password"
          placeholder="Password"
        />


        <button className="auth-button">
          Create Account
        </button>


        <a href="/">
          🏠 Back to Home
        </a>


      </div>

    </div>

  )

}

export default Register;