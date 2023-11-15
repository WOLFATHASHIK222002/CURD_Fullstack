import Home from './pages/Home';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Nabar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Addusers from './users/Addusers';
import Editusers from './users/EditUser';
import ViewUser from './users/ViewUser';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/addusers' element={<Addusers/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/edituser/:id" element={<Editusers/>}/>
          <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
