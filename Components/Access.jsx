"use client"

import React from 'react'
import { Lock } from 'lucide-react'
import { Button } from "@/Components/ui/button"

export default function CtaOne() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center md:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-[#4B5563] sm:text-4xl lg:text-5xl">
            Get full access to Platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Swasthya Connect is an Integrated Healthcare Management System. Our aim is to make the healthcare journey 
            safe and efficient to the citizens of India.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                type="email"
                placeholder="Email"
              />
              <Button type="submit" className="bg-[#10847E] hover:bg-slate-400">Subscribe</Button>
            </div>
          </div>
        </form>
        <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
          <Lock className="h-4 w-4 text-gray-600" />
          <span className="ml-2 text-sm text-gray-600">
            Your data is complely secured with us. We don&apos;t share with anyone.
          </span>
        </div>
      </div>
    </section>
  )
}
