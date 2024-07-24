import { Dumbbell } from 'lucide-react';
import React from 'react'

const Trainers = () => {
  
    const trainerData = [
        {
          id: 1,
          trainerImg: "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Dr. John Smith",
          role: "Body Building Coach",
        },
        {
            id: 2,
            trainerImg: "https://images.pexels.com/photos/23880157/pexels-photo-23880157/free-photo-of-hombre-deporte-joven-neumatico.jpeg",
            name: "Prof. Enzo Heredia",
            role: "Gym Trainer",
          },
          {
            id: 3,
            trainerImg: "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s",
            name: "Mrs. Lilly Doe",
            role: "Prof. fitness coach",
          },
          {
            id: 4,
            trainerImg: "https://images.pexels.com/photos/6787217/pexels-photo-6787217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Sofia Ramos",
            role: "Prof. Yoga coach",
          },
      ];
  
    return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-orange-400" />
       Entrenadores Capacitados 
      </h6>
      <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
       {trainerData.map((data) =>(
       <div key={data.id} className='lg:w-[23%] md:-w[48%] sm:w-[48%] w-full lg:h-5[50vh] md:h-[53vh] sm:h-[58vh] h-[60] rounded-xl overflow-hidden relative'>
        <img src={data.trainerImg} alt="trainer image" className='w-full h-full object-cover'/>
        <div className='w-full h-auto bg-orange-900/40 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col'>
        <h1 className='text-xl text-white font-semibold'>
        {data.name}
        </h1>
        <p className='text-sm text-white'> {data.role}</p>
        </div>
        </div>
       ))}
      </div>
    </div>
    </>
  )
}
export default Trainers