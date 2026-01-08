
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import FundoImg from '../../assets/ImagemFundoHero.png';
import Logo from '../../assets/logo.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={FundoImg} alt="Escritório de advocacia"className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E0506] via-[#5E0D13]/95 to-[#5E0D13]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-8 max-w-5xl">
          
          <img src={Logo} alt="Logo" className="h-56 w-56 flex-shrink-0"/>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-[#DCC48F] mb-3 leading-tight">
              Protegendo seus
              <span className="block text-white mt-1">Direitos e Interesses</span>
            </h1>
            
            <p className="text-base md:text-lg text-[#DCC48F]/90 leading-relaxed">
              Oferecemos soluções jurídicas personalizadas e estratégicas com mais de 10 anos de experiência. Nossa equipe está comprometida com a excelência e os melhores resultados para nossos clientes.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
