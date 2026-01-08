import { Users2, Home, FileText, Gavel } from 'lucide-react';

export function PracticeAreas() {
  const areas = [
    {
      icon: Users2,
      title: 'Direito Trabalhista',
      description: 'Defesa de empresas e trabalhadores em questões trabalhistas e previdenciárias.'
    },
    {
      icon: Home,
      title: 'Direito de Família',
      description: 'Divórcio; inventário; regulamentação de guarda e convivência; alimentos.'
    },
    {
      icon: FileText,
      title: 'Direito Civil',
      description: 'Ações de indenização; contratos; responsabilidade civil; direito do consumidor.'
    },
    {
      icon: Gavel,
      title: 'Direito Penal',
      description: 'Defesa em processos criminais; consultoria e assessoria jurídica penal.'
    },
    {
      icon: Gavel,
      title: 'Direito Previdenciário',
      description: 'Aposentadorias; pensões; auxílios; planejamento previdenciário e revisões de benefícios.'
    },
    {
      icon: Gavel,
      title: 'Direitos Humanos',
      description: 'Combate à discriminação; defesa de minorias; proteção contra abusos de autoridade e garantias fundamentais.'
    }
  ];

  return (
    <section id="areas" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5E0D13] mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-[#AC8B57] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas especializadas em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg border-2 border-[#AC8B57]/20 hover:border-[#AC8B57] hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#5E0D13] to-[#2E0506] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#DCC48F]" />
                </div>
                <h3 className="text-xl text-[#5E0D13] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#5E0D13] to-[#2E0506] p-12 rounded-lg text-center border-2 border-[#AC8B57]">
          <h3 className="text-3xl text-[#DCC48F] mb-4">
            Não encontrou sua necessidade?
          </h3>
          <p className="text-[#DCC48F]/80 mb-6 max-w-2xl mx-auto">
            Nossa equipe está preparada para atender diversas outras demandas jurídicas. 
            Entre em contato para uma consulta personalizada.
          </p>
          <a 
            href="https://wa.me/5511984208056?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#AC8B57] hover:bg-[#DCC48F] text-[#2E0506] px-8 py-3 rounded-lg transition-all font-medium"
          >
            Fale com um Advogado
          </a>
        </div>
      </div>
    </section>
  );
}
