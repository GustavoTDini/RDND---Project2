import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div> Readable</div>
    )
  }
}

export default connect()(App)