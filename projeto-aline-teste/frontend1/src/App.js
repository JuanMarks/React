import {Outlet} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import { AuthProvider } from './contexts/auth';


function App() {
  return (
    
      <AuthProvider>
      
      <NavBar/>
      <div className='container'>
        <Outlet/>
      </div>
      </AuthProvider>
    
  );
}

export default App;
