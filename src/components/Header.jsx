import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiCodeproject, SiGooglescholar } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";
import { Link } from 'react-scroll'
import MyPortrait from '../assets/methila.jpeg'

const Header = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-header-bg-fuchsia-900 text-[#0F172]'>
            <div className='flex items-center group relative'>
                <img
                    src={MyPortrait} // source of your image
                    alt="portrait_photo"
                    className="object-container object-center bg-white rounded-full w-16 h-16 border bg-white object-cover"
                />
                {/* <h1 className='text-xl sm:text-2xl font-bold text-[#0F1729] ml-2'>@ridoy</h1> */}
                <img
                    src={MyPortrait} // source of your full image
                    alt="full_photo"
                    className="hidden group-hover:block absolute top-0 left-0 z-10"
                />
            </div>

            {/*menu*/}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="education" smooth={true} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="research" smooth={true} duration={500}>
                            Research
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="experience" smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="project" smooth={true} duration={500}>
                            Project
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="awards" smooth={true} duration={500}>
                            Awards
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-fuchsia-900 duration-200 text-text-white hover:text-text-fuchsia-300 p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10 text-[#0F1729] hover:text-2xl duration-200'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="education" smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="research" smooth={true} durtheme-fuchsia-900ation={500}>
                        Research
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="projectm" smooth={true} duration={500}>
                        project
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="awards" smooth={true} duration={500}>
                        Awards
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-fuchsia-900 duration-200 text-theme-fuchsia-900 hover:text-text-fuchsia-300'>
                    <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons mailto:aligunesv2@gmail.com*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-theme-fuchsia-900 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://www.linkedin.com/in/methila-biswas-raya/" rel="noreferrer" target="_blank">Linkedin <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-fuchsia-900 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://github.com/MethilaRaya" rel="noreferrer" target="_blank">Github <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-fuchsia-900 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://scholar.google.com/citations?user=FL3e_ZQAAAAJ&hl=en" rel="noreferrer" target="_blank">Google Scholar <SiGooglescholar size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-fuchsia-900 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://drive.google.com/file/d/1qsN4onE-qxyzsd2Z2DUreaqcJYqWvOSn/view?usp=sharing" rel="noreferrer" target="_blank">CV <TbFileCv size={30} /> </a>
                    </li>
                    

                </ul>
            </div>
        </div>
    )
}

export default Header