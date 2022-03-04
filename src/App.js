
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import  Home  from './pages/Home'
import Voting from './pages/Voting'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='main'>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/vote' element={<Voting/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App