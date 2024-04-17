import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { GithubProvider } from './context/github/GithubContext'
export default function App() {
  return (
    <GithubProvider>
    <Router>
      <div className='text-white flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notFound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
    </GithubProvider>
    
  )
}