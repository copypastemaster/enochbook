import MainContent from './components/MainContent';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/enochbook" element={<MainContent />} />
      </Routes>
    </>
  );
}

export default App;
