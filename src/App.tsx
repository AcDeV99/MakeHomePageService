import { Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './component/background/Background';
import Menubar from './component/nav/Menubar';
import Sign from './component/user/Sign';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Sign />
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="guide" element={<></>} />
          <Route path="board/announce" element={<></>} />
          <Route path="board/community" element={<></>} />
          <Route path="template" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
