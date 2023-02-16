import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Project from "../components/Project/Project";
import Video from "../components/Video";

export default function Home() {
  return (
    <div className="bg text-white">
      <Header/>
      <Herosection />
      <Video/>
      <Project/>
    </div>
  );
}
