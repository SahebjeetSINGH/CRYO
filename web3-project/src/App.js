import './App.css';
import {Route , Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Collection from '../src/pages/Collections'
import Team from './pages/Team';
import MainCard from './components/MainCard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Collections' element={<Collection/>}></Route>
        <Route exact path='/team' element={<Team/>}></Route>
        <Route exact path='/itemDetail' element={<MainCard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
