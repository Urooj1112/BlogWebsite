import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
export default function Home() {
    return (
        <div>
            <Header />
            <Contact />
            <div className="flex flex-col items-center justify-center mt-10 mb-[30px] sm: pl-5 sm: pr-5 md: pr-5 md: pl-5">
                <div className="w-full max-w-xl">
                    <form className="flex flex-col space-y-4 " action="">
                        <label htmlFor="name" className="text-lg">Your Name</label>
                        <input
                            id="name"
                            type="text"
                            className="border-gray-200 border-2 p-2 rounded-md w-full"
                            placeholder="Abc"
                        />
                        <label htmlFor="email" className="text-lg">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className="border-gray-200 border-2 p-2 rounded-md w-full"
                            placeholder="Abc@def.com"
                        />
                        <label htmlFor="subject" className="text-lg">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            className="border-gray-200 border-2 p-2 rounded-md w-full"
                            placeholder="This is optional"
                        />
                        <label htmlFor="message" className="text-lg">Message</label>
                        <textarea
                            id="message"
                            className="border-gray-200 border-2 p-2 rounded-md w-full h-32"
                            placeholder="Hi! I'd like to ask about..."
                        />
                        <button className="self-start bg-yellow-400  text-black mt-6 p-3 w-32 rounded-sm">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
