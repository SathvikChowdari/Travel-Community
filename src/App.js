
import './App.css';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path="/" element={<HomePage/>}/> 
        <Route path="/profile/:username" element={<Profile />} />
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;
