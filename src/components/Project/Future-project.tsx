const FutureProject = () => {
  return (
    <div className=" mt-10">
      <h1 className=" text-[60px] font-extrabold">FUTURE PROJECTS</h1>
      <div className=" flex space-x-3">
        <div className=" w-1/2 flex flex-col rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-12">
          <div className=" flex">
            <h1 className=" text-[36px] font-black text-transparent textgradient-yellow max-w-[164px]">
              Sandora Wallet
            </h1>
            <img src="/images/future_project/wallet.png" alt="" />
          </div>
          <p className=" text-[20px] font-bold">
            The First Blockchain Network Wallet using Quantum Computing
            Processing Concept in the World.
          </p>
        </div>
        <div className=" relative w-1/2 flex flex-col justify-end rounded-[36px] bg-gradient-to-b from-[#CC00FF] to-[#320071] p-12">
          <div className=" flex">
            <h1 className=" text-[36px] font-black text-transparent textgradient-yellow ">
              Sandora <br/>Chain Network
            </h1>
            <img src="/images/future_project/chain.png" className=" absolute top-0 right-0" alt="" />
          </div>
          <p className=" text-[20px] font-bold mt-[70px]">
            Random & Multi Algorithm for Quantum Computing Processing Concept
          </p>
        </div>
      </div>
    </div>
  );
};
export default FutureProject;
