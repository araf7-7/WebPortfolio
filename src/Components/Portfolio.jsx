
import { TbEyeShare } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
const Portfolio = () => {
    const handlePreviewClick1 = () => {
        window.location.href = 'https://assignment-12-3551e.web.app/'; // Replace with your desired URL
    };
    const handleCodeClick1 = () => {
        window.location.href = 'https://github.com/araf7-7/Parcely-Client'; // Replace with your desired URL
    };
    const handlePreviewClick2 = () => {
        window.location.href = 'https://assignment-11-6ac64.web.app/'; // Replace with your desired URL
    };
    const handleCodeClick2 = () => {
        window.location.href = 'https://github.com/araf7-7/Study-Hub-Client'; // Replace with your desired URL
    };
    const handlePreviewClick3 = () => {
        window.location.href = 'https://assignment-10-cd43f.web.app/'; // Replace with your desired URL
    };
    const handleCodeClick3 = () => {
        window.location.href = 'https://github.com/araf7-7/Study-Hub-Client'; // Replace with your desired URL
    };
    const handlePreviewClick4 = () => {
        window.location.href = 'https://assignment-9-6d711.web.app/'; // Replace with your desired URL
    };
    const handleCodeClick4 = () => {
        window.location.href = 'https://github.com/araf7-7/ResortScape'; // Replace with your desired URL
    };
    return (
        <div name='Portfolio' className="mt-0 min-h-screen px-10">
            <h1 className="text-4xl inline border-b-4">Portfolio</h1>
            <p className="mt-4 text-3xl">See some of my recent Projects.</p>
            <div className="grid grid-cols-2 gap-10">
                {/* Card 1 */}
                <div>
                    <div className="w-full mt-10 max-w-auto space-y-3 rounded-xl bg-transparent border-2 border-white p-4 font-sans shadow-lg ">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">

                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/w4r0g0q/Screenshot-2024-07-03-140624.png" alt="card navigate ui" />
                        </div>
                        <div className="space-y-2 font-semibold h-24">
                            <h6 className="text-sm md:text-base lg:text-xl font-semibold">Parcely</h6>
                            <p className="text-xs font-semibold text-white md:text-sm">Easily book parcels for delivery with just a few clicks. Our intuitive interface allows users to input all necessary details quickly.</p>
                            
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm md:text-base">
                            <button onClick={handlePreviewClick1} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white duration-300 hover:border-none hover:text-black hover:scale-105 hover:bg-yellow-400">
                                Preview <TbEyeShare />
                            </button>
                            <button onClick={handleCodeClick1} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                                Code Link <FaGithubSquare />
                            </button>

                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div>
                    <div className="w-full  mt-10 max-w-auto space-y-3 rounded-xl bg-transparent border-2 border-white p-4 font-sans shadow-lg ">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">

                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/wCjcPL2/Screenshot-2024-07-03-141203.png" alt="card navigate ui" />
                        </div>
                        <div className="space-y-2 font-semibold h-24">
                            <h6 className="text-sm md:text-base lg:text-xl font-semibold">Study Hub</h6>
                            <p className="text-xs font-semibold text-white md:text-sm">
                            Welcome to Study Hub, your all-in-one platform for managing assignments effortlessly. With Study Hub, users can seamlessly add assignments, submit their work, and receive grades promptly.</p>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm md:text-base">
                            <button onClick={handlePreviewClick2} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white duration-300 hover:border-none hover:text-black hover:scale-105 hover:bg-yellow-400">
                                Preview <TbEyeShare />
                            </button>
                            <button onClick={handleCodeClick2} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                                Code Link <FaGithubSquare />
                            </button>

                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div>
                    <div className="w-full mt-10 max-w-auto space-y-3 rounded-xl bg-transparent border-2 border-white p-4 font-sans shadow-lg ">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">

                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/fkxX5YL/Screenshot-2024-07-03-141652.png" alt="card navigate ui" />
                        </div>
                        <div className="space-y-2 font-semibold h-24">
                            <h6 className="text-sm md:text-base lg:text-xl font-semibold">TourEase</h6>
                            <p className="text-xs font-semibold text-white md:text-sm">A React project about the Tourist Spots around the world, there are 2 section and one can access it after sign up or login by google, github and email. Explore the best resorts you can find.</p>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm md:text-base">
                            <button onClick={handlePreviewClick3} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white duration-300 hover:border-none hover:text-black hover:scale-105 hover:bg-yellow-400">
                                Preview <TbEyeShare />
                            </button>
                            <button onClick={handleCodeClick3} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                                Code Link <FaGithubSquare />
                            </button>

                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div>
                    <div className="w-full mt-10 max-w-auto space-y-3 rounded-xl bg-transparent border-2 border-white p-4 font-sans shadow-lg ">
                        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">

                            <img width={260} height={260} className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/ZWWRQ0G/Screenshot-2024-07-03-142022.png" alt="card navigate ui" />
                        </div>
                        <div className="space-y-2 font-semibold h-24">
                            <h6 className="text-sm md:text-base lg:text-xl font-semibold">ResortScape</h6>
                            <p className="text-xs font-semibold text-white md:text-sm">A React project about the luxurious resorts around the world, there are 2 section and one can access it after sign up or login by google, github and email. Explore the best resorts you can find . And dont forget to check the gallery section.</p>
                            
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm md:text-base">
                            <button onClick={handlePreviewClick4} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white duration-300 hover:border-none hover:text-black hover:scale-105 hover:bg-yellow-400">
                                Preview <TbEyeShare />
                            </button>
                            <button onClick={handleCodeClick4} className="flex items-center justify-center gap-2 rounded-lg bg-transparent border-yellow-200 border-2 px-6 py-2 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                                Code Link <FaGithubSquare />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;