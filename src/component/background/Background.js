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
// 메뉴 버튼 클릭 시 각 메뉴에 맞는 문자열을 Background 컴포넌트에 전송
// Background 컴포넌트는 항상 존재
