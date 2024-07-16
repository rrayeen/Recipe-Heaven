
import FeedBack from "./components/FeedBack";
import FeedBackForm from "./components/FeedBackForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import LinksButton from '@/app/components/LinksButton'



export default  function Home() {
   
    
 
    
  return (
    <>
      <header id="header" className="bg-p1 py-12 overflow-auto bg-cover h-dvh">
        <Header></Header>
      </header>
      <main   id="main" className="shadow-innershadow  bg-secondary py-12">
        <div className=" flex items-center justify-center  w-full">
          <LinksButton direction="recipes">Go check out our recipes !</LinksButton>
        </div>
        <Slider></Slider>
        <FeedBack></FeedBack>
        <FeedBackForm></FeedBackForm>
      </main>
      <Footer></Footer>
    </>
  );
}
