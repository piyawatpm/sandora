/* eslint-disable react/no-unescaped-entities */
// @ts-ignores

import { FormattedMessage } from 'react-intl';
import Footer from '../Footer';

const Project = () => {
  return (
    <div className="project bg-cover bg-center  relative py-[133px]">
      <div className=" w-screen absolute top-0">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="svgcolor-light "
          width="100%"
          height="133"
        >
          <path d="M 0 0 L 0 100 L 100 0 Z" fill="#0E021E" />
        </svg>
      </div>
      <div className="p-5 sm:p-10 bg-transparent container mx-auto max-w-screen-xl ">
        <div className="  relative w-full flex items-center justify-center">
          <h1 className=" text-bg absolute">MAIN PROJECTS</h1>
          <p className=" text-[44px] font-bold ">MAIN PROJECTS</p>
        </div>
        <p className=" text-[13px] mt-5 sm:text-[16px] font-medium">
          {' '}
          Our main projects, the Sandora Chain Network and Sandora Wallet, offer
          our users the highest levels of security and convenience, delivering a
          seamless and efficient experience. Our Sando tokens, which are
          exchange and utility tokens based on the ERC-20 standard, allow for
          crowdfunding within our ecosystem to build our operations and
          platforms.
        </p>

        <div className=" flex flex-col  sm:space-y-5 space-y-3 px-8 text-justify">
          <div className=" flex w-full">
            <div className=" flex flex-col justify-center w-[70%] ">
              <h1 className="  text-[28px] font-semibold uppercase text-left  text-transparent textgradient-yellow ">
                Sandora Wallet
              </h1>

              <p className=" text-[13px] sm:text-[16px] font-normal">
                The First Blockchain Network Wallet using Quantum Computing
                Processing Concept in the World.
              </p>
              <p className=" mt-2">
                Sandora Wallet is a future project of Sandora Chain Network that
                aims to provide users with a secure and user-friendly way to
                store and manage their cryptocurrencies and other digital
                assets. The wallet will be designed to support multiple
                blockchains, including Ethereum and Binance Smart Chain, and
                will allow users to easily switch between different networks.
              </p>
            </div>
            <img
              src="/images/future_project/wallet.gif"
              className="sm:w-[256px] sm:h-[310px] mx-auto sm:block hidden"
              alt=""
            />
          </div>
          <div className=" flex w-full">
            <img
              src="/images/future_project/chain.png"
              className=" absolute"
              alt=""
            />
            <div className=" flex flex-col items-end ml-[23%] gap-y-3">
              <h1 className="  text-[28px] font-semibold uppercase  text-transparent textgradient-yellow ">
                Sandora CHAIN NETWORK
              </h1>

              <p className=" text-[13px] sm:text-[16px] font-normal">
                Random & Multi Algorithm for Quantum Computing Processing
                Concept.
              </p>
              <p className=" mt-2 z-10">
                Sandora Chain Network is a decentralized finance (DeFi) platform
                that aims to provide a secure and scalable blockchain
                infrastructure for building decentralized applications (dApps).
                The platform is built on top of the Ethereum blockchain and
                utilizes its smart contract capabilities. However, Sandora Chain
                Network aims to overcome some of the limitations of the Ethereum
                network, such as high gas fees and slow transaction processing
                times.
              </p>
              <button className=" button px-[35px] py-[12px]">
                Learn More
              </button>
            </div>
          </div>
          <div className=" flex w-full">
            <div className=" flex flex-col justify-center items-start gap-y-3 w-[70%]">
              <h1 className="  text-[28px] font-semibold uppercase text-left  text-transparent textgradient-yellow ">
                Sandora SWAP
              </h1>

              <p className=" text-[13px] sm:text-[16px] font-normal">
                Sandora Swap is a decentralized exchange (DEX) protocol that
                operates on the Sandora Chain Network, enabling users to trade
                cryptocurrencies and other digital assets on the Sandora Chain.
                The Sandora Chain is designed to support Sandora's ecosystem of
                projects, including OceanSkyDigital NFTs Marketplace on
                Ethereum, Solsky NFTs Digital Marketplace on Solana, ArtsAI,
                MetaSando Play-to-Earn Game Metaverse such as MonsterRunner,
                MetaSpinWheel, and Sandocity.
              </p>
              <button className=" button px-[35px] py-[12px]">
                Learn More
              </button>
            </div>
            <img src="/images/future_project/swap.png" className="" alt="" />
          </div>
        </div>
        <div className=" flex flex-col absolute bottom-[133px] right-1/2  translate-x-1/2 scale-75 items-center justify-center gap-y-2 cursor-pointer">
          <p className=" text-[16px] font-medium text-white uppercase ">
            explore our projects
          </p>
          <img src="/images/down.png" className=" " alt="" />
        </div>
      </div>

    </div>
  );
};
export default Project;
