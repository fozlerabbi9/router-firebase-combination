import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './ComponentsFile/AboutUsFile/AboutUs';
import Home from './ComponentsFile/HomeFile/Home';
import Header from './ComponentsFile/HeaderFile/Header';
import Login from './ComponentsFile/LoginFile/Login';
import Register from './ComponentsFile/RegisterFile/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>


    </div>
  );
}

export default App;
