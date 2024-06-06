import Image from "next/image";
import Carousle from "@/components/Carousle"
import Access from "@/components/Access"
import Imgcards from "@/components/Imgcards"
import Features from "@/components/Features"
import Faqs from "@/components/Faqs"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div>
      <Carousle/>
      <Access/>
      <Imgcards/>
      <Features/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
