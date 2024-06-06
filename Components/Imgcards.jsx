"use client"
import * as React from "react"

import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

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
