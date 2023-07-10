import MainContent from './components/MainContent';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import User from './components/profilePage/UserProfile';
import Jian from './components/profilePage/JianProfile';
import Rj from './components/profilePage/RjProfile';
import Mark from './components/profilePage/MarkProfile';
import Carla from './components/profilePage/CarlaProfile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/enochbook" element={<MainContent />} />
        <Route path="/User" element={<User />}/>
        <Route path="/Jian" element={<Jian />} />
        <Route path="/Rj" element={<Rj/>}/>
        <Route path="/Mark" element={<Mark />} />
        <Route path="/Carla" element={<Carla />} />
      </Routes>
    </>
  );
}

export default App;
