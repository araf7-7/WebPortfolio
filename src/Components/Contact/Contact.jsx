
const Contact = () => {
    return (
        <div name='Contact' className="pt-10 min-h-screen px-10">
            <h1 className="text-4xl inline font-bold border-b-4">Contact</h1>
            <p className="text-2xl mt-5">I&apos;m always excited to connect with new people and explore new opportunities. Whether you have a project in mind, need some advice, or just want to say hi, feel free to reach out!</p>
            <h1 className="text-4xl  text-center text-black mt-10">Reach Out With My Social</h1>
            <div className="flex justify-center items-center mt-10 gap-5">
                <a href="https://github.com/araf7-7"><button className="btn-primary bg-transparent border-yellow-200  font-semibold rounded-full text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400"><img src="https://i.ibb.co/6R46WvD/github-logo.png" className="w-15 h-12" alt="github" /></button></a>
                <a href="https://www.linkedin.com/in/araf-ahmed7/"><button className="btn-primary bg-transparent border-yellow-200  font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400"><img src="https://i.ibb.co/mBVrf7c/Linked-In-logo-initials.png" className="w-15 h-10" alt="linkedin" /></button></a>
                <a href="https://www.facebook.com/ron.weasly.07"><button className="btn-primary bg-transparent border-yellow-200  font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 "><img src="https://i.ibb.co/bRG8twX/Facebook-f-logo-2019-svg.png" className="w-15 h-10" alt="Facebook" /></button></a>
                <a href="https://www.instagram.com/__araf_7__/"><button className="btn-primary bg-transparent border-yellow-200  font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 "><img src="https://i.ibb.co/Mn3TwnX/Instagram-logo-2016-svg.png" className="w-15 h-10" alt="Instagram" /></button></a>
            </div>
            <h1 className="divide-gray-950 divider"></h1>
            <h1 className="text-4xl  text-center text-black mt-10">Message Me</h1>
            <div>

            </div>
        </div>
    );
};

export default Contact;