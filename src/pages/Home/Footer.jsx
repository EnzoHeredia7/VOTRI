import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, MapPin, Phone } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
   <div className='w-full h-auto flex items-center justify-center bg-black/30 flex-col py-5 lg:px-24 md:px-16 sm:px-6 px-4'>
        <div className='w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap'>
          <div className='lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center items-center flex-col justify-center'>
            <Link className="w-fit h-auto text-3xl text-orange-500 font-semibold tracking-[0.05rem] flex items-end gap-x-1 relative mb-3">
              V<span className="text-xl font-bold text-gray-300">O</span>TRI
              <Dumbbell className="w-5 h-4 text-orange-500 -rotate-45 absolute top-0 left-[35.5%] translate-x-[-50%]" />
            </Link>
            <div className='w-full h-auto space-y-2'>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer'>
            <MapPin className='w-5 h-5'/>
            <p className='text-base'> Av. Sta Fe 1401 Martínez Buenos Aires 1638</p>
            </div>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer'>
            <Phone className='w-5 h-5'/>
            <p className='text-base'> 011 2753-7145</p>
            </div>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer'>
            <Instagram className='w-5 h-5'/>
            <p className='text-base'> https://www.instagram.com/votri.fit/</p>
            </div>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer'>
            <FaTiktok className='w-5 h-5'/>
            <p className='text-base'> Votri.fit</p>
            </div>
            </div>
          </div>
          <div className='lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex otems-center lg:justify-end md:justify-end sm:justify-center justify-center flex-wrap gap-5'>
            <div className='lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center'>
            <h2 className='text-lg text-gray-200 font-meduium mb-4'> 
            Servicios
            </h2>
            <div className='w-full h-auto'>
            <ul className='w-full h-auto space-y-2'>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Funcional 
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Electrofitness
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                ThermoBike
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Yoga
            </li>
            </ul>
            </div>
            </div>
            <div className='lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center'>
            <h2 className='text-lg text-gray-200 font-meduium mb-4'>
            Plataformas
            </h2>
            <div className='w-full h-auto'>
            <ul className='w-full h-auto space-y-2'>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Inicio
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Nosotros
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Planes
            </li>
            <li className='w-full h-auto text-gray-400 hover:text-orange-600 ease-out duration-300 cursor-pointer text-center'>
                Clases
            </li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Footer
