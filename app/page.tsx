import Image from "next/image";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import Products from "../components/Products";
import Services from "../components/Services";
import PopularProduct from "@/components/PopularProducts";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Slider/>
      <CategoryList/>
      <PopularProduct/>
      <Services/>
      <Footer/>
    </div>
  );
}
