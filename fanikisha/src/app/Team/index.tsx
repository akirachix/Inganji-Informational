import React from 'react';
import Image from 'next/image';

const team = [
  { name: 'Agnes Ajema', image: '/myimg/agnes.png' },
  { name: 'Fanny Ingabire', image: '/myimg/fanny.jpg' },
  { name: 'Ivy Wanjiku', image: '/myimg/ivy.jpg' },
  { name: 'Akwang Deu', image: '/myimg/deu.jpg' },
  { name: 'Faith Hope Wachira', image: '/myimg/faith.png' },
  { name: 'Raziah Abdullahi', image: '/myimg/raziah.png' },
];

const Team = () => {
  return (
    <section id="team" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h1 className="text-customBlue text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-work-sans font-bold mt-0 md:mt-6">
          Team
        </h1>
        <p className="text-xl text-center text-black-600 mb-12">
          A wealth of experience and expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-40 lg:h-40 xl:w-80 xl:h-80 mb-4 relative overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#5271FF] text-center">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
