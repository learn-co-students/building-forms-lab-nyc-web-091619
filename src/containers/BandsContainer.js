import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
