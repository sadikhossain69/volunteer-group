import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AddService from './components/AddService/AddService';
import YouHelped from './components/YouHelped/YouHelped';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/addservice' element={<AddService/>} ></Route>
        <Route path='/event' element={<Events/>} ></Route>
        <Route path='/youhelped' element={<YouHelped/>} ></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
