import React from 'react'
import { CheckSquare, Dumbbell } from 'lucide-react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const PrincingPlan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-orange-400" />
        Plan de Precios
      </h6>
      <div className='w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap' >
        {/*Plan basico*/}
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-orange-600/30 hover:border-orange-600 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer'>
    <h2 className='lg:text-4x md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5'>
    Basic Plan
    </h2>
    <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4x; text-orange-600 font-bold mb-3 tracking-normal'>
    $45.000
    <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal'>
    /Mes
    </span>
    </h1>
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      Todas las Clases Funcionales
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      2 Clases de Yoga
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      1 Clase Electrofitness
    </p>
  </div>
</div>
<PrimaryBtn
    className='w-full flex justify-center px-10 py-3 uppercase rounded-full'>
        Comienza Ya!
    </PrimaryBtn> 
    </div>
    {/*Plan Premiun*/ }
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-orange-600/ rounded-lg border-[6px] border-orange-600 ease-out duration-700 cursor-pointer relative'>
    <div className='absolute -top-6 left-[50%] translate-x-[-50%] bg-orange-600 py-2 px-5 rounded-full text-base font-medium text-white'>
        Recomendado
    </div>
    <h2 className='lg:text-4x md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5'>
    Premiun Plan
    </h2>
    <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4x; text-orange-600 font-bold mb-3 tracking-normal'>
    $80.000
    <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal'>
    /Mes
    </span>
    </h1>
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      Todas las Clases Funcionales
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      2 Clases de Yoga
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      1 Clase Electrofitness
    </p>
  </div>
</div>
<PrimaryBtn
    className='w-full flex justify-center px-10 py-3 uppercase rounded-full'>
        Comienza Ya!
    </PrimaryBtn> 
    </div>
    {/* VIP PLAN*/ }
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-orange-600/30 hover:border-orange-600 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer'>
    <h2 className='lg:text-4x md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5'>
    VIP Plan
    </h2>
    <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4x; text-orange-600 font-bold mb-3 tracking-normal'>
    $120.000
    <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal'>
    /Mes
    </span>
    </h1>
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      Todas las Clases Funcionales
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      2 Clases de Yoga
    </p>
  </div>
  <div className='w-full h-auto flex items-start gap-x-2'>
    <CheckSquare className='w-5 h-5 text-orange-600'/>
    <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
      1 Clase Electrofitness
    </p>
  </div>
</div>
<PrimaryBtn
    className='w-full flex justify-center px-10 py-3 uppercase rounded-full'>
        Comienza Ya!
    </PrimaryBtn> 
    </div>
    </div>
    </div>
    </>
  )
}

export default PrincingPlan
