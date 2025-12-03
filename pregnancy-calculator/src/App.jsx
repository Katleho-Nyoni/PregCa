import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calcutator';
import WhenToSex from './pages/WhenToSex';

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/are-we-pregnant', element: <Calculator />},
    {path: '/when-should-we-have-sex', element: <WhenToSex />}
  ]); 

  
  return (
    <div className="App">
      RouterProvider({Router = routes});
    </div>
  );
}

export default App;
