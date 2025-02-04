import React from 'react'
import Header from './components/Header/Header.jsx'
import MobileFooter from './components/Footer/Footer'
import Main from './components/Main/Main.jsx'
import { useIsMobileView } from './utils/utils'
import './App.css'

function App() {
  const isMobileView = useIsMobileView()

  return (
    <div className="App">
      <Header />
      <Main />
      {isMobileView && <MobileFooter />}
<<<<<<< HEAD
     
=======
>>>>>>> 6ab30ef9520c67b93a8b6e04c210ce49ec0d90c6
    </div>
  )
}

export default App
