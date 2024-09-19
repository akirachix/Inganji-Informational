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
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A88BD] mb-8">Team</h2>
        <p className="text-xl text-center text-black-600 mb-12">A wealth of experience and expertise.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mb-4 relative overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#5271FF] text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;