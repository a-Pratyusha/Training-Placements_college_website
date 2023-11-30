
import './App.css'

import Coursoul from './components/Coursoul'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Main3 from './components/Main3'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import PastRecruiters from './components/PastRecruiters'
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          <>

            <Coursoul />
            <Marquee />
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
            <PastRecruiters/>
          </>
        } />

        <Route exact path="/register" element={
          <>
            <Registration />
            <Marquee />
            <Main1 />
            <Main2 />
            <Checkout />
            <Main3 />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
