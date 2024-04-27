"use client"
import React from 'react'
import { DollarSign, Zap, Moon, Filter } from 'lucide-react'
import { FaTablets } from "react-icons/fa";
import { BsFileEarmarkMedicalFill } from "react-icons/bs"
import { GoLaw } from "react-icons/go";
import { MdBloodtype } from "react-icons/md";

export default function FeatureThree() {
    return (
        <div className='p-20'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black">
                            Feature of Swasthya Connect
                        </p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-600 sm:text-4xl lg:text-5xl">
                        What Features Do We Provide ?
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        Below are the services provided by Swastya Connect. Our aim is to make the healthcare journey
                        easy and accessicible for everyone.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <FaTablets className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Find Alternate Medecine</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Swasthya Connect will get connected to your prescription and your medical prescription and by analyzing
                            it will provide you the list of other brand names having same content with different prices 
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <BsFileEarmarkMedicalFill className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Simplify Your Report</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Our AI powered medical report simplifier will generate a summary of your report and will let you know what are
                            plus points and minus points in your report also will reccomend you to overcome minus points. Also you can chat with your report.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <GoLaw className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Know your medical rights</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            We have a chat bot trained on IPC, CPC, CrPC, Constitutions of India and various other healthcare specific acts and regulations
                            which will help one to know what one can do if they are cheated in healthcare domain.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <MdBloodtype className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Find right donar for yourself</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Swasthya Connect provides a service where desired donars can regiter themselves and in case of any user needs a particular type
                            of Blood group he/she will get a larger pratform to searh for right donars at right time. 
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
