
import FeedBack from "./components/FeedBack";
import FeedBackForm from "./components/FeedBackForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Navigation from "./components/Navigation";
import Link from "next/link";


export default  function Home() {
   
    
 
    
  return (
    <>
      <header id="header" className="bg-p1 py-12 overflow-auto bg-cover h-dvh">
        <Header></Header>
      </header>
      <main   id="main" className=" bg-secondary py-12">
        <div className=" flex items-center justify-center  w-full">
          <Link
            className="my-10 bg-third py-4 px-3 rounded-full"
            href={"/recipes"}
          >
            Go check out our recipes!
          </Link>
        </div>
        <Slider></Slider>
        <FeedBack></FeedBack>
        <FeedBackForm></FeedBackForm>
      </main>
      <Footer></Footer>
    </>
  );
}
