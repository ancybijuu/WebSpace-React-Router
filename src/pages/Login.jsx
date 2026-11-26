function Login() {
  return (
    <section className="login-container">
      <div className="login-card">
        <h1>Welcome Back!</h1>

        <p>Login to your account</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? Sign up
        </p>
      </div>
    </section>
  );
}

export default Login;