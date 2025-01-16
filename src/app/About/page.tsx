import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function AboutPage() {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 min-h-screen">
            <Header />
            <About />
            {/* About Page Content */}
            <section className="py-20 px-4 md:px-20 lg:px-40">
                {/* About Me Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase mb-8">
                        About Me
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="/images/Urooj Saeed.jpeg"
                                alt="Your Name"
                                className="w-48 h-48 object-cover rounded-full shadow-lg"
                            />
                        </div>
                        {/* About Me Content */}
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                                Urooj Saeed
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I am Urooj Saeed, an aspiring scholar with a strong academic background in Mathematics and Economics, currently pursuing further expertise in the fields of data analysis and artificial intelligence. I hold a Bachelor’s degree in Mathematics and Economics from IOBM University, where I developed a profound interest in econometrics, statistical modeling, and economic theory.
                                Currently, I am enrolled in the Certified Applied Cloud Generative AI course under the Governor Sindh IT Initiative, which enhances my proficiency in AI technologies and programming languages, including TypeScript, JavaScript, and Next.js. My academic journey is further enriched by various research projects, such as analyzing the determinants of economic growth and investigating the causes and impacts of financial crises on developing economies like Pakistan.
                                In addition to my academic pursuits, I have gained practical experience through internships in data-driven roles, including positions in the underwriting department of a prominent insurance company. These experiences have honed my analytical skills, particularly in economic forecasting and financial modeling, which I aim to apply in both academic research and real-world applications.
                                My academic interests lie at the intersection of economics, data science, and technology, with a particular focus on how data-driven insights can foster sustainable economic growth and improve business decision-making.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Clients Section */}
                <div>
                    <h3 className="text-2xl italic text-neutral-600 dark:text-neutral-400">
                        Web Developer
                    </h3>
                </div>
            </section>
            <Footer />
        </div>
    );
}
