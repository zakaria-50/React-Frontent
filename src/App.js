import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddParfum from './parfums/AddParfum';
import UpdateParfum  from './parfums/UpdateParfum';
import ViewParfum from './parfums/ViewParfum';
import ParfumStore from './pages/ParfumStore';
import Footer from './layout/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/parfumstore" element={<ParfumStore />} />
          <Route exact path="/addparfum" element={<AddParfum />} />
          <Route exact path="/updateparfum/:id" element={<UpdateParfum />} />
          <Route exact path="/viewParfum/:id" element={<ViewParfum/>} />

        </Routes>
      </Router>
        <Footer/>
    </div>
  );
}

export default App;
