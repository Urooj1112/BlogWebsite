// components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-200 h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto h-full flex items-center justify-center text-center text-white relative z-10 px-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Hello! Welcome to</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Read<span className="text-yellow-400">it.</span> <span className=" text-white">Blog</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-4 mt-2">Stay ahead in the world of data analysis with insights, trends, and practical knowledge.</p>
          <p className="text-base sm:text-lg md:text-xl">Explore articles and tips to help you understand how data shapes decisions in today&apos;s world.</p>
        </div>
      </div>
    </section>
  );
}
