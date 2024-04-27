import Image from "next/image";
import Carousle from "@/Components/Carousle"
import Access from "@/Components/Access"
import Imgcards from "@/Components/Imgcards"
import Features from "@/Components/Features"
import Faqs from "@/Components/Faqs"
import Footer from "@/Components/Footer"
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
