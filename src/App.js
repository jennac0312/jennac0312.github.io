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
import Message from './pages/Message';
import Tweet from './pages/Tweet';
import OtherProfile from './pages/OtherProfile';


function App() {

  let { clickedMessage, clickedTweet, clickedProfile } = useContext(AppContext)

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
        <Route path={`/messages/${clickedMessage}`} element={<Message />}/>
        <Route path={`/tweet/${clickedTweet?.user?.username}`} element={<Tweet />}/>
        <Route path={`/profile/${clickedProfile?.username}`} element={<OtherProfile />}/>
      </Routes>

    </div>
  );
}

export default App;
