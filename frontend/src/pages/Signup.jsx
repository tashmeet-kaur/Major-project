import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();

    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("skyguardLoggedIn", "true");
      localStorage.setItem("skyguardUser", email);

      navigate("/dashboard");
    }, 700);
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        {/* Logo */}
        <div className="signup-brand">
          <div className="signup-logo-icon">🛡️</div>
          <span>SkyGuard</span>
        </div>

        {/* Heading */}
        <div className="signup-heading">
          <h1>Create your account</h1>

          <p>
            Join SkyGuard and keep your cloud files secure.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error">
            <span>⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSignup}>

          {/* Name */}
          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                👤
              </span>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />

            </div>

          </div>


          {/* Email */}
          <div className="form-group">

            <label htmlFor="signup-email">
              Email Address
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                ✉️
              </span>

              <input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

            </div>

          </div>


          {/* Password */}
          <div className="form-group">

            <label htmlFor="signup-password">
              Password
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                🔒
              </span>

              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>


          {/* Confirm Password */}
          <div className="form-group">

            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                🔐
              </span>

              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>


          {/* Create Account */}
          <button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Creating account...
              </>
            ) : (
              <>
                Create Account
                <span className="button-arrow">→</span>
              </>
            )}
          </button>

        </form>


        {/* Login */}
        <div className="signup-login">

          <span>Already have an account?</span>

          <Link to="/login">
            Sign in
          </Link>

        </div>


        <div className="login-security-note">
          🔒 Your information is securely protected by SkyGuard.
        </div>

      </div>

    </div>
  );
}

export default Signup;