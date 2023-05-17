import { IoIosClose, IoIosMail, IoIosLock, IoIosPerson } from 'react-icons/io';
import '../../css/sign.css';
import { activateComponent } from '../../func/activateComponent.ts';
import { validateSign } from '../../func/validateSign';
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
            <input
              id="login-email"
              type="email"
              required
              onInput={() =>
                validateSign('login-email', 'login-error-email', 'email')
              }
              minLength={5}
              maxLength={20}
            />
            <label>Email</label>
            <span id="login-error-email" className="error_next_box hide">
              5~20자의 영문 소문자, 숫자와 특수기호(_),(-),(@)만 사용
              가능합니다.
            </span>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosLock />
            </span>
            <input
              id="login-password"
              type="password"
              required
              onInput={() =>
                validateSign(
                  'login-password',
                  'login-error-password',
                  'password'
                )
              }
              minLength={8}
              maxLength={16}
            />
            <label>Password</label>
            <span id="login-error-password" className="error_next_box hide">
              8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
            </span>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <span>Forgot Password?</span>
          </div>
          <button id="login-submit" type="submit" className="btn">
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
            <input
              id="register-username"
              type="text"
              onInput={() =>
                validateSign(
                  'register-username',
                  'register-error-username',
                  'username'
                )
              }
              required
              minLength={2}
              maxLength={16}
            />
            <label>Username</label>
            <span id="register-error-username" className="error_next_box hide">
              2~16자의 영문 소문자, 숫자와 한글만 사용 가능합니다.
            </span>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosMail />
            </span>
            <input
              id="register-email"
              type="email"
              onInput={() =>
                validateSign('register-email', 'register-error-email', 'email')
              }
              required
              minLength={5}
              maxLength={20}
            />
            <label>Email</label>
            <span id="register-error-email" className="error_next_box hide">
              5~20자의 영문 소문자, 숫자와 특수기호(_),(-),(@)만 사용
              가능합니다.
            </span>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoIosLock />
            </span>
            <input
              id="register-password"
              type="password"
              onInput={() =>
                validateSign(
                  'register-password',
                  'register-error-password',
                  'password'
                )
              }
              required
              minLength={8}
              maxLength={16}
            />
            <label>Password</label>
            <span id="register-error-password" className="error_next_box hide">
              8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
            </span>
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
