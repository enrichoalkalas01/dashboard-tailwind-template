"use client"
import { useState } from "react"

export default function TBody() {
    const [datas, setDatas] = useState([
        {
            code: "CDD1049", title: "John Doe 1", date: "July 06, 2022", status: "pending",
            image_url: "https://shuffle.dev/trizzle-assets/images/avatar-men-circle-border.png"
        },
        {
            code: "CDD1041", title: "John Doe 2", date: "July 06, 2022", status: "done",
            image_url: "https://shuffle.dev/trizzle-assets/images/avatar-men-circle-border.png"
        },
        {
            code: "CDD1043", title: "John Doe 3", date: "July 06, 2022", status: "failed",
            image_url: "https://shuffle.dev/trizzle-assets/images/avatar-men-circle-border.png"
        },
    ])

    return(
        <>
            <tbody>
                {
                    datas?.map((data, index) => {
                        if ( index % 2 === 0 ) {
                            return (
                                <tr key={ index }>
                                    <td className="p-0">
                                        <div className="h-16 p-6">
                                            <h5 className="text-sm font-medium text-gray-100">{ data?.code }</h5>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="h-16 p-6">
                                            <div className="flex h-full items-center">
                                                <img className="w-8 h-8 mr-3 rounded-full object-cover" src="https://shuffle.dev/trizzle-assets/images/avatar-men-circle-border.png" alt="" />
                                                <span className="text-sm font-medium text-gray-100">{ data?.title }</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="h-16 p-6 flex items-center">
                                            <span className="text-sm text-gray-100 font-medium">{ data?.date }</span>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="h-16 p-6">
                                            <div className="flex h-full items-center flex items-center">
                                                <span className={`inline-block w-2 h-2 mr-1 rounded-full ${ data?.status === "failed" ? "bg-red-500" : data?.status === "done" ? "bg-green-500" : "bg-yellow-500" }`}></span>
                                                <span className="text-sm font-medium text-gray-100">{ data?.status === "failed" ? "Failed" : data?.status === "done" ? "Success" : "Pending" }</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        } else if ( index % 2 === 1 ) {
                            return (
                                <tr key={ index }>
                                    <td className="p-0">
                                        <div className="h-16 p-6 rounded-l-xl bg-gray-600">
                                            <h5 className="text-sm font-medium text-gray-100">{ data?.code }</h5>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="h-16 p-6 bg-gray-600">
                                            <div className="flex h-full items-center">
                                                <img className="w-8 h-8 mr-3 rounded-full object-cover" src="https://shuffle.dev/trizzle-assets/images/avatar-men-circle-border.png" alt="" />
                                                <span className="text-sm font-medium text-gray-100">{ data?.title }</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="h-16 p-6 bg-gray-600 flex items-center">
                                            <h5 className="text-sm font-medium text-gray-100">{ data?.date }</h5>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <div className="flex h-16 p-6 items-center rounded-r-xl bg-gray-600 flex items-center">
                                            <span className={`inline-block w-2 h-2 mr-1 rounded-full ${ data?.status === "failed" ? "bg-red-500" : data?.status === "done" ? "bg-green-500" : "bg-yellow-500" }`}></span>
                                            <span className="text-sm font-medium text-gray-100">{ data?.status === "failed" ? "Failed" : data?.status === "done" ? "Success" : "Pending" }</span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }
            </tbody>
        </>
    )
}