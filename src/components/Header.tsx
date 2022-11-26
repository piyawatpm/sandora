import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { locale } = useRouter();
  return (
    <div className=" bg-black h-8 flex sm:hidden">
      <img src="/images/header-logo.png" className="pl-1" alt="" />
      <div className=" flex text-[12px]  items-center justify-center h-full font-bold space-x-2  ml-auto pr-1 w-fit ">
        <Link
          href=""
          locale={"en"}
          className={`${locale === "en" && "text-[#FFB700]"}`}
        >
          ENG
        </Link>
        <p>|</p>
        <Link
          href=""
          locale={"th"}
          className={`${locale === "th" && "text-[#FFB700]"}`}
        >
          TH
        </Link>
        <p>|</p>
        <Link
          href=""
          locale={"tr"}
          className={`${locale === "tr" && "text-[#FFB700]"}`}
        >
          Türkçe
        </Link>
      </div>
    </div>
  );
};
export default Header;
