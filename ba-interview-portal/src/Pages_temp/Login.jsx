function Login(){

  return(
    <div className="overlay">

      <div className="auth-modal">

        <button className="close-btn">
          ✕
        </button>

        <h2>
          Welcome Back 🚀
        </h2>

        <p>
          Continue your AI-powered BA journey
        </p>

        <input placeholder="Email Address" />

        <input 
          type="password"
          placeholder="Password"
        />

        <button className="auth-button">
          Login
        </button>

        <a href="/">
          🏠 Back to Home
        </a>

      </div>

    </div>
  )

}

export default Login;