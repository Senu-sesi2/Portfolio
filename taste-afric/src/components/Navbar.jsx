// import React, { useState } from 'react'
// import Logo from '../images/logo.png'
// import { HiMenuAlt3 } from 'react-icons/hi'
// import { AiOutlineClose } from 'react-icons/ai'
// import Button from './Button'

// const Navbar = () => {
//     const [open, setOpen] = useState(false)

//     return (
//         <header className='w-full fixed z-10 bg-black opacity-90 shadow:md'>
//             <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
//                 <a href="/" className='flex items-center justify-center font-bold text-green-500 text-lg cursor-pointer'>
//                     <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
//                     Taste<span className='text-orange-500 '>Afric</span>
//                 </a>

//                 <ul className='hidden md:flex text-white gap-6'>
//                     <li>
//                         <a href="/">Home</a>
//                     </li>
//                     <li>
//                         <a href="/#recipes">Explore</a>
//                     </li>
//                     {/* <li>
//                         <a href="/favorites">Favorites</a>
//                     </li> */}
//                 </ul>

//                 <Button
//                     title='Sign in'
//                     conteinerStyle='hidden md:block bg-transparent border 
//                     border-green text-white hover:bg-green-600 hover:text-slate-700 
//                     rounded-full min-w-[130px]'
//                 />

//                 <button className='block md:hidden text-white text-xl'
//                     onClick={() => setOpen(prev => !prev)}>
//                     {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
//                 </button>
//             </nav>
//             <div className={`${open ? "flex" : "hidden"} bg-black 
//                 flex-col w-full px-4 pt-16 pb-10 text-white 
//                 gap-6 text-[14px]`}>
//                 <a href="/">Home</a>
//                 <a href="/#recipes">Recipes</a>
//                 <a href="/">Favorites</a>
//             </div>
//         </header>
//     )
// }

// export default Navbar


import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full fixed z-10 bg-black opacity-90 shadow:md'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center font-bold text-green-500 text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
                    Taste<span className='text-orange-500 '>Afric</span>
                </a>

                <ul className='hidden md:flex text-green-600 gap-6'>
                    <li className='relative font-bold'>
                        <a href="/" className='hover:text-orange-600 relative transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-6'>
                            Home
                            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-green-600 opacity-0 hover:opacity-100 transition-opacity duration-500'></span>
                        </a>
                    </li>
                    <li className='relative font-bold'>
                        <a href="/#recipes" className='hover:text-orange-600 relative transition-all duration-500 ease-in-out transform hover:scale-125 hover:-rotate-6'>
                            Explore
                            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-green-600 opacity-0 hover:opacity-100 transition-opacity duration-500'></span>
                        </a>
                    </li>
                </ul>

                <Button
                    title='Sign in'
                    conteinerStyle='hidden md:block bg-transparent border 
                    border-green-600 text-orange-600 hover:bg-black hover:text-slate-700 
                    font-bold rounded-full min-w-[130px] transition-all duration-500 ease-in-out transform hover:scale-110 hover:-rotate-3'
                />

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black 
                flex-col w-full px-4 pt-16 pb-10 text-white 
                gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/">Favorites</a>
            </div>
        </header>
    )
}

export default Navbar


