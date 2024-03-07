import PropTypes from "prop-types";

const Pieces = ({ onButtonClick, nums }) => {
  return (
    <div
      onClick={onButtonClick}
      className="flex justify-center items-center border border-sky-500 h-20 w-20"
    >
      {nums}
    </div>
  );
};

Pieces.propTypes = {
  nums: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired, // Use the appropriate prop type
};

export default Pieces;
