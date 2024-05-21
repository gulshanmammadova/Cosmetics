import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx'
import About from './pages/About/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
<Header/>
<Routes>
        {/* <Route path="/" element={<Home />}> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
       
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
