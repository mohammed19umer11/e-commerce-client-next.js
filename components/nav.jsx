import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Logo from '../public/e-commerce.png';

import { 
    ChevronDownIcon, 
    ChevronUpIcon, 
    CollectionIcon,
    LogoutIcon, 
    IdentificationIcon,
    MenuAlt3Icon, 
    ShoppingCartIcon, 
    UserCircleIcon } from '@heroicons/react/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleDropdown = () => {
        setIsOpenDropDown(!isOpenDropDown);
    }

    // useEffect(() => {
    //     window.addEventListener('click', () => {
    //         if(isOpen) {
    //             setIsOpen(false);
    //         }
    //     });
    //     return () => window.removeEventListener('click', () => {
    //         if(isOpen) {
    //             setIsOpen(false);
    //         }
    //     });
    // },[]);

    return (
    <div className={"fixed w-full z-50"}>
    <nav className="h-16 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400">
        <div className="w-11/12 mx-auto h-full">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-between py-5 px-2 text-primary-0 font-bold">
                        <div className="w-7 h-7">
                            <Link href="/">
                                <Image src={Logo}/>
                            </Link>
                        </div>
                        <Link href="/" className="">
                            <span className="font-bold text-sm">E-COMMERECE</span>
                        </Link>
                    </div>

                    
                </div>

                <div className="hidden md:flex items-center space-x-3 py-5 px-3 text-primary-0 font-bold">
                    <Link href="#"><ShoppingCartIcon className={"h-6 w-6"}/></Link>
                    <Link href="#">SOMETHING ELSE/></Link>
                    <div className={"flex items-center relative"}>
                        <button onClick={toggleDropdown}><UserCircleIcon className={"h-6 w-6"}/></button>
                        <ul className={classNames(isOpenDropDown ? "block" : "hidden","absolute top-8 right-2 bg-primary-0 rounded text-primary-400")}>
                            <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                                <div className={"h-4 w-4 text-primary-400 mr-2"}><IdentificationIcon /></div>
                                <Link href="#" className=" ">ACCOUNT</Link>
                            </li>
                            <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                                <div className={"h-4 w-4 text-primary-400 mr-2"}><CollectionIcon /></div>
                                <Link href="#" className=" ">ORDERS</Link>
                            </li>
                            <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                                <div className={"h-4 w-4 text-primary-400 mr-2"}><LogoutIcon/></div>
                                <button className="font-bold">LOGOUT</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggle} >
                        <MenuAlt3Icon className="h-6 w-6 text-primary-0"/>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div className={classNames(isOpen ? "scale-y-100" : "scale-y-0", "md:hidden bg-primary-400 absolute w-full")}>
        <ul className={classNames(isOpen ? "block" : "hidden","text-primary-0 font-bold")}>
            <li className={"flex items-center  py-2 px-4 active:bg-primary-300"}>
                <div className={"h-6 w-6 text-primary-0 mr-2"}><ShoppingCartIcon /></div>
                <Link href="#">CART</Link>
            </li>
            <li className={"flex items-center py-2 px-4 active:bg-primary-300"}>
                <div className={"h-6 w-6 text-primary-0 mr-2"}>SOMETHING ELESE</div>
                <Link href="#" className=" ">SOMETHING ELSE</Link>
            </li>
            <li className={"flex flex-col py-2 px-4 active:bg-primary-300"}>
                <div className={"flex pb-1 items-center content-center"}>
                    <div className={"h-full w-6 text-primary-0 mr-2"}><UserCircleIcon/></div>
                    <Link href="#" className="">PROFILE</Link>
                    <span className={"flex justify-end w-full h-6"}>
                        <button onClick={toggleDropdown} className={"w-6"}>
                            {isOpenDropDown ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                        </button>
                    </span>
                </div>
                <ul className={classNames(isOpenDropDown ? "block" : "hidden","bg-primary-0 rounded-b text-primary-400")}>
                    <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                        <div className={"h-4 w-4 text-primary-400 mr-2"}><IdentificationIcon /></div>
                        <Link href="#" className=" ">ACCOUNT</Link>
                    </li>
                    <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                        <div className={"h-4 w-4 text-primary-400 mr-2"}><CollectionIcon /></div>
                        <Link href="#" className=" ">ORDERS</Link>
                    </li>
                    <li className={"flex items-center text-primary-400 font-bold text-sm py-2 px-2 active:bg-primary-300"}>
                        <div className={"h-4 w-4 text-primary-400 mr-2"}><LogoutIcon/></div>
                        <button className="font-bold">LOGOUT</button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    </div>
    )
};
