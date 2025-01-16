export default function About() {
    return (
        <section className="relative bg-gray-200 h-96">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto h-full flex items-center justify-center text-center text-white relative z-10 px-4">
                <div>
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black">
                        So, Who <span className="text-yellow-400">I</span> <span className="text-white">Am</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
                        I am a dynamic and driven individual with a passion for blending creativity and strategy to build impactful solutions, whether in web development, data analysis, or innovative problem-solving.
                    </p>
                </div>
            </div>
        </section>
    );
}
