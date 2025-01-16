export default function Contact() {
    return (
        <section className="relative bg-gray-200 h-96">
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto h-full flex items-center justify-center text-center text-white relative z-10 px-4">
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                        Get In Touch With <span className="text-yellow-400">Me</span>
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
                        Feel free to reach out to me for any web development inquiries, project collaborations or just to say hello I&apos;m always open to new opportunities and would love to help bring your ideas to life
                    </p>
                </div>
            </div>
        </section>
    );
}
