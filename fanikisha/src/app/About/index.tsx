import React from 'react';
const About = () => {
  return (
    <main id="aboutus" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-['Work_Sans']">
     <h1 className="text-customBlue text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-work-sans font-bold mt-10">
          About Us
        </h1>
      <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 lg:mt-24 space-y-8 lg:space-y-0 lg:space-x-12 lg:flex-row">
        {[
          {
            title: 'Mission',
            content: 'Our mission is to empower dairy farmers in rural Rwanda by providing reliable access to loans that improve their creditworthiness.',
            bgColor: 'bg-[#D9D9D9]',
            textColor: 'text-[#5372FF]',
            contentTextColor: 'text-black',
          },
          {
            title: 'Approach',
            content: [
              'Streamline the loan approval process.',
              'Enhance record-keeping and automate key workflows.',
              'Reduce processing times and minimize errors.',
              'Improve the overall borrowing experience.',
            ],
            bgColor: 'bg-[#2A88BD]',
            textColor: 'text-white',
            contentTextColor: 'text-white',
          },
          {
            title: 'Vision',
            content: 'We envision a thriving dairy sector in rural Rwanda where farmers have consistent access to the financial resources they need to succeed.',
            bgColor: 'bg-[#D9D9D9]',
            textColor: 'text-[#5372FF]',
            contentTextColor: 'text-black',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`w-[90%] sm:w-[80%] md:w-[70%] lg:w-[397px] min-h-[4px] shadow-lg rounded-[59px] ${item.bgColor} p-6 sm:p-8 flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl `}>
            <div className="flex items-center space-x-4 mb-6 ">
              <img
                src={`/media/${item.title.toLowerCase()}.png`}
                alt={`${item.title} Icon`}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[69px] lg:h-[69px] object-contain mt-10"
              />
              <h3 className={`font-bold text-4xl sm:text-4xl md:text-4xl lg:text-[30px] ${item.textColor} mt-10 ` }>
                {item.title}
              </h3>
            </div>
            <div className="flex-grow overflow-y-auto mt-4 ">
              {Array.isArray(item.content) ? (
                <ul className={`list-disc pl-5 text-[22px] mb-11 space-y-2  sm:text-lg md:text-xl min-h-[150px] lg:text-[24px] lg:min-h-[100px]  font-light ${item.contentTextColor}`}>
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className={`sm:text-[20px] md:text-[22px]  lg:text-[24px] text-[22px]  font-light ${item.contentTextColor}`}>
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default About;







