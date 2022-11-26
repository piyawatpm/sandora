// @ts-ignores
import Hexagon from "react-hexagon";
import Footer from "../Footer";
import FutureProject from "./Future-project";
const chill = () => {
  return (
    <div>
      <p>hello</p>
      <h1>hi</h1>
    </div>
  );
};
const Project = () => {
  return (
    <div className="bg-[url('/images/project-bg.png')] bg-cover bg-center ">
      <div className="p-5 sm:p-10 bg-transparent container mx-auto max-w-screen-xl ">
        <h1 className="text-[20px] sm:text-[60px] font-bold text-transparent textgradient-white">
        SANDORA PROJECTS
        </h1>
        <p className=" text-[13px] mt-5 sm:text-[20px] font-medium">The Sandora company main token or project name is Sando Token ERC-20. But, there are many other projects that are in queue.</p>
        <div className=" pt-10 flex  justify-center ">
          <div className=" flex-col flex ml-[-70px] mt-[-9px]   ">
            <a
              href="https://oceansky.io/"
              target="_blank"
              className="hex  cursor-pointer  translate-y-[50%] oceansky w-[317px] h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-oceansky.png"
                className="w-[140px]"
                alt=""
              />
              <h1 className=" text-[#FFE921] font-extrabold text-[25px]">
                OCEANSKY.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                NFTs Merketplce Platform on Ethereum Chain Network
              </p>
            </a>
            <div className="hex  cursor-pointer translate-y-[50%] mt-[-18px] bg-gradient-to-b mt-[-18px] from-[#CC00FF] to-[#320071] w-[317px] h-[279px] flex flex-col  items-center justify-center p-3">
              <img
                src="/images/logo/logo-monster.png"
                className="w-[218px] h-[79px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[25px]">
                MONSTERRUNNER.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                Metaverse <br />
                GameFi & Play-to-Earn
              </p>
            </div>
          </div>
          
          <div className=" flex-col flex ml-[-70px]  ">
            <a
              href="https://www.solsky.io/"
              target="_blank"
              className="hex  cursor-pointer   solsky w-[317px] h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-solsky.png"
                className="w-[140px]"
                alt=""
              />
              <h1 className=" text-white font-extrabold text-[25px]">
                SOLSKY.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                NFTs Marketplace Platform on Solana Chain Network
              </p>
            </a>
         
            <a
              href="https://www.sandotoken.io/"
              target="_blank"
              className="hex  cursor-pointer mt-[-18px]  bg-gradient-to-b from-[#FF0090] to-[#A90AE1] w-[317px] h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-sando.png"
                className="w-[140px]"
                alt=""
              />
              <h1 className=" text-[#FFE921] font-extrabold text-[25px]">
                SANDOTOKEN.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                The Currency used for the Sandora Projects Platform
              </p>
            </a>
            <a
              className="hex  cursor-pointer bg-gradient-to-b mt-[-18px] from-[#CC00FF] to-[#320071] w-[317px] h-[279px] flex flex-col items-center justify-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-city.png"
                className="w-[249px] h-[118px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[25px]">
                SANDOCITY.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                The Future Virtual <br /> Metaverse Game
              </p>
            </a>
          </div>
          <div className=" flex-col flex ml-[-70px] mt-[-9px]">
            <a
              href="https://www.metasando.io/"
              target="_blank"
              className="hex  cursor-pointer translate-y-[50%] metasando w-[317px] h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-metasando.png"
                className="w-[140px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-yellow font-extrabold text-[25px]">
                METASANDO.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                Metaverse Game NFTs Marketplace Platform on Cross Chain Bridge
              </p>
            </a>
            <div className="hex  cursor-pointer bg-gradient-to-b mt-[-18px] translate-y-[50%] from-[#FF0090] to-[#A90AE1] w-[317px] h-[279px] flex flex-col items-center  pt-5 p-3">
              <img
                src="/images/logo/logo-spin.png"
                className="w-[140px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[25px]">
                METASPINWHEEL.IO
              </h1>
              <p className=" text-[14px] text-center max-w-[200px]">
                Metaverse <br /> GameFi & Play-to-Earn
              </p>
            </div>
          </div>
        </div>
        <FutureProject/>
        <Footer/>
      </div>
    </div>
  );
};
export default Project;
