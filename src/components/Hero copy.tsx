import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroVideo from '../assets/vdo/hero2.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0  z-10"></div> */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-60 -right-60 w-[32rem] h-[32rem] bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-60 -left-60 w-[32rem] h-[32rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-left md:text-center text-white drop-shadow-xl">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            <span className="block p-4">ผู้เชี่ยวชาญระบบบริหารจัดการงานโรงพยาบาล</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with Modular Software Expertise
            </span>
          </h1>

          <p className="md:block text-base md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
              เราให้บริการโซลูชันเทคโนโลยีล้ำสมัย ที่ช่วยขับเคลื่อนนวัตกรรม ยกระดับประสิทธิภาพ และเร่งการเปลี่ยนผ่านสู่ยุคดิจิทัลของคุณให้ก้าวไกลยิ่งขึ้น
          </p>

          {/* Optional CTA buttons */}
          {/*
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <button className="group border-2 border-white hover:border-blue-400 text-white hover:text-blue-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 flex items-center">
              <Play className="mr-2 w-5 h-5 group-hover:text-blue-400" />
              Watch Demo
            </button>
          </div>
          */}

          <div className="mt-16 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-white text-left md:text-center">
            <div>
              <div className="text-4xl sm:text-4xl font-bold text-blue-300 mb-2">30 +</div>
              <div className="text-white/90 text-sm sm:text-base">HIS Modules</div>
            </div>
            <div>
              <div className="text-4xl sm:text-4xl font-bold text-purple-300 mb-2">20 +</div>
              <div className="text-white/90 text-sm sm:text-base">ERP Modules</div>
            </div>
            <div>
              <div className="text-4xl sm:text-4xl font-bold text-orange-300 mb-2">30+</div>
              <div className="text-white/90 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
