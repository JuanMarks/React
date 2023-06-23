import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home';
import NewEvent from './routes/NewEvent';
import Gerenciar from './routes/Gerenciar'
import UpdateEvent from './routes/Update';
import FeedBack from './routes/Feedback';
import Saibamais from './routes/Saibamais';
import Login from './routes/login';
import Cadastro from './routes/Cadastro';
import useAuth from './hooks/useAuth';


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};



const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {path : '/', element:<Home/> },
      {path : '/new', element:<Private Item={NewEvent}/>},
      {path : '/gerenciar', element:<Private Item={Gerenciar}/>},
      {path: '/meetings/:id', element:<Private Item={UpdateEvent}/>},
      {path: '/feedback/:id', element:<Private Item={FeedBack}/>},
      {path: '/saibamais/:id', element: <Saibamais/>},
      {path: '/login', element: <Login/>},
      {path: '/cadastro', element: <Cadastro/>}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
