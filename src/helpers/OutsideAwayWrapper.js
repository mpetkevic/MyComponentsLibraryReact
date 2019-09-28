import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const OutsideWrapper = ({ children, close }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, close);

  return <div ref={wrapperRef}>{children}</div>;
};

function useOutsideAlerter(ref, callback) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(false);
      // alert("You clicked outside of me!");
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default OutsideWrapper;

OutsideWrapper.propTypes = {
  children: PropTypes.shape(),
  close: PropTypes.func
};

OutsideWrapper.defaultProps = {
  children: {},
  close: () => {}
};
