import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: Users, value: '300+', label: 'Clientes Atendidos' },
    { icon: TrendingUp, value: '95%', label: 'Taxa de Sucesso' },
    { icon: Shield, value: '100%', label: 'Confidencialidade' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5E0D13] mb-4">
            Sobre Nosso Escritório
          </h2>
          <div className="w-24 h-1 bg-[#AC8B57] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Somos um escritório de advocacia reconhecido por nossa dedicação, ética profissional 
            e comprometimento com os melhores resultados para nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#5E0D13] to-[#2E0506] p-6 rounded-lg text-center border-2 border-[#AC8B57] hover:scale-105 transition-transform"
              >
                <Icon className="w-12 h-12 text-[#DCC48F] mx-auto mb-4" />
                <div className="text-3xl text-[#AC8B57] mb-2">{stat.value}</div>
                <div className="text-sm text-[#DCC48F]">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl text-[#5E0D13] mb-6">
              Tradição e Excelência Jurídica
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              O escritório Pereira & Silva tem sido um pilar de confiança 
              e excelência no mercado jurídico. Nossos advogados altamente qualificados 
              trabalham incansavelmente para proteger os direitos e interesses de nossos clientes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Especializamos-nos em diversas áreas do direito, oferecendo soluções personalizadas 
              e estratégicas que atendem às necessidades específicas de cada cliente, seja pessoa 
              física ou jurídica.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa missão é fornecer assessoria jurídica de alto nível, pautada pela ética e 
              transparência.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#5E0D13] to-[#2E0506] p-8 rounded-lg border-2 border-[#AC8B57]">
            <h4 className="text-2xl text-[#DCC48F] mb-6">Nossos Valores</h4>
            <ul className="space-y-4">
              {[
                'Ética e integridade profissional',
                'Excelência no atendimento',
                'Compromisso com resultados',
                'Atualização constante',
                'Relacionamento de confiança',
                'Responsabilidade social'
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#AC8B57] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#DCC48F]">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
