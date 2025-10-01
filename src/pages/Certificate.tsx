import React from 'react'
import { useData } from '../context/DataContext';
import { NavLink } from 'react-router-dom';
import FeedSlider from '../components/FeedSlider';

const Certificate: React.FC = () => {
  const { certificationData, colleageAchievementData, feedData } = useData();

  return (
    <section>
      <div className='certificates-body h-screen flex items-center justify-center'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-9xl tracking-[0.1em] orbitron'>ACHIEVEMENTS</h1>
      </div>
      {/* feed slider */}
      <FeedSlider />

      {/* Certifications */}
      <div className='space-y-20 certificates-body h-fit p-24'>
        <h1 className='text-center font-bold orbitron tracking-[0.1em] text-4xl p-5'>Certifications</h1>
        <div className='grid grid-cols-2 gap-24'>
          {
            certificationData.map((item, index) => (
              <div key={index} className='w-full certificate-main hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500'>
                < NavLink to={`/certificate/${item.id}`} className='bg-gray-950 h-full w-full rounded-2xl overflow-hidden'>
                  <img src={item.img} alt={`Certificate ${index + 1}`} className='h-80 w-full' />
                  <div className='p-5 space-y-2'>
                    <p className='tracking-wider'>{item.name}</p>
                    <h2 className='orbitron'>{item.date}</h2>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
      </div>

      {/* clg achievements */}
      <div className='achievement-bg h-fit p-24 space-y-20'>
        <h1 className='text-center text-4xl tracking-[0.1em] orbitron'>College Achievements</h1>
        <ul className='grid grid-cols-2 gap-24 px-24'>
          {
            colleageAchievementData.map((item, index) => (
              <li key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='certificate-main h-full w-full rounded-2xl overflow-hidden'>
                  < NavLink to={`/achievement/${item.id}`} >
                    <img src={item.img} alt={`Achievement ${index + 1}`} className='h-80 w-full' />
                  </NavLink>
                  <div className='p-5 space-y-2'>
                    <p className='tracking-wider'>{item.name}</p>
                    <h2 className='orbitron'>{item.date}</h2>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>


      <div className='achievement-bg h-fit p-24 space-y-20'>
        <h1 className='text-center text-4xl tracking-[0.1em] orbitron'>Feed</h1>
        <div className='grid grid-cols-2 gap-24 px-24'>
          {
            feedData.map((item, index) => (
              <div key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='certificate-main h-full w-full rounded-2xl overflow-hidden'>
                  <img src={item.media} alt="" className='h-80 w-full' />
                  <p className='p-5  tracking-wider'>{item.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>


    </section>
  )
}

export default Certificate;