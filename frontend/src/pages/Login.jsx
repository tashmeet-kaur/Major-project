import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);

    // Frontend-only authentication for now
    setTimeout(() => {
      localStorage.setItem("skyguardLoggedIn", "true");
      localStorage.setItem("skyguardUser", email);

      navigate("/dashboard");
    }, 700);
  };

  return (
    <div className="auth-page">

      {/* Left Side */}
      <div className="auth-info">

        <div className="brand">
          <div className="brand-icon">🛡️</div>
          <span>SkyGuard</span>
        </div>

        <div className="auth-info-content">

          <span className="security-badge">
            🔒 Secure Cloud Storage
          </span>

          <h1>
            Protect your files.
            <br />
            <span>Secure your cloud.</span>
          </h1>

          <p>
            SkyGuard provides secure cloud file storage, intelligent
            monitoring, and real-time security protection for your data.
          </p>

          <div className="security-features">

            <div className="security-feature">
              <div className="feature-icon">🔐</div>
              <div>
                <strong>Encrypted Storage</strong>
                <span>Your files stay protected.</span>
              </div>
            </div>

            <div className="security-feature">
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>Threat Detection</strong>
                <span>Monitor suspicious activities.</span>
              </div>
            </div>

            <div className="security-feature">
              <div className="feature-icon">📊</div>
              <div>
                <strong>Security Monitoring</strong>
                <span>Stay informed about your system.</span>
              </div>
            </div>

          </div>

        </div>

        <div className="auth-info-footer">
          © 2026 SkyGuard. Secure cloud file management.
        </div>

      </div>


      {/* Right Side */}
      <div className="auth-form-section">

        <div className="auth-card">

          <div className="mobile-brand">
            <div className="brand-icon">🛡️</div>
            <span>SkyGuard</span>
          </div>

          <div className="auth-heading">
            <h2>Welcome back</h2>
            <p>Sign in to access your secure dashboard.</p>
          </div>

          {error && (
            <div className="auth-error">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉️
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                />

              </div>

            </div>


            {/* Password */}
            <div className="form-group">

              <div className="password-label-row">
                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => alert("Password recovery will be connected later.")}
                >
                  Forgot password?
                </button>
              </div>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>


            {/* Remember Me */}
            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />

                <span>Remember me</span>

              </label>

            </div>


            {/* Login */}
            <button
              type="submit"
              className="auth-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>

          </form>


          <div className="auth-divider">
            <span>New to SkyGuard?</span>
          </div>


          <Link
            to="/signup"
            className="create-account-button"
          >
            Create an Account
          </Link>


          <div className="login-security-note">
            🔒 Your connection is protected and your data is encrypted.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;