import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import Advogado1 from '/assets/Advogado1.jpeg';
import Advogado2 from '/assets/Advogada2.jpeg';


export function Team() {
  const teamMembers = [
    {
      name: 'Dr. Valdison da Anunciação Pereira',
      role: 'Sócio',
      specialty: ['Direito Penal', 'Direito Previdenciário', 'Direito Trabalhista', 'Ato Infracional'],
      image: Advogado1,
      bio: 'OAB/SP 398.623 - Especialista em direito criminal e previdenciário.'
    },
    {
      name: 'Dra. Melissa Carla Silva',
      role: 'Sócia',
      specialty: ['Direito Civil', 'Direito de Família', 'Direitos Humanos', 'Violência Doméstica'],
      image: Advogado2,
      bio: 'OAB/SP 440.900 - Especialista em direito civil e de família.'
    },
   
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5E0D13] mb-4">
            Advogados
          </h2>
          <div className="w-24 h-1 bg-[#AC8B57] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Profissionais altamente qualificados e comprometidos com a excelência jurídica.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden border-2 border-[#AC8B57]/20 hover:border-[#AC8B57] hover:shadow-xl transition-all bg-gradient-to-br from-[#5E0D13] to-[#2E0506]"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E0506] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-br from-[#5E0D13] to-[#2E0506]">
                <h3 className="text-xl text-[#DCC48F] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#AC8B57] mb-2">{member.role}</p>
                <div className="text-[#DCC48F]/80 text-sm mb-3">
                  {Array.isArray(member.specialty) ? (
                    member.specialty.map((spec, i) => (
                      <div key={i}>{spec}</div>
                    ))
                  ) : (
                    member.specialty
                  )}
                </div>
                <p className="text-[#DCC48F]/70 text-sm mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="bg-[#AC8B57] hover:bg-[#DCC48F] text-[#2E0506] p-2 rounded transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-[#AC8B57] hover:bg-[#DCC48F] text-[#2E0506] p-2 rounded transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Description */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Nossa equipe é formada por advogados com sólida formação acadêmica e vasta experiência prática. 
            Estamos constantemente nos atualizando sobre as mudanças legislativas e jurisprudenciais 
            para oferecer o melhor serviço aos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
