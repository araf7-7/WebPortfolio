import { TypeAnimation } from "react-type-animation";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-scroll";
const Banner = () => {
    return (
        <div className="">
            <div className="text-center mb-10">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am A',
                        1000,
                        'I am A Developer',
                        2000,
                        'I am A Explorer',
                        2000,
                        'I am A Dreamer',
                        2000,
                    ]}
                    speed={50}
                    style={{ fontSize: '5em', display: 'inline-block' }}

                    repeat={Infinity}
                />
            </div>
            <div className="text-center ">
                <h1 className="text-4xl mb-10 ">Hi There I&apos;am <span className="font-bold text-yellow-300">Araf Ahmed</span>. <br /> A Junior <span className="font-bold text-yellow-300" >Front End</span> || <span className="font-bold text-yellow-300">MERN Stack</span> Developer</h1>
                <div className="flex justify-center gap-10">
                    <button className="btn bg-transparent border-yellow-400 mt-4 text-white hover:bg-yellow-400 px-10 hover:border-none hover:text-black">My Resume <CiLocationArrow1 className="text-lg" /></button>
                    <Link to='Portfolio' smooth={true} duration={500}>
                        <button className="btn bg-transparent border-yellow-400 mt-4 text-white hover:bg-yellow-400 px-10 hover:border-none hover:text-black">My Work <CiLocationArrow1 className="text-lg" /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;