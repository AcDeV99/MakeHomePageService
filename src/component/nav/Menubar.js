import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import '../../css/menubar.css';
import { activateComponent } from '../../func/activateComponent';
import { useDispatch } from 'react-redux';
import { changeBackground } from '../../store/backgroundSlice.js';
export default function Menubar() {
  const dispatch = useDispatch();
  const backgrounds = ['homeGuide', 'board', 'template'];
  return (
    <>
      <header>
        <Link
          to="/"
          className="logo"
          onClick={() => {
            dispatch(changeBackground(backgrounds[0]));
          }}
        >
          HomePEasy
        </Link>
        <nav className="navigation">
          <Link
            to="/guide"
            onClick={() => {
              dispatch(changeBackground(backgrounds[0]));
            }}
          >
            Guide
          </Link>

          <Dropdown className="nav-dropdown">
            <Dropdown.Toggle>Board</Dropdown.Toggle>
            <Dropdown.Menu>
              <Link
                to="/board/announce"
                onClick={() => {
                  dispatch(changeBackground(backgrounds[1]));
                }}
              >
                News
              </Link>
              <br />
              <Link
                to="/board/community"
                onClick={() => {
                  dispatch(changeBackground(backgrounds[1]));
                }}
              >
                Community
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Link
            to="/template"
            onClick={() => {
              dispatch(changeBackground(backgrounds[2]));
            }}
          >
            Template
          </Link>
          <button
            id="btnLogin-popup"
            className="btnLogin-popup"
            onClick={() => {
              activateComponent('sign-wrapper', 'active-popup', true);
            }}
          >
            Login
          </button>
        </nav>
      </header>
    </>
  );
}
