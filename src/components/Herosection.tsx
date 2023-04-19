import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

const Herosection = () => {
  const { locale } = useRouter();

  return (
    <div className="bg-[url('/images/herosection-bg.png')] bg-cover">
      <div className="container max-w-screen-xl mx-auto flex sm:flex-row sm:h-[795px] flex-col-reverse p-5 sm:p-10 relative ">
        <div className=" hidden sm:flex absolute font-bold space-x-2 top-0 right-0 mt-[3%] mr-[3%] w-full pl-[100px]">
          <div className=" flex mr-auto ">
            <Link href={''} className="mr-[120px]">
              SANDORA
            </Link>
            <div className=" flex gap-x-10 font-normal">
              <Link href={''}>Company</Link>
              <Link href={''}>Main project</Link>
              <Link href={''}>Sandora project</Link>
            </div>
          </div>

          <Link
            href=""
            locale={'en'}
            className={`${locale === 'en' && ' text-[#B903FC]'} font-normal`}
          >
            ENG
          </Link>
          <p>|</p>
          <Link
            href=""
            locale={'th'}
            className={`${locale === 'th' && ' text-[#B903FC]'} font-normal`}
          >
            TH
          </Link>
          <p>|</p>
          <Link
            href=""
            locale={'tr'}
            className={`${locale === 'tr' && ' text-[#B903FC]'} font-normal`}
          >
            Türkçe
          </Link>
        </div>
        <div className=" sm:w-[40%] flex flex-col text-justify text-[13px] sm:text-16px] space-y-5 justify-center lg:h-[800px]">
          {/* <h1 className=" text-[18px]  font-bold text-transparent textgradient-white">
            <FormattedMessage id="herosection.welcome" />
          </h1> */}
          <img src="/images/sandora.png" alt="" />
          {/* <p className=" text-white">
            <FormattedMessage id="herosection.welcome.description" />
          </p> */}
        </div>
        <div className=" sm:w-[60%] flex justify-center items-center  ">
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
            <img
              src="/images/herosection/ai.png"
              alt=""
              className=" sm:w-auto w-[44px] absolute animation-delay-200 animate-bounce-slow  duration-500 bottom-[35%] right-[15%]"
            />
          </div>
        </div>
        <div className=" flex flex-col absolute bottom-[2%] scale-75  right-1/2  translate-x-1/2 items-center justify-center gap-y-2 cursor-pointer">
          <p className=' text-[16px] font-medium text-white'>ABOUT US</p>
          <img
            src="/images/down.png"
            className=" "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Herosection;
