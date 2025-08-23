import React from 'react'
import img from '../assets/1.jpg'
import certificate1 from '../assets/certificate/Screenshot (498).png'
import certificate2 from '../assets/certificate/Screenshot (499).png'
import certificate3 from '../assets/certificate/Screenshot (500).png'
import certificate4 from '../assets/certificate/Screenshot (501).png'
import certificate5 from '../assets/certificate/Screenshot (502).png'
import certificate6 from '../assets/certificate/Screenshot (503).png'
import certificate7 from '../assets/certificate/Screenshot (504).png'
import certificate8 from '../assets/certificate/Screenshot (505).png'
import certificate9 from '../assets/certificate/Screenshot (506).png'
import certificate10 from '../assets/certificate/Screenshot (507).png'
import certificate11 from '../assets/certificate/Screenshot (508).png'
import certificate12 from '../assets/certificate/Screenshot (509).png'
import certificate13 from '../assets/certificate/Screenshot (510).png'
import certificate14 from '../assets/certificate/Screenshot (511).png'
import certificate15 from '../assets/certificate/Screenshot (512).png'
import certificate16 from '../assets/certificate/Screenshot (513).png'
import certificate17 from '../assets/certificate/Postman - Postman API Fundamentals Student Expert - 2024-06-23.png'
import certificate18 from '../assets/certificate/postman.jpg'

const Certificate:React.FC = () => {

  const certificationData = [
    { img: certificate1, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate2, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate3, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate4, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate5, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate6, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate7, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate8, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate9, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate10, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate11, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate12, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate13, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate14, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate15, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate16, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate17, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate18, desc: "hello vishesh", date: "20/12/2025" },
  ];

  const collegeData = [
    { img: certificate11, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate12, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate13, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate14, desc: "hello vishesh", date: "20/12/2025" },
  ];

  const feedData = [
    { img: img, desc: "lorem ipsum dolor, sit amet consectetur adipisicing elit" },
    { img: img, desc: "lorem ipsum dolor, sit amet consectetur adipisicing elit" },
  ]

  return (
    <section>
      <div className='bg-gradient-to-r from-black via-purple-950 to-black h-screen flex items-center justify-center text-white'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-9xl tracking-[0.1em] orbitron'>ACHIEVEMENTS</h1>
      </div>

      {/* Certifications */}
      <div className='space-y-20 text-white bg-gradient-to-r from-black via-purple-950 to-black h-fit p-24'>
        <h1 className='text-center font-bold orbitron tracking-[0.1em] text-4xl p-5'>Certifications</h1>
        <div className='grid grid-cols-2 gap-24'>
          {
            certificationData.map((item, index) => (
              <div key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-xl shadow-purple-500 hover:shadow-cyan-500'>
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
      <div className='text-white bg-[#0e0115] h-fit p-24 space-y-20'>
        <h1 className='text-center text-4xl tracking-[0.1em] orbitron'>College Achievements</h1>
        <ul className='grid grid-cols-2 gap-24 px-24'>
          {
            collegeData.map((item, index) => (
              <li key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='bg-gray-950 h-full w-full rounded-2xl overflow-hidden'>
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
      <div className='text-white bg-gray-950 h-fit p-24 space-y-20'>
        <h1 className='text-center text-4xl tracking-[0.1em] orbitron'>Feed</h1>
        <div className='grid grid-cols-2 gap-24 px-24'>
          {
            feedData.map((item, index) => (
              <div key={index} className='w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500'>
                <div className='bg-gray-950 h-full w-full rounded-2xl overflow-hidden'>
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