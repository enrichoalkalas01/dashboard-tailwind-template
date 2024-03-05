"use client"
import Image from "next/image";
import Logo from "../../app/favicon.ico"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faCalendar,
    faUser,
    faMessage,
    faChartSimple,
    faChartBar,
    faFolder,
    faGear,
} from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    const [openBtn, setOpenBtn] = useState(true)
    const [menus, setMenus] = useState([
        { title: "Dashboard", src: faChartSimple, href: "#", gap: false, },
        { title: "Inbox", src: faMessage, href: "#", gap: false, },
        { title: "Accounts", src: faUser, href: "#", gap: true, },
        { title: "Schedule", src: faCalendar, href: "#", gap: false, },
        { title: "Search", src: faMagnifyingGlass, href: "#", gap: false, },
        { title: "Analytics", src: faChartBar, href: "#", gap: false, },
        { title: "Files", src: faFolder, href: "#", gap: true, },
        { title: "Setting", src: faGear, href: "#", gap: false, },
    ])
    return(
        <>
            <div className={`
                ${ openBtn ? "w-72" : "w-20" }
                h-screen bg-slate-950 relative
                p-5 pt-8 duration-500
            `}>
                {/* Button Side Bar */}
                <div
                    className={`
                        absolute cursor-pointer rounded-full -right-3.5 top-9 w-7 border-2 border-dark-purple bg-white
                        ${ openBtn ? "rotate-0" : "rotate-180" }
                    `}
                    onClick={ () => setOpenBtn(!openBtn) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                {/* Logo Side Bar */}
                <div className={ `flex items-center gap-x-2 ${ !openBtn && 'justify-start' }` }>
                    
                    <div className={`bg-white rounded w-8 h-8 flex items-center justify-center cursor-pointer duration-500`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <div>
                        <h1 className={`
                            text-white origin-left font-medium text-xl duration-500
                            ${ !openBtn && "scale-0 hidden duration-0" }
                        `}>Logo Here</h1>
                    </div>
                </div>

                {/* Menus Side Bar */}
                <div>
                    <ul className="pt-6">
                        {
                            menus?.map((menu, i) => (
                                <li key={i} className={`
                                    text-white text-medium flex items-center gap-x-4 cursor-pointer p-2
                                    hover:bg-sky-700 hover:duration-200 rounded-md
                                    ${ menu?.gap ? "mt-10" : "mt-2" }
                                    ${ !openBtn && "gap-x-0 justify-center" }
                                `}>
                                    <FontAwesomeIcon icon={menu?.src} />
                                    <span className={`${ !openBtn && "scale-0 hidden" } origin-left duration-200`}>{ menu?.title }</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}