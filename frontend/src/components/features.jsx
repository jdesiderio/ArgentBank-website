// Component: displays homePage feature cards

import PropTypes from "prop-types"

function FeatureCard ({ imageSrc, imageAlt, title, text }) {
  return (
    <div className="feature-item">
      <img src={imageSrc} alt={imageAlt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
          </div>
  )
}

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FeatureCard