export default function Blog() {
    return (
        <section
            className="relative bg-gray-200 h-96"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto h-full flex items-center justify-center text-center text-white relative z-10">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Hello! Welcome to</h1>
                    <h2 className="text-7xl font-bold text-black">
                        Read<span className="text-yellow-400">it.</span> <span className=" text-white">Blog</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
