"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from "next/image"

export default function CardWithForm() {
  return (
    <div className="flex justify-evenly align-middle mt-16  flex-wrap">
    <Card className="w-[150px] h-[150px] flex justify-center items-center align-middle bg-[#DEF8ED]">
        <CardHeader>
          <Image 
           src={"/wired-flat-1258-medical-mask.gif"}
           height={100}
           width={100}
          />
          <CardDescription>Deploy.</CardDescription>
        </CardHeader>
    </Card>
    
    <Card className="w-[150px] h-[150px] flex justify-center items-center align-middle bg-[#DEF8ED]">
        <CardHeader>
          <Image 
           src={"/wired-flat-428-injection.gif"}
           height={100}
           width={100}
          />
        </CardHeader>
    </Card>
   
    <Card className="w-[150px] h-[150px] flex justify-center items-center align-middle bg-[#DEF8ED]">
        <CardHeader>
          <Image 
           src={"/wired-flat-1249-heart-beat.gif"}
           height={100}
           width={100}
          />
        </CardHeader>
    </Card>
    
    <Card className="w-[150px] h-[150px] flex justify-center items-center align-middle bg-[#DEF8ED]">
        <CardHeader>
          <Image 
           src={"/wired-flat-955-demand.gif"}
           height={100}
           width={100}
          />
        </CardHeader>
    </Card>
    
    <Card className="w-[150px] h-[150px] flex justify-center items-center align-middle bg-[#DEF8ED]">
        <CardHeader>
          <Image 
           src={"/wired-flat-19-magnifier-zoom-search.gif"}
           height={100}
           width={100}
          />
        </CardHeader>
    </Card>


    </div>
  )
}
