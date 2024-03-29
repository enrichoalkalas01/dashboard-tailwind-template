
import Sidebar from "@/components/dashboard-one/SideBar"
import Head from "next/head"
// import Image from "next/Image"

export default function LayoutDashboardOne({ children }) {
    return(
        <>
            <Head>
                <title>Dashboard One</title>
                <meta name="description" content="test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Sidebar
                children={children}
            />
        </>
    )
}