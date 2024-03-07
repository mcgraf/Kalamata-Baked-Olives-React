import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <h1 className="app-component-text">{props.heading}</h1>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  heading: 'Contact Us',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default AppComponent
