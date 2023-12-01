// Component: a reusable button element with props for text, click event handling, and custom class names.

import PropTypes from 'prop-types'

function Button({ text, onClick, className }) {
  return (
    <button 
      className={className} 
      onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
