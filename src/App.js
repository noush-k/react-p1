import './App.css';
import Navbar from './components/Navbar/NavbarIndex';
import Sidebar from './components/Sidebar/SidebarIndex';
import Feed from './components/Feed/FeedIndex';
import Rightbar from './components/Rightbar/RightbarIndex';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbars from './components/Navbar2/Navb';

function App() {
  return (
    <Router>
      <Navbars />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </Router>
  );
}

export default App;
