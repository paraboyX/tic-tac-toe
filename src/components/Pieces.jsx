import PropTypes from "prop-types";

const Pieces = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex justify-center items-center border border-sky-500 h-20 w-20"
    >
      {props.nums}
    </div>
  );
};

Pieces.propTypes = {
  onClick: PropTypes.func,
  nums: PropTypes.any,
};

export default Pieces;
