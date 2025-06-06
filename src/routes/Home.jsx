import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ResQ: Ajuda em Tempos de Crise
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conectando pessoas que precisam de ajuda com voluntários em situações de desastres naturais.
            </p>
            <div className="space-x-4">
              <Link
                to="/cadastrar"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Começar Agora
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Registro Offline</h3>
              <p className="text-gray-600">
                Registre pedidos de ajuda mesmo sem conexão com a internet.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
              <p className="text-gray-600">
                Visualize alertas e pedidos de ajuda geolocalizados em tempo real.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Coordenação Eficiente</h3>
              <p className="text-gray-600">
                Organize e coordene ações de voluntários de forma eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Example Section */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Veja como funciona na prática</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {/* Exemplo 1 */}
            <div className="min-w-[340px] max-w-sm bg-white rounded-lg shadow-lg p-4 flex-shrink-0">
              <img src="/criar_pedido.png" alt="Criar pedido de socorro" className="rounded-md mb-4 w-full h-80 object-contain bg-gray-100" />
              <p className="text-center text-gray-700 font-medium">Criar pedido de socorro</p>
            </div>
            {/* Exemplo 2 */}
            <div className="min-w-[340px] max-w-sm bg-white rounded-lg shadow-lg p-4 flex-shrink-0">
              <img src="/mapa_interativo.png" alt="Visualizar mapa de pedidos" className="rounded-md mb-4 w-full h-80 object-contain bg-gray-100" />
              <p className="text-center text-gray-700 font-medium">Mapa com pedidos próximos</p>
            </div>
            {/* Exemplo 3 */}
            <div className="min-w-[340px] max-w-sm bg-white rounded-lg shadow-lg p-4 flex-shrink-0">
              <img src="/mapa_voluntario.png" alt="Detalhe do pedido para voluntário" className="rounded-md mb-4 w-full h-80 object-contain bg-gray-100" />
              <p className="text-center text-gray-700 font-medium">Detalhe do pedido para voluntário</p>
            </div>
            {/* Exemplo 4 */}
            <div className="min-w-[340px] max-w-sm bg-white rounded-lg shadow-lg p-4 flex-shrink-0">
              <img src="/meus_pedidos.png" alt="Perfil e pedidos do usuário" className="rounded-md mb-4 w-full h-80 object-contain bg-gray-100" />
              <p className="text-center text-gray-700 font-medium">Perfil e pedidos do usuário</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para fazer a diferença?</h2>
          <Link
            to="/cadastrar"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Cadastre-se Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 