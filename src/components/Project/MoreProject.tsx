const MoreProject = () => {
  return (
    <div className="sm:h-screen relative flex flex-col items-center p-20  max-w-screen-xl mx-auto pt-[153px] ">
     
      <div className="  relative w-full flex items-center justify-center">
        <h1 className=" text-bg absolute">ABOUT COMPANY</h1>
        <p className=" text-[44px] font-bold ">ABOUT COMPANY</p>
      </div>
      <p className=" text-[14px] font-normal mt-5 text-justify">
        Sandora Pty Ltd is a dynamic and innovative company that has set itself
        the primary objective of creating a virtual economy through the
        development of a robust product ecosystem powered by advanced blockchain
        technology. With our cutting-edge blockchain technology, we guarantee
        enhanced security and complete transparency, facilitating swift and
        seamless cross-border transactions. Our commitment to growth and
        development transcends the present, and we remain dedicated to creating
        opportunities for mutual growth as we navigate towards a prosperous
        future together.
      </p>
      <div className=" flex-1 flex items-center justify-center">
        <img src="/images/about.png" alt="" />
      </div>

      <div className=" flex flex-col absolute bottom-[2%] right-1/2  translate-x-1/2 scale-75 items-center justify-center gap-y-2 cursor-pointer">
        <p className=" text-[16px] font-medium text-white uppercase ">
          Explore NOW
        </p>
        <img src="/images/down.png" className=" " alt="" />
      </div>
      {/* <div className=" mt-auto h-[200px] w-0  border-t-[50px] border-l-[50px] border-r-[50px] border-l-transaparent border-r-transparent border-t-transparent bg-white absolute bottom-0 "></div> */}
    </div>
  );
};
export default MoreProject;
