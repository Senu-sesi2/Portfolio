import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"

const Footer = () => {
    return (
        <footer className="text-gray-500 py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Taste<span className="text-green-500 text-xl">Afric</span>
                    </p>
                </div>

                <div className="">
                    <p className="text-green-400 font-bold">KEY LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-green-400 font-bold">LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            License Agreement
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Copyright Information
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-white'
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-green-400 font-bold">SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href='#'
                            className='bg-orange-500 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={9} />
                        </a>

                        <a
                            href='#'
                            className='bg-orange-500 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={9} />
                        </a>
                        <a
                            href='#'
                            className='bg-orange-500 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={9} />
                        </a>
                        <a
                            href='#'
                            className='bg-orange-500 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={9} />
                        </a>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-orange-400 text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">TasteAfric &copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer