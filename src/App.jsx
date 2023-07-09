import MainContent from './components/MainContent';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import ProfileCreator from './components/profilePage/ProfileCreator';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/enochbook" element={<MainContent />} />
        <Route path="/ProfileCreator" element={<ProfileCreator />}/>
      </Routes>
    </>
  );
}

export default App;
