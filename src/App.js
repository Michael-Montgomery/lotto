// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
