import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Catagory from './Pages/Catagory';
import Eectronics from './Pages/Eectronics';
import Layout from './Pages/Layout';
import UserProfile from './Pages/UserProfile';


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path=':UserId' element={<UserProfile/>}/>
            <Route path='Catagory'>
              <Route index element={<Catagory />} />
              <Route path='eectronics' element={<Eectronics />} />
            </Route>
            <Route path='*' element={<NotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
