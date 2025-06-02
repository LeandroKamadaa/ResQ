import leandroImg from '../assets/leandro.png';
import leonardoImg from '../assets/leonardo.png';
import pedroImg from '../assets/pedro.png';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o ResQ
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Uma iniciativa para transformar a forma como respondemos a desastres naturais
              através da tecnologia e colaboração comunitária.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-gray-600 mb-4">
                O ResQ nasceu da necessidade de criar uma solução eficiente e acessível
                para coordenação de ajuda em situações de desastres naturais. Nossa missão
                é empoderar comunidades para responder rapidamente a emergências,
                independentemente das condições de infraestrutura.
              </p>
              <p className="text-gray-600">
                Acreditamos que a tecnologia deve ser uma ferramenta de inclusão e
                empoderamento, especialmente em momentos críticos. Por isso, desenvolvemos
                uma plataforma que funciona offline, é fácil de usar e conecta pessoas
                que precisam de ajuda com aquelas que podem ajudar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Nossos Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Acessibilidade para todos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Resiliência em condições adversas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Transparência e confiança</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Inovação com propósito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Colaboração comunitária</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Pedidos de ajuda atendidos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Voluntários ativos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Comunidades atendidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={leandroImg} alt="Leandro Kamada" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Leandro Kamada</h3>
              <p className="text-gray-600">Engenheiro de Software</p>
            </div>
            <div className="text-center">
              <img src={leonardoImg} alt="Leonardo Pierangelli" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Leonardo Pierangelli</h3>
              <p className="text-gray-600">Engenheiro de Software</p>
            </div>
            <div className="text-center">
              <img src={pedroImg} alt="Pedro Arão" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Pedro Arão</h3>
              <p className="text-gray-600">Engenheiro de Software</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre; 