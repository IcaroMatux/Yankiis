import React from 'react'
import Navbar from './Componentes/Navbar'
import Yankii from './Componentes/Yankii'
import About from './Componentes/About/About'
import Momentos from './Componentes/momentos'
import OndeEstamos from './Componentes/onde-estamos'
import Contato from './Componentes/contato'
import Footer from './Componentes/footer'



const App = () => {
  return (
    < >
      <Navbar />
      <Yankii />
      <div className='caixa'>
        <About />
        <Momentos />
        <OndeEstamos />
        <Contato />
        <Footer />
      </div>
    </>
  )
}

export default App