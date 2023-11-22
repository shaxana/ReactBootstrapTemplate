import { useState } from 'react'
import Home from './pages/Home'
import FadeMenu from './components/FadeMenu'
import AboutSection from './pages/AboutSection'
import Offers from './pages/Offers'
import Footer from './pages/Footer'
import Welcome from './pages/Welcome'
import RecentProjects from './pages/RecentProjects'
import LittleSection from './pages/LittleSection'
import Map from './pages/Map'
import styles from './styles/styles.module.css'
function App() {
  

  return (
    <>

<Home/>
<FadeMenu/>
<AboutSection/>
<Offers/>
<Welcome/>
<RecentProjects/>
<LittleSection/>
<Map/>
<Footer/>
    </>
  )
}

export default App
