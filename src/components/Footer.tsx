import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-10 sm:mt-[150px] space-y-3">
      <div className=" flex space-x-3">
        <a
          href="https://facebook.com/sandotoken"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/facebook.svg"
            alt=""
          />
        </a>
        <a
          href="https://twitter.com/@Sando_Token"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/twitter.svg"
            alt=""
          />
        </a>
        <a
          href="https://instagram.com/Sandotoken"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/ig.svg"
            alt=""
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpfKKfKs6T4wVeL1V6GRAyQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/youtube.svg"
            alt=""
          />
        </a>
        <a
          href="https://tiktok.com/@sandotoken"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/tiktok.svg"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sando-token-a94282233"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/link.svg"
            alt=""
          />
        </a>
        <a href="https://discord.gg/gjPUjuQY" target="_blank" rel="noreferrer">
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/discord.svg"
            alt=""
          />
        </a>
        <a
          href="https://t.me/+hk4UEOF_HGdlNDI1"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" sm:w-auto w-[23px]"
            src="/images/social/telegram.svg"
            alt=""
          />
        </a>
      </div>
      <p className=" text-[11px] sm:text-[18px] font-bold">
        {" "}
        <FormattedMessage id="footer.copyright" />
      </p>
    </div>
  );
};
export default Footer;
