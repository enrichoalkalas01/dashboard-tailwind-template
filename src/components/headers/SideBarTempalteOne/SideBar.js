"use client"

import MainMenuSideBar from "./components/MainMenuSideBar"
import BottomMenuSideBar from "./components/BottomMenuSideBar"
import { useState } from "react"

export default function SideBar() {
    const [sideBarMobile, setSideBarMobile] = useState(false)
    return(
        <>
            
            {/* Desktop Sidebar */}
            <div className="hidden lg:w-80 max-w-xxs lg:block navbar-menu h-screen relative z-50">
                <nav className="relative top-0 left-0 bottom-0 w-80 max-w-xxs flex flex-col h-full py-6 px-4 bg-gray-700 overflow-auto">
                    <div className="mb-6">
                        <div>
                            <a className="inline-block py-2" href="#">
                                <img className="h-7" src="https://shuffle.dev/trizzle-assets/logos/trizzle-logo.svg" alt="" />
                            </a>
                        </div>
                        <div>
                            <MainMenuSideBar />
                        </div>
                    </div>
                    <BottomMenuSideBar />
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <div className={`transition-all ease-out transform duration-300 ${ !sideBarMobile ? '-translate-x-full' : '-translate-x-0'} lg:hidden navbar-menu absolute z-50 w-full h-full`}>
                <nav className="fixed top-0 left-0 bottom-0 w-80 max-w-xxs flex flex-col w-full h-full py-6 px-4 bg-gray-700 relative overflow-auto">
                    <div className="mb-6">
                        <div className="relative">
                            <a className="inline-block py-2" href="#">
                                <img className="h-7" src="https://shuffle.dev/trizzle-assets/logos/trizzle-logo.svg" alt="" />
                            </a>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white w-5 h-5 flex items-center justify-center rounded-full">
                                <span
                                    className={`text-sm font-medium ${ sideBarMobile ? `` : `scale-0` }`}
                                    onClick={() => setSideBarMobile(false)}
                                >X</span>
                            </div>
                        </div>
                        <div>
                            <MainMenuSideBar />
                        </div>
                    </div>
                    <BottomMenuSideBar />
                </nav>
            </div>
        </>
    )
}