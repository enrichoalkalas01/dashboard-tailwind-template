"use client"
import THead from "./components/THead"
import TBody from "./components/TBody"

export default function Table() {
    return(
        <>
            <div className="w-full px-0">
                <div className="h-full p-4 bg-gray-500 rounded-xl">
                    <h4 className="text-lg text-gray-100 font-semibold">Latest Products</h4>
                    <div className="w-full py-3 overflow-x-auto">
                        <table className="w-full min-w-max">
                            <THead />
                            <TBody />
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}