import React from 'react';
import ERP01 from '../assets/productimg/ERP01.png';
import ERP02 from '../assets/productimg/ERP02.png';

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

const ERP = () => {
    return (
        <>
            <style>{floatKeyframes}</style>

            <section id="erp" className="py-40 bg-white relative sm:py-12">
                {/* Background blob */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute -top-60 -left-60 w-[32rem] h-[32rem] bg-[#FFF2E0] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse animation-delay-2000"></div>
                    <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto relative px-4 lg:px-8">
                    {/* Desktop layout */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-8">

                        {/* Text Cards */}
                        <div className="hidden lg:block">

                            <div className="order-2 space-y-6 max-w-lg px-2 lg:px-0">
                                <h2
                                    className="text-4xl font-extrabold mb-4 leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                                    style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                                >
                                    ERP System
                                </h2>


                                <div className="bg-white/70 shadow-md rounded-xl p-6">
                                    <p className="text-sm text-[#004A80] leading-relaxed">
                                        Our Hospital ERP System is built to seamlessly integrate your hospital’s core operations—from finance and inventory to HR and procurement—into one powerful platform. By connecting every department, our ERP enhances data accuracy, reduces operational costs, improves resource planning, and empowers hospital leaders to make faster, smarter decisions with confidence.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Phone Images */}
                        <div className="relative mx-auto w-[650px] h-[400px]">
                             {/* รูปหลัง */}
                            <img
                                src={ERP01}
                                alt="App screenshot 2"
                                style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}
                                className="absolute right-[50px] top-0 w-[450px] z-0"
                            />

                            {/* รูปหน้า */}
                            <img
                                src={ERP02}
                                alt="App screenshot 1"
                                style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}
                                className="absolute -left-[10px] top-[120px] w-[400px] z-10"
                            />
                        </div>
                    </div>


                    {/* Mobile/Tablet layout */}
                    <div className="py-20 grid grid-cols-1 md:grid-cols-1 gap-6 px-2 md:px-4 lg:hidden">
                        <h2
                            className="md:col-span-2 text-xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-700 to-blue-500 bg-clip-text text-transparent"
                            style={{ backgroundSize: '200% 200%', backgroundPosition: 'left center' }}
                        >
                            ERP
                        </h2>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <p className="text-sm text-[#004A80] leading-relaxed">
                                Our Hospital ERP System is built to seamlessly integrate your hospital’s core operations—from finance and inventory to HR and procurement—into one powerful platform. By connecting every department, our ERP enhances data accuracy, reduces operational costs, improves resource planning, and empowers hospital leaders to make faster, smarter decisions with confidence.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ERP;
