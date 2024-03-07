import Pieces from "./Pieces";

const Box = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center text-center">
          <Pieces nums="1" />
          <Pieces nums="2" />
          <Pieces nums="3" />
        </div>
        <div className="flex justify-center text-center">
          <Pieces nums="4" />
          <Pieces nums="5" />
          <Pieces nums="6" />
        </div>
        <div className="flex justify-center text-center">
          <Pieces nums="7" />
          <Pieces nums="8" />
          <Pieces nums="9" />
        </div>
      </div>
    </>
  );
};

export default Box;
