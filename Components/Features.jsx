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
                        <h3 className="mt-8 text-lg font-semibold text-black">Personalized Recommendations</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Tailored just for you, our website offers personalized recommendations based on your preferences and browsing history, ensuring a curated experience that matches your unique interests. 
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <BsFileEarmarkMedicalFill className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Live Monitoring System</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Stay informed about your health in real-time with our advanced live monitoring system, providing continuous updates and insights for proactive wellness management.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <GoLaw className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Personalized Goal Setting and Health Score</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Set achievable health goals tailored to your lifestyle and track your progress with our intuitive platform. Monitor your health score and receive actionable insights to optimize your well-being.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <MdBloodtype className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Health-Optimized Chatbot</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Our specialized chatbot is trained to provide personalized fitness guidance, nutritional advice, sleep optimization tips, and stress management techniques, ensuring comprehensive support for your well-being journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
