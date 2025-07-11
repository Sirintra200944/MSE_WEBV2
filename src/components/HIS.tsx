import React from 'react';
import HIS01 from '../assets/productimg/HIS01.png';
import HIS02 from '../assets/productimg/HIS02.png';

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

const Dashboard = () => {
    return (
        <>
            <style>{floatKeyframes}</style>

            <section id="dashboard" className="py-40 bg-white relative sm:py-12">
                {/* Background blob */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute -top-60 -right-60 w-[32rem] h-[32rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-60 -left-60 w-[32rem] h-[32rem] bg-[#FFF2E0] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto relative px-4 lg:px-8">
                    {/* Desktop layout */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-8">
                        {/* Phone Images */}
                        <div className="relative mx-auto w-[650px] h-[400px]">
                            {/* รูปหลัง */}
                            <img
                                src={HIS01}
                                alt="App screenshot 2"
                                style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}
                                className="absolute left-15 top-0 w-[450px] z-0"
                            />

                            {/* รูปหน้า */}
                            <img
                                src={HIS02}
                                alt="App screenshot 1"
                                style={{ animation: 'float 3s ease-in-out infinite' }}
                                className="absolute left-[350px] top-[180px] w-[190px] z-10"
                            />
                        </div>
                        {/* Text Cards */}
                        <div className="hidden lg:block">

                            <div className="order-2 space-y-6 max-w-lg px-2 lg:px-0">
                                <h2
                                    className="text-4xl font-extrabold mb-4 leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                                    style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                                >
                                    HIS System
                                </h2>

                                <div className="bg-white/40 shadow-md rounded-xl p-6">
                                    <p className="text-lg font-bold text-[#004A80] leading-relaxed">
                                        EMR : Computerized Physician Order Entry (CPOE) & Clinical Decision Support (CDS)                     
                                   </p>
                                </div>

                                <div className="bg-white/40 shadow-md rounded-xl p-6">
                                    {/* <h2 className="text-2xl font-bold text-[#004A80] mb-2">Doctor Appointment</h2> */}
                                    <p className="text-sm text-[#004A80] leading-relaxed">
                                        Transform the way your hospital works with our all-in-one Hospital Information System (HIS). From patient records to clinical workflows and admin tasks, our platform brings everything together—boosting efficiency, minimizing errors, and putting patient safety at the center of care.                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Mobile/Tablet layout */}
                    <div className="py-20 grid grid-cols-1 md:grid-cols-1 gap-6 px-2 md:px-4 lg:hidden">
                        <h2
                            className="md:col-span-2 text-xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                            style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                        >
                            Dashboard
                        </h2>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            {/* <h2 className="text-xl font-bold text-[#004A80] mb-2">Doctor Appointment</h2> */}
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Transform the way your hospital works with our all-in-one Hospital Information System (HIS). From patient records to clinical workflows and admin tasks, our platform brings everything together—boosting efficiency, minimizing errors, and putting patient safety at the center of care.                            </p>
                        </div>
                        {/* <div className="bg-white shadow-md rounded-xl p-6">
                            <h2 className="text-xl font-bold text-[#004A80] mb-2">New Opportunities</h2>
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Telemedicine can connect to business services to offer follow‑up options for patients online.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
