import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio'element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
