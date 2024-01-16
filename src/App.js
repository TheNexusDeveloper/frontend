// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ReservationPage from './pages/ReservationPage'
import ContactInfoPage from './pages/ContactInfoPage'
import ConfirmationPage  from './pages/ConfirmationPage'
// import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
                <Routes>
                    <Route path='/' element={<HomePage/>} exact ></Route>
                    <Route path='/reservation' element={<ReservationPage/>}></Route>
                    <Route path='/contact' element={<ContactInfoPage/>}></Route>
                    <Route path='/confirm' element={<ConfirmationPage/>}></Route>
                </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
