import Rotas from './routes/Routes';
import './App.css';
import { AuthProvider } from './contexts/auth';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </div>
  );
}

export default App;
