import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import Style
import './App.scss'

//Import Pages
import Home from './pages/Home'
import Apropos from './pages/Apropos/Apropos'
import Logements from './pages/Logements/Logements'
import Error from './pages/Error/Error'

//Import Layouts
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logements/:rentalId" element={<Logements />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App