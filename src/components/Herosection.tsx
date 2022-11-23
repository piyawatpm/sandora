const Herosection = () => {
  return (
    <div className="container max-w-screen-xl mx-auto flex p-10 bg-[url('/images/herosection-bg.png')]">
      <div className=" w-1/2 flex flex-col text-justify text-[20px] space-y-5 justify-center lg:h-[800px]">
        <h1 className=" text-[35px] font-bold text-transparent textgradient-white">
          WELCOME TO
        </h1>
        <img src="/images/sandora.png" alt="" />
        <p>
          Sandora Pty Ltd is registered in Australia on March 2022. We are
          building a product ecosystem to create virtual economy. It also
          provides new opportunities to grow both us and your business. We use
          advance blockchain technology that makes it secure, fast, and fully
          transparency.
        </p>
      </div>
      <div className=" w-1/2 flex justify-center items-center">
        <img src="/images/logo.png" alt="" />
      </div>
    </div>
  );
};
export default Herosection;
