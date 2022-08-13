import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import AddComponent from './components/AddComponent';
import Listing from './components/Listing';

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
    
        <Routes>
        
        {/* <Route element={<Home></Home>} path="/" />  */}
        {/* <Route element={<Home></Home>} path="homepage" />    */}
        
        <Route element={<Login></Login>} path="Login" />  
        <Route element={<AddComponent />} path="addcomponent" />  
        <Route element={<Listing />} path="listing" />  
      
        {/* <Route element={<Signup></Signup>} path="Signup" /> */}
        </Routes>
        </BrowserRouter>
  );
}

export default App;
