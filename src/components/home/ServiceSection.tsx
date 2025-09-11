import React from 'react';
import { useData } from '../../context/DataContext';

const ServiceSection: React.FC = () => {
  const {serviceData} = useData();

  return(
    <div  id="skills" className="h-fit py-20 px-6 sm:px-12 lg:px-24 service-body ">
      <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron'>Services</h2>
      
       <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {serviceData.map((service, index) => {
         const Icon = service.img;
         return (
           <div key={index} className="p-6 sm:p-8 box  rounded-3xl flex flex-col sm:flex-row items-start gap-5 shadow-lg shadow-purple-900 hover:shadow-cyan-900 transition-shadow duration-300">
             <Icon className="h-12 w-12 text-cyan-400 flex-shrink-0" />
             <div className="leading-7 space-y-2">
               <h3 className="font-bold border-b-2  w-fit px-2">{service.heading}</h3>
               <p className="text-sm sm:text-base">{service.about}</p>
             </div>
           </div>
         );
       })}
     </div> 
    </div>
  );
};

export default ServiceSection;