import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import ScrollToTop from "../components/ScrollToTop";

const CertificateFull: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { certificationData } = useData();

    const certificate = certificationData.find((c) => c.id === Number(id));
    if (!certificate) {
        return (
            <div className="pt-20 text-center text-red-500 text-xl font-semibold">
                certificate not found
            </div>
        );
    }

    return (
        <div className="pt-[10%] px-[4%] sm:px-8 md:px-[16%] lg:px-[2%] max-w-6xl mx-auto space-y-8 pb-10">
            {/* Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={certificate.img} alt={certificate.name} className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"/>
            </div>
            <div className="text-right italic">{certificate.date}</div>

            {/* Heading & Description */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600">
                    {certificate.name}
                </h1>
                <h3 className="text-lg sm:text-xl text-purple-500">{certificate.desc}</h3>
                <p className="leading-relaxed">{certificate.desc}</p>
            </div>

            <ScrollToTop />
        </div>
    );
};

export default CertificateFull;