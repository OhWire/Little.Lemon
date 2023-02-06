import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import BookingPage from "./pages/booking";

function App() {
  return (
    <>
      <Navbar/>
      <div className="">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/booking" element={<BookingPage/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
      </div>
    </>
    
  );
}

export default App;
