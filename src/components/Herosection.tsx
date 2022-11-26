const Herosection = () => {
  return (
    <div className="bg-[url('/images/herosection-bg.png')] bg-cover">
      <div className="container max-w-screen-xl mx-auto flex sm:flex-row flex-col-reverse p-5 sm:p-10 ">
        <div className=" sm:w-1/2 flex flex-col text-justify text-[13px] sm:text-[20px] space-y-5 justify-center lg:h-[800px]">
          <h1 className=" text-[20px] sm:text-[35px] font-bold text-transparent textgradient-white">
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
        <div className=" sm:w-1/2 flex justify-center items-center  ">
          <div className=" relative h-fit w-fit">
          <img src="/images/logo.png" alt="" className="" />
          <img
            src="/images/herosection/city.png"
            alt=""
            className=" sm:w-auto w-[44px] absolute animation-delay-75 animate-bounce-slow  duration-500 bottom-0 right-[50%]"
          />
        <img
            src="/images/herosection/monster.png"
            alt=""
            className=" sm:w-auto w-[44px] absolute animation-delay-300  animate-bounce-slow delay-500  duration-500 bottom-[15%] right-[70%]"
          />
            <img
            src="/images/herosection/metasando.png"
            alt=""
            className=" sm:w-auto w-[40px] absolute animation-delay-125 animate-bounce-slow  duration-500 bottom-[50%] left-[10%]"
          />
             <img
            src="/images/herosection/sando.png"
            alt=""
            className=" sm:w-auto w-[60px] absolute animation-delay-100 animate-bounce-slow  duration-500 top-[5%] left-[30%]"
          />
             <img
            src="/images/herosection/solsky.png"
            alt=""
            className=" absolute sm:w-auto w-[44px] animate-bounce-slow  duration-500 top-[5%] right-[20%]"
          />
           <img
            src="/images/herosection/oceansky.png"
            alt=""
            className=" sm:w-auto w-[44px] absolute animation-delay-125 animate-bounce-slow  duration-500 top-[30%] right-[15%]"
          />
           <img
            src="/images/herosection/spin.png"
            alt=""
            className=" sm:w-auto w-[44px] absolute animation-delay-200 animate-bounce-slow  duration-500 bottom-[15%] right-[15%]"
          />
          </div>
          
       
        </div>
      </div>
    </div>
  );
};
export default Herosection;
