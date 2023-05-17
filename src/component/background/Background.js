import { useSelector } from 'react-redux';
import '../../css/background.css';
export default function Background() {
  let background = useSelector((state) => {
    return state.background;
  });
  return (
    <>
      <div
        className="main-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/bg_${background}.jpg)`,
          width: '100vw',
          height: '100vh',
        }}
      ></div>
    </>
  );
}
