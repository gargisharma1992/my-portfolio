
import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Header />
    <div id="page-body">
      <Routes>
      <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
    
  </div>
  </BrowserRouter>

   
  
  )
}

export default App;
