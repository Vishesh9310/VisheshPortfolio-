import React from 'react';
import { useData } from '../context/DataContext';
import { NavLink } from 'react-router-dom';
import FeedSlider from '../components/FeedSlider';

const Certificate: React.FC = () => {
  const { certificationData, colleageAchievementData } = useData();

  return (
    <section>
      {/* Hero Section */}
      <div className="certificates-body h-screen flex items-center justify-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl tracking-[0.1em] orbitron text-center">
          ACHIEVEMENTS
        </h1>
      </div>

      {/* Feed Slider */}
      <div className='h-fit'>
        <FeedSlider />
      </div>

      {/* Certifications */}
      <div className="space-y-16 certificates-body h-fit p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
        <h1 className="text-center font-bold orbitron tracking-[0.1em] text-3xl sm:text-4xl md:text-5xl p-2 sm:p-5">
          Certifications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {certificationData.map((item, index) => (
            <div
              key={index}
              className="w-full certificate-main hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500"
            >
              <NavLink
                to={`/certificate/${item.id}`}
                className="bg-gray-950 h-full w-full rounded-2xl overflow-hidden block"
              >
                <img
                  src={item.img}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
                <div className="p-4 sm:p-5 space-y-2">
                  <p className="tracking-wider text-sm sm:text-base">{item.name}</p>
                  <h2 className="orbitron text-sm sm:text-base">{item.date}</h2>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* College Achievements */}
      <div className="achievement-bg h-fit p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 space-y-16">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] orbitron sm:my-[10%]">
          College Achievements
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-0 sm:px-4 md:px-8">
          {colleageAchievementData.map((item, index) => (
            <li
              key={index}
              className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500"
            >
              <div className="certificate-main h-full w-full rounded-2xl overflow-hidden">
                <NavLink to={`/achievement/${item.id}`} className="block">
                  <img
                    src={item.img}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-2xl"
                  />
                </NavLink>
                <div className="p-4 sm:p-5 space-y-2">
                  <p className="tracking-wider text-sm sm:text-base">{item.name}</p>
                  <h2 className="orbitron text-sm sm:text-base">{item.date}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      
    </section>
  );
};

export default Certificate;