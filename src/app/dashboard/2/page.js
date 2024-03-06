"use client"
import Sidebar from "@/components/headers/SideBarTempalteOne/SideBar";
import Table from "@/components/tables/TableTemplateOne/Table";
import LineChartOne from "@/components/charts/LineChartOne";
import { Dropdown } from "flowbite-react"
import Navbar2 from "@/components/headers/NavbarTemplateDashboard/NavBar2";

export default function Page() {
    return (
        <>
            <div className="flex min-h-screen h-full">
                {/* <div className="hidden md:block md:w-80"> */}
                <Sidebar />
                {/* </div> */}
                <div className="text-2xl font-semibold w-full md:w-full">
                    <Navbar2 />
                    <div className="w-full text-2xl px-4 pt-4">
                        <div>
                            <h1>Home Page</h1>
                        </div>
                        <div className="w-full md:w-full py-4">
                            <Table />
                        </div>
                        <div>
                            <Dropdown label="Dropdown button">
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        {/* <div>
                            <LineChartOne />
                        </div>
                        <div>
                            <LineChartOne />
                        </div>
                        <div>
                            <LineChartOne />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
