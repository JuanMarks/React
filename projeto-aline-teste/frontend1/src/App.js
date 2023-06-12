import {Outlet} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
