import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <div className="banner-container">
        <h1 className="banner-text">{props.heading}</h1>
        <span className="banner-text01">
          <span>
            Healthy Nut Mix contains a blend of nuts and fruits, including
            almonds, peanuts, hazelnuts, cashews raisins, cranberries and of
            course Kalamata Baked olives to create a flavorful treat that helps
            you stay full and energized throughout your day. This mix contains
            no artificial flavors, colors or preservatives and they are unsalted
            to create a delicious, low sodium mixed nuts treat. Is an excellent
            source of vitamin E, making it a fun, antioxidant rich snack for the
            whole family.
          </span>
          <br></br>
          <br></br>
          <span>• No artificial flavors, colors or preservatives</span>
          <br></br>
          <br></br>
          <span>
            • Roasted, unsalted with added raisins for a blend of savory and
            sweet
          </span>
          <br></br>
          <br></br>
          <span>• Suggested from dieticians as a daily snacking</span>
          <br></br>
          <br></br>
          <span>
            • are great for on-the-go snacking, backyard gatherings or movie
            night
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
        </span>
        <div className="banner-container1"></div>
      </div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="banner-image"
      />
    </div>
  )
}

Banner.defaultProps = {
  imageAlt: 'image',
  heading: 'Snack Mix - Natural and Healthy',
  imageSrc: '/vbnvbnvbn-300h.jpg',
}

Banner.propTypes = {
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Banner
