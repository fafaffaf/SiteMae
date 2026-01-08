import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Em breve divulgaremos nosso endereço físico.'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99823-7397\n(11) 98420-8056'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'advocaciapereiraesilvasp@gmail.com\nvaldison_2008@hotmail.com\nmelissa.carla@hotmail.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 9h às 18h'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5E0D13] mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[#AC8B57] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo. Entre em contato conosco para agendar uma consulta 
            ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border-2 border-[#AC8B57]/20 shadow-lg">
            <h3 className="text-2xl text-[#5E0D13] mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#AC8B57] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#AC8B57] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#AC8B57] focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#AC8B57] focus:outline-none transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="trabalhista">Direito Trabalhista</option>
                  <option value="familia">Direito de Família</option>
                  <option value="civil">Direito Civil</option>
                  <option value="penal">Direito Penal</option>
                  <option value="assessoria">Assessoria Jurídica</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#AC8B57] focus:outline-none transition-colors resize-none"
                  placeholder="Descreva sua necessidade..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5E0D13] to-[#2E0506] hover:from-[#70522B] hover:to-[#5E0D13] text-[#DCC48F] py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#5E0D13] to-[#2E0506] p-6 rounded-lg border-2 border-[#AC8B57] flex gap-4"
                >
                  <div className="bg-[#AC8B57] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#2E0506]" />
                  </div>
                  <div>
                    <h4 className="text-[#DCC48F] mb-2">{info.title}</h4>
                    <p className="text-[#DCC48F]/80 whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg overflow-hidden border-2 border-[#AC8B57]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <MapPin className="w-12 h-12 text-[#AC8B57]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
