import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Softwareservices from './components/services/Softwareservices';
import Cloudservices from './components/services/Cloudservices';
import Cybersecurity from './components/services/Cybersecurity'
import Dataanalystics from './components/services/Dataanalystics'
import ITconsultant from './components/services/ITconsultant'
import Networking from './components/services/networking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import C from './components/C';

import PageLoader from './components/PagePreloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {



  return (
    <div>
      
      <Router>
        <PageLoader>
        
      <CustomNavbar />
       
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/about' element = {<About />} />
        <Route path ='/software' element = {<Softwareservices />} />
        <Route path ='/cloud' element = {<Cloudservices />} />
        <Route path ='/cyber' element = {<Cybersecurity />} />
        <Route path ='/data' element = {<Dataanalystics />} />
        <Route path ='/support' element = {<ITconsultant />} />
        <Route path ='/network' element = {<Networking />} />
        <Route path = '/contact' element = {<C/>} />
      </Routes>
      
      <Contact />
      <Footer />
      </PageLoader>
      </Router>
     
    </div>
  );
}

export default App;
