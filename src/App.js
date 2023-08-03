import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';
import { Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Search from './pages/Search';
import Notifications from './pages/Notifications'
import Communities from './pages/Communities'
import DMs from './pages/DMs'
import Profile from './pages/Profile'
import Searching from './pages/Searching';
import Settings from './pages/Settings';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Loading />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/searching' element={<Searching />}/>
        <Route path='/communities' element={<Communities />}/>
        <Route path='/notifications' element={<Notifications />}/>
        <Route path='/messages' element={<DMs />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>

    </div>
  );
}

export default App;
