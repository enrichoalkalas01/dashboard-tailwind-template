import SideBar3 from "@/components/headers/SideBar3";

export default function Home() {
    return (
        <>
            <div className="flex">
                <div className="w-80">
                    <SideBar3 />
                </div>
                <div className="p-8 text-2xl font-semibold">
                    <div>
                        <h1>Home Page</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
