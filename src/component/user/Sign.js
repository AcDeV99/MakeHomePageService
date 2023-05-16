import { IoIosClose, IoIosMail, IoIosLock, IoIosPerson } from 'react-icons/io';
import '../../css/sign.css';
import { activateComponent } from '../../func/activateComponent.ts';
export default function Sign() {
  return (
    <div className="sign-wrapper" id="sign-wrapper">
      <span
        className="icon-close"
        onClick={() => {
          activateComponent('sign-wrapper', 'active-popup', false);
        }}
      >
        <IoIosClose />
      </span>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <IoIosMail />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosLock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <span
                className="register-link"
                id="register-link"
                onClick={() => {
                  activateComponent('sign-wrapper', 'active', true);
                }}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register" id="register-wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <IoIosPerson />
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosMail />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosLock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account?
              <span
                className="login-link"
                id="login-link"
                onClick={() => {
                  activateComponent('sign-wrapper', 'active', false);
                }}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
