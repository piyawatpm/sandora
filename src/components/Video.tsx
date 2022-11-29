const Video = () => {
  return (
    <div className="bg-[url('/images/video-bg.png')] bg-cover sm:h-[795px] mix-blend-overlay relative flex items-center justify-center p-10 sm:p-5">
      {/* https://storage.googleapis.com/geometric-rex-343406.appspot.com/Video/Sandora%20Wallet.mp4 */}
        <img src="/images/computer.png" className=" mix-blend-normal" alt="" />
        <video
        width="802"
        height="508"
        className=" mx-auto absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        controls
        autoPlay
        loop
      >
        <source
          src="https://storage.googleapis.com/geometric-rex-343406.appspot.com/Video/Sandora%20Wallet.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};
export default Video;
