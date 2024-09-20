
export default function Product() {
  return (
    <main id="product" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col items-center mt-6">
      <h1 className="text-customBlue text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-work-sans font-bold mt-0 md:mt-6 ">
          Product
        </h1>
        <div className="w-full max-w-[1500px] text-center font-work-sans-light font-light text-[22px] sm:text-[12px] md:text-xl lg:text-2xl xl:text-3xl flex items-center mt-5">
          <p>
            <b className="font-work-sans font-bold text-blue-500">Fanikisha</b> is an innovative platform that simplifies the loan application process for dairy farmers in rural Rwanda, providing reliable access to financing and empowering them to improve their creditworthiness and achieve sustainable growth in the dairy sector.
          </p>
        </div>
        <div className="w-full md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1380px] mx-auto mt-12 flex justify-center sm:w-[80%] sm:h-[9000px] md:h-[700px] lg:h-[660px] mb-10">
  <img
    src="/media/eligibility.png"
    alt="Fanikisha web portal"
  />
</div>
      </div>
    </main>
  );
}