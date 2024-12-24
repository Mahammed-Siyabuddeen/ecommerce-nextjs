import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import Services from "../components/Services";
import PopularProduct from "@/components/PopularProducts";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MobileNavbar from "@/components/MobileNavbar";
export default function Home() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <HeroSection />
      <CategoryList />
      <PopularProduct />
      <Services />
      <Footer />
    </div>
  );
}
