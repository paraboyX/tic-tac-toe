import PropTypes from "prop-types";

const Pieces = ({ nums }) => {
  return (
    <div className="flex justify-center items-center border border-sky-500 h-20 w-20">
      {nums}
    </div>
  );
};

Pieces.propTypes = {
  nums: PropTypes.any.isRequired, // Use the appropriate prop type
};

export default Pieces;
