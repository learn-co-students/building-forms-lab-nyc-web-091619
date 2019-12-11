import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () =>{
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <h2>All Bands</h2>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

function msp(state){
  return {
    bands: state.bands
  }
}

function mdp(dispatch){
  return {
    addBand: (name) => dispatch({type: "ADD_BAND", payload: name})
  }
}

export default connect(msp, mdp)(BandsContainer)
