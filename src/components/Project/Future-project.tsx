const FutureProject = () => {
  return (
    <div className=" mt-10">
      <h1 className="  sm:text-[60px] font-extrabold mb-10">FUTURE PROJECTS</h1>
      <div className=" flex sm:flex-row flex-col  sm:space-y-0 space-y-3 sm:space-x-3 px-8 text-justify">
        <div className=" sm:h-auto h-[230px] sm:w-1/2 flex flex-col justify-around rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-7 sm:p-12">
          <div className=" flex ">
            <h1 className=" text-[16px] sm:text-[36px] font-black text-transparent textgradient-yellow sm:max-w-[164px]">
              Sandora <br/> Wallet
            </h1>
            <div className=" flex items-center justify-center w-full">

            <img src="/images/future_project/wallet.png" className=" sm:w-auto w-[65px] h-[80px] sm:h-auto" alt="" />
            </div>
          </div>
          <p className=" text-[13px] sm:text-[20px] font-bold">
            The First Blockchain Network Wallet using Quantum Computing
            Processing Concept in the World.
          </p>
        </div>
        <div className=" relative sm:h-auto h-[230px]  sm:w-1/2 flex flex-col justify-around sm:justify-end rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-7   sm:p-12">
          <div className=" flex">
            <h1 className=" text-[16px] sm:text-[36px] font-black text-transparent textgradient-yellow ">
              Sandora <br/>Chain Network
            </h1>
            <img src="/images/future_project/chain.png" className=" sm:w-auto sm:h-auto w-[100px] h-[50px] sm:absolute top-0 right-0" alt="" />
          </div>
          <p className=" text-[13px] sm:text-[20px] font-bold sm:mt-[70px]">
            Random & Multi Algorithm for Quantum Computing Processing Concept
          </p>
        </div>
      </div>
    </div>
  );
};
export default FutureProject;
