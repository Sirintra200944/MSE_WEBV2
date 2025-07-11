import React from 'react';
import App01 from '../assets/productimg/App01.png';
import App02 from '../assets/productimg/App02.png';
import App03 from '../assets/productimg/App03.png';

const floatKeyframes = `
    @keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    }
`;

const floatAnimation = {
    animation: 'float 3s ease-in-out infinite',
};
const floatAnimation2sDelay = {
    animation: 'float 3s ease-in-out infinite',
    animationDelay: '2s',
};
const floatAnimation4sDelay = {
    animation: 'float 3s ease-in-out infinite',
    animationDelay: '4s',
};

const Mobile = () => {
    return (
        <>
            {/* แทรก keyframes ลงใน style tag */}
            <style>{floatKeyframes}</style>

            <section id="mobile" className="py-40 bg-white relative">
                {/* Animated background blobs */}
                <div className="absolute inset-0 overflow-hidden z-10">
                    <div className="absolute -top-60 -right-60 w-[32rem] h-[32rem] bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-60 -left-60 w-[32rem] h-[32rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto relative px-4 lg:px-8">
                    {/* Text Cards Desktop */}
                    <div className="hidden lg:block">
                        <h2
                            className="text-4xl font-extrabold mb-4 leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                            style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                        >
                            Mobile App
                        </h2>
                        <div className="absolute top-18 left-4 z-10 max-w-xs bg-white/40 shadow-md rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-[#004A80] mb-2">Doctor Appointment</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Patients can easily check doctors' schedules and make appointments through the application.
                            </p>
                        </div>

                        <div className="absolute top-4 right-4 z-10 max-w-xs bg-white/40 shadow-md rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-[#004A80] mb-2">New Opportunities</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Telemedicine can connect to business services to offer follow‑up options for patients online.
                            </p>
                        </div>

                        <div className="absolute bottom-4 left-4 z-30 max-w-xs bg-white/40 shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-[#004A80] mb-2">Vaccination History</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Integrate vaccination data so physicians can analyse and diagnose more accurately.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 z-30 max-w-xs bg-white/40 shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-[#004A80] mb-2">Instant Health Record Access</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Users can view treatment history, health information, and lab results directly via the app.
                            </p>
                        </div>
                    </div>

                    {/* Phone Images */}
                    <div className="flex justify-center relative mt-12 mb-12 lg:mt-0">
                        <div className="relative w-[280px] h-[530px]">
                            <img
                                src={App02}
                                alt="App screenshot 2"
                                style={floatAnimation2sDelay}
                                className="absolute -left-[120px] -top-[60px] w-[270px] z-0"
                            />
                            <img
                                src={App01}
                                alt="App screenshot 1"
                                style={floatAnimation}
                                className="absolute -left-2 top-0 w-[270px] z-20"
                            />
                            <img
                                src={App03}
                                alt="App screenshot 3"
                                style={floatAnimation4sDelay}
                                className="absolute left-[120px] top-[60px] w-[270px] z-10"
                            />
                        </div>
                    </div>

                    {/* Text Cards Mobile/Tablet */}
                    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-4 lg:hidden">
                        <h2
                            className="md:col-span-2 text-xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                            style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                        >
                            Mobile App
                        </h2>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#004A80] mb-2">Doctor Appointment</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Patients can easily check doctors' schedules and make appointments through the application.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#004A80] mb-2">New Opportunities</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Telemedicine can connect to business services to offer follow‑up options for patients online.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#004A80] mb-2">Vaccination History</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Integrate vaccination data so physicians can analyse and diagnose more accurately.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#004A80] mb-2">Instant Health Record Access</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Users can view treatment history, health information, and lab results directly via the app.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mobile;
