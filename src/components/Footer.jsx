import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ResQ</h3>
            <p className="text-gray-300">
              Uma solução inovadora para coordenação de ajuda em desastres naturais,
              conectando pessoas que precisam de ajuda com voluntários.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/solucao" className="text-gray-300 hover:text-white">Solução</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white">Sobre</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: contato@resq.com</li>
              <li className="text-gray-300">Telefone: (11) 9999-9999</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ResQ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
