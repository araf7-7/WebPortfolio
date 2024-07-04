

const Experience = () => {
    return (
        <div name='Experience' className="pt-10 min-h-screen px-10">
            <h1 className="text-4xl inline font-bold border-b-4">Experience</h1>
            <p className="text-2xl mt-5">Some Of My Previous Work Experience</p>
            <div className="flex lg:flex-row flex-col md:flex-row gap-10 justify-center items-center">
                <div className="group relative max-w-[350px] h-auto lg:h-[300px] mt-10 overflow-hidden bg-gradient-to-r from-[#eee317] via-[#ebbe0a] to-[#d4ab07] px-6 py-6 text-white shadow">
                    <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#ebdb02] via-[#eec009] to-[#f8ce01] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#dfd006] via-[#cbc409] to-[#e2e203] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold text-black">Front End Developer</h1>
                        <p className="text-sm text-black"> Developed responsive web applications using HTML, CSS, and JavaScript, with a focus on React.js. Collaborated with designers to translate mockups into interactive user interfaces. Optimized web pages for speed and scalability. Ensured seamless performance through thorough testing and bug fixing.</p>
                    </div>
                </div>
                <div className="group relative max-w-[350px] h-auto lg:h-[300px] mt-10 overflow-hidden bg-gradient-to-r from-[#eee317] via-[#ebbe0a] to-[#d4ab07] px-6 py-6 text-white shadow">
                    <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#ebdb02] via-[#eec009] to-[#f8ce01] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#dfd006] via-[#cbc409] to-[#e2e203] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold text-black">MERN Stack Developer</h1>
                        <p className="text-sm text-black"> Built full-stack applications using the MERN stack, creating dynamic UIs with React.js and managing data with MongoDB. Developed RESTful APIs with Node.js and Express.js. Implemented secure authentication and deployed applications on cloud platforms. Worked closely with cross-functional teams to deliver robust software solutions.</p>
                    </div>
                </div>
                <div className="group relative max-w-[350px] h-auto lg:h-[300px] mt-10 overflow-hidden bg-gradient-to-r from-[#eee317] via-[#ebbe0a] to-[#d4ab07] px-6 py-6 text-white shadow">
                    <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#ebdb02] via-[#eec009] to-[#f8ce01] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#dfd006] via-[#cbc409] to-[#e2e203] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold text-black">Full Stack Project - Parcely</h1>
                        <p className="text-sm text-black"> Easily book parcels for delivery with just a few clicks. Our intuitive interface allows users to input all necessary details quickly.Share your delivery experience by leaving reviews. Your feedback helps us maintain high-quality service standards.Securely add and manage your payment methods for hassle-free transactions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;