// @ts-ignores
import Hexagon from "react-hexagon";
const chill = () => {
  return (
    <div>
      <p>hello</p>
      <h1>hi

      </h1>
    </div>
  );
};
const Project = () => {
  return (
    <div className=" p-10 bg-transparent container mx-auto max-w-screen-xl">
      <h1 className="text-[35px] font-bold text-transparent textgradient-white">
        PROJECT
      </h1>
      <Hexagon
        className=" w-[307px] h-[269px]"
        backgroundImage="images/sando.png"
        flatTop
        style={{
          padding: "50px",
          width: "307px",
          height: "269px",
          stroke: "none",
        }}
        href="http://espen.codes/"
      />
    </div>
  );
};
export default Project;
