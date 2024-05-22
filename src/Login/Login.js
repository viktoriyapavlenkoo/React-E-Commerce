import './Login.css';



function Login() {
  function forgotAlert() {
    alert('It`s your problem!')
  }
  return (
    <div className="login">
      <div className="container login__container">
        <form action="#" method="POST" className="login-form form">
          <a href="/" className="logo login-form__logo">
            <img src="../images/logo.svg" alt="Logo" />
            Furniro
          </a>
          <label htmlFor="email" className="login-form__label form__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="login-form__input form__input"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password" className="login-form__label form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-form__input form__input"
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="login-form__btn form__btn btn--dark">
            Sing in
          </button>
          <a href="#" className="login-form__link" onClick={forgotAlert}>
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
