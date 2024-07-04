import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gossc8s', 'template_vxe9eax', form.current, '6UymXu0a9BHMH8J9N')
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message sent successfully!');
                    form.current.reset();  // Reset form fields
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send the message.');
                }
            );
    };

    return (
        <div name='Contact' className="pt-10 min-h-screen px-20">
            <h1 className="text-4xl inline font-bold border-b-4">Contact</h1>
            <p className="text-2xl mt-5">I&apos;m always excited to connect with new people and explore new opportunities. Whether you have a project in mind, need some advice, or just want to say hi, feel free to reach out!</p>
            <h1 className="text-4xl  text-center text-black mt-10">Reach Out With My Social</h1>
            <div className="flex justify-center items-center mt-10 gap-5">
                <a href="https://github.com/araf7-7">
                    <button className="btn-primary bg-transparent border-yellow-200 font-semibold rounded-full text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                        <img src="https://i.ibb.co/6R46WvD/github-logo.png" className="w-15 h-12" alt="github" />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/araf-ahmed7/">
                    <button className="btn-primary bg-transparent border-yellow-200 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105 hover:bg-yellow-400">
                        <img src="https://i.ibb.co/mBVrf7c/Linked-In-logo-initials.png" className="w-15 h-10" alt="linkedin" />
                    </button>
                </a>
                <a href="https://www.facebook.com/ron.weasly.07">
                    <button className="btn-primary bg-transparent border-yellow-200 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105">
                        <img src="https://i.ibb.co/bRG8twX/Facebook-f-logo-2019-svg.png" className="w-15 h-10" alt="Facebook" />
                    </button>
                </a>
                <a href="https://www.instagram.com/__araf_7__/">
                    <button className="btn-primary bg-transparent border-yellow-200 font-semibold text-white hover:border-none hover:text-black duration-300 hover:scale-105">
                        <img src="https://i.ibb.co/Mn3TwnX/Instagram-logo-2016-svg.png" className="w-15 h-10" alt="Instagram" />
                    </button>
                </a>
            </div>
            <div className="divide-gray-950 divider"></div>
            <h1 className="text-4xl text-center text-black mt-10">Message Me</h1>
            <div className="lg:flex flex-row w-full justify-evenly">
                <div>
                    <h1 className="text-3xl text-black mt-10">Get In Touch</h1>
                    <h3 className="text-2xl text-black flex items-center gap-2 mt-2">
                        <MdOutlineEmail /> <span className="underline">aaraf772@gmail.com</span>
                    </h3>
                    <h3 className="text-2xl text-black flex items-center gap-2 mt-2">
                        <FaSquarePhone /> <span className="underline">01999986259</span>
                    </h3>
                </div>
                <div className="divider divide-red-50 md:divider-vertical lg:divider-horizontal"></div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex gap-4 mt-10">
                            <div>
                                <label className="text-xl font-medium text-black">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="user_name"
                                    className="input input-bordered placeholder:text-black bg-transparent input-lg w-full max-w-xs"
                                />
                            </div>
                            <div>
                                <label className="text-xl font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="input input-bordered placeholder:text-black bg-transparent input-lg w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-10">
                            <label className="text-xl font-medium text-black">Your Message</label>
                            <textarea
                                name="message"
                                placeholder='Message'
                                className="textarea textarea-bordered placeholder:text-black bg-transparent"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            value='send'
                            className="btn bg-transparent border-black btn-block mt-4 text-black hover:bg-yellow-400 px-10 hover:border-none hover:text-black"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;
