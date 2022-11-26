// @ts-ignores

import { FormattedMessage } from "react-intl";
import Footer from "../Footer";
import FutureProject from "./Future-project";
const Project = () => {
  return (
    <div className="bg-[url('/images/project-bg.png')] bg-cover bg-center ">
      <div className="p-5 sm:p-10 bg-transparent container mx-auto max-w-screen-xl ">
        <h1 className="text-[20px] sm:text-[60px] font-bold text-transparent textgradient-white">
        <FormattedMessage id="project.header" />
        </h1>
        <p className=" text-[13px] mt-5 sm:text-[20px] font-medium">  <FormattedMessage id="project.description" /></p>
        <div className=" pt-10 flex sm:flex-row flex-col sm:items-start items-center justify-center ">
          <div className=" flex-col flex  mt-[-9px]   ">
            <a
              href="https://oceansky.io/"
              target="_blank"
              className="hex  hover:scale-105  cursor-pointer  sm:translate-y-[50%] oceansky w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-oceansky.png"
                className=" w-[82px] sm:w-[140px]"
                alt=""
              />
              <h1 className=" text-[#FFE921] font-extrabold text-[13px] sm:text-[25px]">
                OCEANSKY.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.ocean.description" />
              </p>
            </a>
            <div className="hex  hover:scale-105  cursor-pointer sm:translate-y-[50%] bg-gradient-to-b sm:mt-[-18px] from-[#CC00FF] to-[#320071] w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col  items-center justify-center p-3">
              <img
                src="/images/logo/logo-monster.png"
                className="w-[120px] sm:w-[218px] h-[46px] sm:h-[79px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[13px] sm:text-[25px]">
                MONSTERRUNNER.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.monster.description" />
              </p>
            </div>
          </div>
          
          <div className=" flex-col flex sm:ml-[-70px]  ">
            <a
              href="https://www.solsky.io/"
              target="_blank"
              className="hex  hover:scale-105  cursor-pointer   solsky w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
              >
              <img
                src="/images/logo/logo-solsky.png"
                className=" w-[82px] sm:w-[140px]"
                alt=""
              />
              <h1 className=" text-white font-extrabold text-[13px] sm:text-[25px]">
                SOLSKY.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.solsky.description" />
              </p>
            </a>
         
            <a
              href="https://www.sandotoken.io/"
              target="_blank"
              className="hex  hover:scale-105  cursor-pointer sm:mt-[-18px]  bg-gradient-to-b from-[#FF0090] to-[#A90AE1] w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-sando.png"
                className=" w-[82px] sm:w-[140px]"
                alt=""
              />
              <h1 className=" text-[#FFE921] font-extrabold text-[13px] sm:text-[25px]">
                SANDOTOKEN.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.sando.description" />
              </p>
            </a>
            <a
              className="hex  hover:scale-105  cursor-pointer bg-gradient-to-b sm:mt-[-18px] from-[#CC00FF] to-[#320071] w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center justify-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-city.png"
                className="w-[191px] sm:w-[249px] h-[81px] sm:h-[118px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[13px] sm:text-[25px]">
                SANDOCITY.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.city.description" />
              </p>
            </a>
          </div>
          <div className=" flex-col flex sm:ml-[-70px] sm:mt-[-9px]">
            <a
              href="https://www.metasando.io/"
              target="_blank"
              className="hex  hover:scale-105  cursor-pointer sm:translate-y-[50%] metasando w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center p-3"
              rel="noreferrer"
            >
              <img
                src="/images/logo/logo-metasando.png"
                className=" w-[82px] sm:w-[140px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-yellow font-extrabold text-[13px] sm:text-[25px]">
                METASANDO.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.metasando.description" />
              </p>
            </a>
            <div className="hex  hover:scale-105  cursor-pointer bg-gradient-to-b sm:mt-[-18px] sm:translate-y-[50%] from-[#FF0090] to-[#A90AE1] w-[250px] sm:w-[317px] h-[211px] sm:h-[279px] flex flex-col items-center  pt-5 p-3">
              <img
                src="/images/logo/logo-spin.png"
                className=" w-[82px] sm:w-[140px]"
                alt=""
              />
              <h1 className="  text-transparent textgradient-green font-extrabold text-[13px] sm:text-[25px]">
                METASPINWHEEL.IO
              </h1>
              <p className=" text-[11px] sm:text-[14px] text-center max-w-[200px]">
              <FormattedMessage id="project.spin.description" />
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
