import React from 'react';
const About = () => {
    return (
        <div name='About' className="pt-40 min-h-screen px-10">
            <div className="flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 md:pl-10 mt-5 md:mt-0">
                    <h1 className="text-4xl inline font-bold border-b-4">About</h1>
                    <p className="text-xl mt-5">Hello! I&apos;m Araf Ahmed, a passionate web developer with 1 years of experience in crafting dynamic, user-friendly websites and applications. I specialize in <span className="font-bold text-yellow-400">front-end development</span>, and have a strong proficiency in technologies such as HTML, CSS, JavaScript, React, Node.js.</p>
                    <p className="text-xl mt-5">My journey into web development began with learning with <span className="font-bold text-yellow-400">Programming Hero</span>, and since then, I&apos;ve dedicated myself to continuously learning and adapting to the ever-evolving landscape of web technologies. My approach is centered around creating clean, efficient, and accessible code that enhances user experience and meets the goals of the project.</p>
                    <p className="text-xl mt-5">I take pride in my ability to collaborate effectively with <span className="font-bold text-yellow-400">clients and team members</span>, ensuring that each project is delivered on time and exceeds expectations. Whether it&apos;s developing a sleek, modern website from scratch or optimizing an existing application, I thrive on solving complex problems and bringing creative ideas to life.</p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative w-80vh h-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-gray-400 to-yellow-300 rounded-lg shadow-lg">
                            {/* This div provides the colorful background */}
                        </div>
                        <img
                            src="https://i.ibb.co/ngLWFpP/Whats-App-Image-2024-04-24-at-00-06-15-23a86478-removebg-preview.png"
                            alt="Araf Ahmed"
                            className="relative w-full h-auto object-cover rounded-lg shadow-lg p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
