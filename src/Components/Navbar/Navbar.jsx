import { Link } from 'react-scroll';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex lg:items-center lg:justify-center md:justify-center md:items-center justify-end items-end  px-4 py-5 text-yellow-300 mb-24 ">

            <ul className="hidden items-center justify-between gap-10 md:flex">
               
                <Link to='Banner' smooth={true} duration={500}>
                <li className="group flex  cursor-pointer  flex-col">
                    Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full  bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
                </Link>
                <Link to='About' smooth={true} duration={500}>
                    <li className="group flex  cursor-pointer flex-col">

                        About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to='Portfolio' smooth={true} duration={500}>
                    <li className="group flex  cursor-pointer flex-col">
                        Portfolio<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to='Skills' smooth={true} duration={500}>
                <li className="group flex  cursor-pointer flex-col">
                    Skills<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
                </Link>
                <Link to='Contact' smooth={true} duration={500}>
                <li className="group flex  cursor-pointer flex-col">
                    Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
                </Link>

               
               
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            Home
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Services
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            About
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Contact
                        </li>
                    </ul>
                )}
            </div>
        </nav>

    );
};

