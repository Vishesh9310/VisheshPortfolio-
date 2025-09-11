import React from 'react'
import img from '../assets/1.jpg'
import { useData } from '../context/DataContext';

const Certificate:React.FC = () => {
  const {certificationData} = useData();

  const feedData = [
    { img: img, desc: "lorem ipsum dolor, sit amet consectetur adipisicing elit" },
    { img: img, desc: "lorem ipsum dolor, sit amet consectetur adipisicing elit" },
  ]

  return (
    <section>
      <div className='certificates-body h-screen flex items-center justify-center'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-9xl tracking-[0.1em] orbitron'>ACHIEVEMENTS</h1>
      </div>

      {/* Certifications */}
      <div className='space-y-20 certificates-body h-fit p-24'>
        <h1 className='text-center font-bold orbitron tracking-[0.1em] text-4xl p-5'>Certifications</h1>
        <div className='grid grid-cols-2 gap-24'>
          {
            certificationData.map((item, index) => (
              <div key={index} className='w-full certificate-main hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500'>
                <div className='bg-gray-950 h-full w-full rounded-2xl overflow-hidden'>
                  <img src={item.img} alt={`Certificate ${index + 1}`} className='h-80 w-full' />
                  <div className='p-5 space-y-2'>
                    <p className='tracking-wider'>{item.desc}</p>
                    <h2 className='orbitron'>{item.date}</h2>
                  </div>
                </div>
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
            certificationData.map((item, index) => (
              <li key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='certificate-main h-full w-full rounded-2xl overflow-hidden'>
                  <img src={item.img} alt={`Certificate ${index + 1}`} className='h-80 w-full' />
                  <div className='p-5 space-y-2'>
                    <p className='tracking-wider'>{item.desc}</p>
                    <h2 className='orbitron'>{item.date}</h2>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      {/* extra */}
      <div className='achievement-bg h-fit p-24 space-y-20'>
        <h1 className='text-center text-4xl tracking-[0.1em] orbitron'>Feed</h1>
        <div className='grid grid-cols-2 gap-24 px-24'>
          {
            feedData.map((item, index) => (
              <div key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='certificate-main h-full w-full rounded-2xl overflow-hidden'>
                  <img src={item.img} alt="" className='h-80 w-full' />
                  <p className='p-5  tracking-wider'>{item.desc}</p>
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


// <div>
//   <h1 className="roboto">This is Roboto</h1>
//   <h1 className="poppins">This is Poppins</h1>
//   <h1 className="montserrat">This is Montserrat</h1>
//   <h1 className="lato">This is Lato</h1>
//   <h1 className="open-sans">This is Open Sans</h1>
//   <h1 className="playfair">This is Playfair Display</h1>
//   <h1 className="merriweather">This is Merriweather</h1>
// </div>
// <div>
//   <h2 className="orbitron">Orbitron - Futuristic</h2>
//   <h2 className="audiowide">Audiowide - Tech Look</h2>
//   <h2 className="syncopate">Syncopate - Wide Modern</h2>
//   <h2 className="rajdhani">Rajdhani - Sleek Interface</h2>
//   <h2 className="exo">Exo - Techno Futuristic</h2>
//   <h2 className="quantico">Quantico - Military Digital</h2>
//   <h2 className="share-tech-mono">Share Tech Mono - Terminal</h2>
//   <h2 className="major-mono">Major Mono Display - Monospace Sci-Fi</h2>
// </div>