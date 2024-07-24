import { Dumbbell, MoveRight} from 'lucide-react';
import { GrYoga} from 'react-icons/gr'; // Asegúrate de importar todos los íconos necesarios
import { FaRunning } from "react-icons/fa";
import { GiPunchingBag } from "react-icons/gi";
import { SiApplemusic } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";
import { GiStrong } from "react-icons/gi";
import React from 'react';
import TertiaryLink from '../../components/LinkBtn/TertiaryLink';
const Services = () => {
  const serviceData = [
    {
      id: 1,
      serviceImg: "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: GiStrong,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Dumbbell,
      title: "Musculacion",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: GrYoga,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg",
      icon: FaRunning,
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "https://images.pexels.com/photos/4753889/pexels-photo-4753889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: GiPunchingBag,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: "https://images.pexels.com/photos/4090009/pexels-photo-4090009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: SiApplemusic,
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "https://th.bing.com/th/id/R.8bce66f97ea2d32602bbfcec759b369d?rik=R%2b0cLMQC%2f1WWaw&riu=http%3a%2f%2fmarzenabebenek.pl%2fwp-content%2fuploads%2f2019%2f04%2ftrening_ems_jak-dzia%C5%82a.jpg&ehk=0cKpcU5uh79YUZKoEMVFFG43lUIirF4Q%2b%2fA7nJVxUOM%3d&risl=&pid=ImgRaw&r=0",
      icon: TbUserBolt,
      title: "Electrofitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-orange-400" />
        Servicios
      </h6>
      <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
        {serviceData.map((data) => {
          const IconComponent = data.icon;
          return (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[60vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/20 absolute top-0 left-0 z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div className='w-14 h-14 rounded-full bg-orange-600/20 border-4 border-orange-400/80 flex items-center justify-center mb-5'>
                  <IconComponent className='w-5 h-6 text-white' />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">{data.title}</h1>
                <p className="text-base text-white font-normal text-center mb-4">
                  {data.desc}
                </p>
                <TertiaryLink link={data.link} className='rounded-full bg-orange-600/20 border-4 border-orange-400/80 text-white'>
                  Read More <MoveRight className="w-4 h-4" />
                </TertiaryLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
