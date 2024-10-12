import PropTypes from "prop-types";

const MaxWidthWrapper = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

MaxWidthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MaxWidthWrapper;
