import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Herosection from '../components/Herosection';
import MoreProject from '../components/Project/MoreProject';
import Project from '../components/Project/Project';
import Video from '../components/Video';

export default function Home() {
  return (
    <div className="bg-[#0E021E] text-white flex flex-col ">
      <Header />
      <Herosection />
      <About />
      {/* <Video/> */}
      <Project />
      {/* <MoreProject /> */}
      <Footer />
    </div>
  );
}
