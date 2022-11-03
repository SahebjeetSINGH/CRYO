import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Collection from '../src/pages/Collections'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Collections' element={<Collection/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
