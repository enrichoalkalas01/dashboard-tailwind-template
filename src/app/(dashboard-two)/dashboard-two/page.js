import SideBar2 from "@/components/headers/SideBarTemplateTwo/SideBar2"
import Table from "@/components/tables/TableTemplateTwo/Table"
import AreaChartOne from "@/components/charts/AreaChartOne"

export default function Page() {
    return(
        <>
            <section className="flex">
                <div>
                    <SideBar2 />
                </div>
                <div className="w-full">
                    <div className="w-full">
                        <Table />
                    </div>
                    <div className="w-full">
                        <AreaChartOne />
                    </div>
                </div>
            </section>
        </>
    )
}