import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calcutator';
import WhenToSex from './pages/WhenToSex';
import './styles/App.css'

const routes = [{
  path: '/', 
  element: <Home />},{
  path: '/are-we-pregnant', 
  element: <Calculator />},{
  path: '/when-should-we-have-sex', 
  element: <WhenToSex />}
  ]; 

  const router = createBrowserRouter(routes);

export default function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}


