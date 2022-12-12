import { FormattedMessage } from "react-intl";

const FutureProject = () => {
  return (
    <div className=" mt-10">
      <h1 className="  sm:text-[60px] font-extrabold mb-10 ">
        {" "}
        <FormattedMessage id="project.future.header" />
      </h1>

      <div className=" flex flex-col  sm:space-y-5 space-y-3 px-8 text-justify">
      <img
            src="/images/future_project/wallet.gif"
            
            className=" sm:hidden"
            alt=""
          />
        <div className=" sm:h-auto h-[230px]  flex flex-row justify-around rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-7 sm:p-12">
          <img
            src="/images/future_project/wallet.gif"
            
            className="sm:w-[500px] sm:h-[604px] mx-auto sm:block hidden"
            alt=""
          />
          <div className=" flex flex-col justify-center">
            <div className=" flex flex-row justify-center items-center ">
              <h1 className=" text-[16px] sm:text-[36px] font-black text-transparent textgradient-yellow ">
                <FormattedMessage id="project.future.wallet.header" />
              </h1>
              <div className=" flex items-center justify-center w-full">
                <img
                  src="/images/future_project/wallet.png"
                  className=" sm:w-auto w-[65px] h-[80px] sm:h-auto"
                  alt=""
                />
              </div>
            </div>
            <p className=" text-[13px] sm:text-[20px] font-bold">
              <FormattedMessage id="project.future.wallet.description" />
            </p>
          </div>
        </div>
        <img src="/images/future_project/chain-diagram.png" className=" sm:hidden" alt="" />
        <div className="  sm:h-auto h-[230px]   flex flex-row justify-around sm:justify-end rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-7   sm:p-12">
       
          <div className=" flex flex-col justify-center">

          <div className=" flex flex-col  ">
            <h1 className=" text-[16px] sm:text-[36px] font-black text-transparent textgradient-yellow ">
              <FormattedMessage id="project.future.chain.header" />
            </h1>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/future_project/chain.png"
                className=" sm:w-auto sm:h-auto w-[100px] h-[50px]  top-0 right-0"
                alt=""
              />
            </div>
          </div>
          <p className=" text-[13px] sm:text-[20px] font-bold sm:mt-[70px]">
            <FormattedMessage id="project.future.chain.description" />
          </p>
          </div>
          <img src="/images/future_project/chain-diagram.png" className="sm:block hidden" alt="" />
        </div>
      </div>
    </div>
  );
};
export default FutureProject;
