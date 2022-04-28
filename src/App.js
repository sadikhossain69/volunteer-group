import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AddService from './components/AddService/AddService';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/addservice' element={<AddService/>} ></Route>
        <Route path='/donation' element={<Donation/>} ></Route>
        <Route path='/event' element={<Events/>} ></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
