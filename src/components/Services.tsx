import React from 'react';
import {
  Code,
  Smartphone,
  Phone,
  Info,
  DatabaseZap,
  Layers,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies and responsive design principles.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Integration', 'API Development'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: '24/7 Online Support',
      description:
        'Our dedicated support team is available around the clock to assist you—anytime, anywhere.',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Container Orchestration'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Info className="w-7 h-7" />,
      title: 'Consultant',
      description:
        'Our consultants work closely with your team to ensure smooth implementation, system optimization, and ongoing success.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <DatabaseZap className="w-7 h-7" />,
      title: 'Implementer',
      description:
        'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Data Analytics', 'Predictive Models', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Digital Transformation',
      description:
        'Our skilled implementers ensure that system deployment is smooth, accurate, and tailored to your hospital’s real-world workflows.',
      features: ['Process Automation', 'Legacy System Migration', 'Digital Strategy', 'Change Management'],
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
