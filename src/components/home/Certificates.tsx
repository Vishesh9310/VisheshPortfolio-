import React from 'react';
import { useData } from '../../context/DataContext';

const Certificates: React.FC = () => {
  const { certificationData } = useData();
  const topFourData = certificationData.slice(1, 3);

  return (
    <section className="space-y-10 certificates-body h-fit p-6 sm:p-12 md:p-16 lg:p-24">
      <h1 className="text-center font-bold orbitron tracking-[0.1em] text-3xl sm:text-4xl p-3 sm:p-5">
        Certifications
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold orbitron">#Top Certificates</h2>
      <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 lg:grid-cols-2">
        {topFourData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500"
          >
            <div className="certificate-main h-full w-full rounded-2xl overflow-hidden">
              <img
                src={item.img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
              <div className="p-4 sm:p-5 space-y-2">
                <p className="tracking-wider text-sm sm:text-base">{item.name}</p>
                <h2 className="orbitron text-sm sm:text-base">{item.date}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-6 sm:py-10 w-full text-right">
        <a href="/certificate" className="text-xl sm:text-2xl animate-pulse">
          ➤ Show More
        </a>
      </div>
    </section>
  );
};

export default Certificates;

// import React from 'react'
// import { useData } from '../../context/DataContext'

// const Certificates: React.FC = () => {
//   const {certificationData} = useData();
//   const topFourData = certificationData.slice(1,3);

//   return (
//     <section  className='space-y-10 certificates-body h-fit p-24'>
//         <h1 className='text-center font-bold orbitron tracking-[0.1em] text-4xl p-5'>Certifications</h1>
//         <h2 className="text-2xl font-bold orbitron">#Top Certificates</h2>
//         <div className='grid lg:grid-cols-2 md:grid-col-1 gap-24'>
//           {
//             topFourData.map((item, index) => (
//               <div key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500'>
//                 <div className='certificate-main h-full w-full rounded-2xl overflow-hidden'>
//                   <img src={item.img} alt={`Certificate ${index + 1}`} className='h-80 w-full' />
//                   <div className='p-5 space-y-2'>
//                     <p className='tracking-wider'>{item.name}</p>
//                     <h2 className='orbitron'>{item.date}</h2>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//         <div className='py-10 w-full text-right'>
//           <a href='/certificate' className='text-2xl animate-pulse'>➤ Show More</a>
//         </div>
//     </section>
//   )
// }

// export default Certificates;