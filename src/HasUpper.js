import React from 'react';
import PropTypes from 'prop-types';

export default function HasUpper(props) {
  const { text, children } = props;
  let isUpper = false;
  if(text.toLowerCase()==text)
  {
    isUpper = false;
  }
  else {
    isUpper = true;
  }
  if(text.length == 0)
  {
    return "";
  }
  else if(typeof children === 'function')
  {
    return children(isUpper)
  }
  else if(text.toLowerCase()==text)
  {
    return "Weak";
  }
  else {
    isUpper = true;
    return "Strong";
  }
}

HasUpper.propTypes = {
  text: PropTypes.string.isRequired
  
}; 
