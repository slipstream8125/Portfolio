//import logo from './logo.svg';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Hobbies} from "./pages/Hobbies";
import {Contact} from './pages/Contact';
import {Skills} from './pages/Skills';
import {Navbar} from './Navbar';
import {AnimatePresence} from "framer-motion";
// import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar/>
		{/*<AnimatePresence>*/}
        <Routes>
			<Route path='/' element={<Home/>} transition="fade" easing="easeInOutQuad" />
			<Route path='/skills' element={<Skills/>}/>
			<Route path='/hobbies' element={<Hobbies/>}/>
			<Route path='/contact' element={<Contact/>}/>
			<Route path='*' element={<h1 className="text-3xl font-bold text-red-500 underline">Error 404 : Page Not Found</h1>}/>
        </Routes>
		{/*</AnimatePresence>*/}
      </Router>
    </div>
  );
}

export default App;
