import React from 'react'
import certificate1 from '../../assets/certificate/Screenshot (498).png'
import certificate2 from '../../assets/certificate/Screenshot (499).png'

const Certificates: React.FC = () => {
const certificationData = [
    { img: certificate1, desc: "hello vishesh", date: "20/12/2025" },
    { img: certificate2, desc: "hello vishesh", date: "20/12/2025" },
]
  return (
    <section  className='space-y-10 text-white bg-gradient-to-r from-black via-purple-950 to-black h-fit p-24'>
        <h1 className='text-center font-bold orbitron tracking-[0.1em] text-4xl p-5'>Certifications</h1>
        <h2 className="text-2xl font-bold orbitron text-sky-300">#Top Certificates</h2>
        <div className='grid lg:grid-cols-2 md:grid-col-1 gap-24'>
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
        <div className='py-10 w-full text-right'>
          <a href='/certificate' className='text-2xl animate-pulse'>➤ Show More</a>
        </div>
    </section>
  )
}

export default Certificates;