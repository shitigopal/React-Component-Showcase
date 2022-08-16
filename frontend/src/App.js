import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import AddCode from './components/AddComponent';
import Register from './components/Signup';
import Browse from './components/Browse';
import Viewer from './components/Viewer';

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
    
        <Routes>
        
        {/* <Route element={<Home></Home>} path="/" />  */}
        {/* <Route element={<Home></Home>} path="homepage" />    */}
        
        <Route element={<Login></Login>} path="/" />  
        <Route element={<Login></Login>} path="Login" />
        <Route element={<Browse />} path="browse" />
        <Route element={<Register />} path="Signup" />
        <Route element={<AddCode />} path="addcode" />
        <Route element={<Viewer></Viewer>}path="/viewer/:id"/>  
      
        {/* <Route element={<Signup></Signup>} path="Signup" /> */}
        </Routes>
        </BrowserRouter>
  );
}

export default App;
