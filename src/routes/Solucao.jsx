const Solucao = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa Solução
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Uma plataforma inovadora para coordenação de ajuda em desastres naturais,
              focada em eficiência e acessibilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Registro Offline</h3>
              <p className="text-gray-600 mb-4">
                Nossa tecnologia permite o registro de pedidos de ajuda mesmo sem conexão com a internet.
                Os dados são armazenados localmente e sincronizados automaticamente quando a conexão é restabelecida.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Geolocalização precisa</li>
                <li>Upload de fotos</li>
                <li>Descrição detalhada</li>
                <li>Sincronização automática</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Mapa Interativo</h3>
              <p className="text-gray-600 mb-4">
                Visualize em tempo real todos os pedidos de ajuda em um mapa interativo,
                permitindo uma rápida identificação das áreas mais críticas.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Visualização em tempo real</li>
                <li>Filtros por tipo de ajuda</li>
                <li>Atualização automática</li>
                <li>Navegação offline</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Coordenação de Voluntários</h3>
              <p className="text-gray-600 mb-4">
                Sistema eficiente para gerenciar voluntários e suas ações,
                garantindo uma resposta rápida e organizada.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Lista de missões</li>
                <li>Sistema de check-in</li>
                <li>Comunicação em tempo real</li>
                <li>Relatórios de progresso</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Interface Intuitiva</h3>
              <p className="text-gray-600 mb-4">
                Design focado em usabilidade, garantindo que qualquer pessoa possa
                utilizar o sistema, mesmo com pouca experiência tecnológica.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Design responsivo</li>
                <li>Navegação simplificada</li>
                <li>Ícones intuitivos</li>
                <li>Suporte a múltiplos idiomas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Resposta Rápida</h3>
              <p className="text-gray-600">
                Ação imediata em situações de emergência
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Resiliência</h3>
              <p className="text-gray-600">
                Funciona mesmo em condições adversas
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-gray-600">
                Fortalecimento da ação comunitária
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucao; 