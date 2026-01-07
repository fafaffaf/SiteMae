
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/assets/image.png"
          alt="Escritório de advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E0506] via-[#5E0D13]/95 to-[#5E0D13]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#DCC48F] mb-6">
            Protegendo seus
            <span className="block text-white mt-2">Direitos e Interesses</span>
          </h1>
          
          <p className="text-xl text-[#DCC48F]/90 mb-8 leading-relaxed">
            Oferecemos soluções jurídicas personalizadas e estratégicas com mais de 10 anos de experiência.
            Nossa equipe está comprometida com a excelência e os melhores resultados para nossos clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#AC8B57] hover:bg-[#DCC48F] text-[#2E0506] px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              Agende uma Consulta
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-[#AC8B57] text-[#DCC48F] hover:bg-[#AC8B57]/10 px-8 py-4 rounded-lg transition-all">
              Conheça Nossas Áreas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
