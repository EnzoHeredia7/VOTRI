import React from 'react'
import { Dumbbell } from 'lucide-react'

const Popular = () => {

    const exerciseData = [
        {
          id: 1,
          exerciseImg: "https://barbend.com/wp-content/uploads/2022/05/shutterstock_583754929.jpg",
          name: "Elongacion",
          duration: 15,
          sets: 3,
          calories: 100,
        },
        {
          id: 2,
          exerciseImg: "https://i.pinimg.com/originals/35/97/b3/3597b3e343c244585b2a07094523b537.jpg",
          name: "Entrenamientos de Brazos",
          duration: 20,
          sets: 4,
          calories: 150,
        },
        {
          id: 3,
          exerciseImg: "https://pymstatic.com/109810/yoga-ciudad-de-mexico.jpg",
          name: "Clase de Yoga",
          duration: 55,
          sets: 5,
          calories: 250,
        },
        {
          id: 4,
          exerciseImg: "https://blog.centralnutrition.com.br/wp-content/uploads/2023/08/original-099b63042800690627df2ec747edcaf6-1024x683-1.jpg",
          name: "Entrenamiento de Piernas",
          duration: 18,
          sets: 4,
          calories: 120,
        },
      ];



  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-orange-400" />
        Ejercicios Populares 
      </h6>
      <div className='w-full g-auto flex items-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap'>
       {exerciseData.map((data)=>(
        <div key={data.id} className='lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow hover:shadow-orange-900/40 ease-out duration-700 cursor-pointer '>
        <img src={data.exerciseImg} alt="exercise img" 
        className='w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg'
         />
         <div className='w-full h-auto py-4 px-3'>
        <h1 className='text-lg text-white font-semibold mb-1'>
        {data.name}
        </h1>
        <div className='w-full h-auto flex items-center gap-x-2'>
        <p className='text-sm text-gray-300'> {data.duration} min</p>
        <span className='w-1 h-1 rounded-full bg-gray-600'></span>
        <p className='text-sm text-gray-300'> {data.sets} sets </p>
        <span className='w-1 h-1 rounded-full bg-gray-600'></span>
        <p className='text-sm text-gray-300'> {data.calories} calorias </p>
        <span className='w-1 h-1 rounded-full bg-gray-600'></span>
        </div>
         </div>
        </div>
       ))}
      </div>
      </div>
    </>
  )
}

export default Popular
