import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import img1 from '../assets/clientimg/1.png'
import img2 from '../assets/clientimg/2.png'
import img3 from '../assets/clientimg/3.png'
import img4 from '../assets/clientimg/4.png'
import img5 from '../assets/clientimg/5.png'
import img6 from '../assets/clientimg/6.png'
import img7 from '../assets/clientimg/7.png'
import img8 from '../assets/clientimg/8.png'
import img9 from '../assets/clientimg/9.png'
import img10 from '../assets/clientimg/10.png'
import img11 from '../assets/clientimg/11.png'
import img12 from '../assets/clientimg/12.png'
import img13 from '../assets/clientimg/13.png'
import img14 from '../assets/clientimg/14.png'
import img15 from '../assets/clientimg/15.png'
import img16 from '../assets/clientimg/16.png'
import img17 from '../assets/clientimg/17.png'
import img18 from '../assets/clientimg/18.png'
import img19 from '../assets/clientimg/19.png'
import img20 from '../assets/clientimg/20.png'
import img21 from '../assets/clientimg/21.png'
import img22 from '../assets/clientimg/22.png'
import img23 from '../assets/clientimg/23.png'
import img24 from '../assets/clientimg/24.png'

const clients = [
  { src: img1, alt: 'EGAT' },
  { src: img2, alt: 'BCK' },
  { src: img3, alt: 'Kasemrad' },
  { src: img4, alt: 'Kasemrad' },
  { src: img5, alt: 'KOON' },
  { src: img6, alt: 'Aeonmed' },
  { src: img7, alt: 'Thonburiburana' },
  { src: img8, alt: 'Thonburi' },
  { src: img9, alt: 'THB' },
  { src: img10, alt: 'Thonburi2' },
  { src: img11, alt: 'HANN' },
  { src: img12, alt: 'RUAMPAT' },
  { src: img13, alt: 'RUAMPATCLINIC' },
  { src: img14, alt: 'Pattara' },
  { src: img15, alt: 'pattayainter' },
  { src: img16, alt: 'Muk' },
  { src: img17, alt: 'UTH' },
  { src: img18, alt: 'Rajyindee' },
  { src: img19, alt: 'THAKSIN' },
  { src: img20, alt: 'Theptarin' },
  { src: img21, alt: 'PattayaCity' },
  { src: img22, alt: 'PAT' },
  { src: img23, alt: 'Phuket' },
  { src: img24, alt: 'VGH' },
];

const About = () => {
  const stats = [
    { label: 'Team Members', value: '25+', icon: <Users className="w-6 h-6" /> },
    { label: 'Integrated System', value: 'Fully', icon: <Target className="w-6 h-6" /> },
    // { label: 'Awards Won', value: '15+', icon: <Award className="w-6 h-6" /> },
    // { label: 'Innovations', value: '50+', icon: <Lightbulb className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends and continuously innovate to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in every project, ensuring reliable and scalable solutions.',
      icon: '💎'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners in their digital transformation journey.',
      icon: '🤝'
    },
    {
      title: 'Growth',
      description: 'We focus on solutions that not only meet current needs but also support future growth.',
      icon: '📈'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Modular Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Success Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Modular Software Expertise Co., Ltd. (MSE) is a software house specializing in the development of hospital information systems. Our flagship product, MSE Proteus HIS, is a comprehensive Hospital Information Management System (HIMS) designed and developed by a team of experts with over 30 years of experience in both healthcare and IT systems. The system is tailored to meet the complex needs of modern hospitals, ensuring efficiency, reliability, and seamless integration across all departments.
            </p>

            {/* <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">AWS</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">AI/ML</span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">DevOps</span>
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex text-xl text-gray-400 font-bold justify-center items-center p-8'>Our Clients</div>
        {/* <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt}
              className="h-14 object-contain hover:scale-110 transition duration-300 ease-in-out"
            />
          ))}
        </div> */}
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt}
              className="h-32 shrink-0 object-contain
                   transition-transform duration-300 ease-in-out
                   hover:scale-125 hover:z-10"   /* ← ครอปใหญ่ขึ้น 1.25 เท่า */
            />
          ))}
        </div>

        <style>{`
    @keyframes scroll {
      0%   { transform: translateX(0);   }
      100% { transform: translateX(-100%); }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
  `}</style>
      </div>



    </section>
  );
};

export default About;