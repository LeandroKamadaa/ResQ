import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow p-4">
        {/* Aqui vai o conteúdo das suas rotas/pages */}
        <h1 className="text-3xl font-bold text-center mt-10">Bem-vindo ao ResQ</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App