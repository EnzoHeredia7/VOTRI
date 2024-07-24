import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Navigation } from 'swiper/modules';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Hero = () => {
    const swiperData = [
        {
          id: 1,
          bgImg: "https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio-725x353.jpg",
          slogan: "Keep your body",
          title: "Burning",
          desc: "Get ready to burn off some serious fat with our high quality products.",
        },
        {
          id: 2,
          bgImg: "https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/shutterstock_332412113.jpg",
          slogan: "Just Believe In",
          title: "Yourself",
          desc: "We are here to help you achieve your goals.",
        },
        {
          id: 3,
          bgImg: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our high quality products.",
        },
      ];
  return (
    <>
      <div className='w-full h-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-auto"
      >
        {swiperData.map((data) => (

        <SwiperSlide
            key={data.id}
            className='w-full h-[70vh] relative bg-orange-500' style={{
            backgroundImage:`url(${data.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
        >
            <div className='w-full h-full bg-black/40 absolute top-0 left-0 -z-10'></div>
            <div className='w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h5 className='lg:text-4x; md:text-3xl sm:text-2x1 text-2x1 text-orange-300 font-semibold mb-2 uppercase'>{data.slogan}</h5>
                <h1 className='lg:text 8xl md:text-7xl sm:text-5xl text-5xl font-bold text-white mb-4 uppercase'>{data.title}</h1>
                <p className='lg:text-lg md:text-base smtext-base text-base text-gray-300 font-medium mb-6 text-center'>{data.desc}</p>
                <p>
                   <PrimaryBtn className='h-14 mt-5 text-xl font-semibold rounded-full'>Get Started</PrimaryBtn> 
                </p>

            </div>
        
        </SwiperSlide>
        ))}
      </Swiper>
      <div className='w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap'>
    <div className='flex items-center justify-center flex-col lg:w-fit  md:w-[48%] sm:w-[48%] w-full lg:py-7 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer'>
    <h5 className='text-4xl text-orange-400 font-semibold mb-2 uppercase'>
      50+ 
    </h5>
    <p className='text-lg text-orange-400 font-medium'>Sponsor</p>
  </div>
  <div className='flex items-center justify-center flex-col lg:w-fit  md:w-[48%] sm:w-[48%] w-full lg:py-7 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer'>
    <h5 className='text-4xl text-orange-400 font-semibold mb-2 uppercase'>
      50+ 
    </h5>
    <p className='text-lg text-orange-400 font-medium'>Sponsor</p>
  </div>
  <div className='flex items-center justify-center flex-col lg:w-fit  md:w-[48%] sm:w-[48%] w-full lg:py-7 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer'>
    <h5 className='text-4xl text-orange-400 font-semibold mb-2 uppercase'>
      50+ 
    </h5>
    <p className='text-lg text-orange-400 font-medium'>Sponsor</p>
  </div>
  <div className='flex items-center justify-center flex-col lg:w-fit  md:w-[48%] sm:w-[48%] w-full lg:py-7 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer'>
    <h5 className='text-4xl text-orange-400 font-semibold mb-2 uppercase'>
      50+ 
    </h5>
    <p className='text-lg text-orange-400 font-medium'>Sponsor</p>
  </div>
        </div>
      </div>
    </>
  )
}

export default Hero
