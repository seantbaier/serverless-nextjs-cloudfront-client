import { Component } from 'react'
import amplifyCustomUi from 'aws-amplify-react-custom-ui'
import { Auth } from 'aws-amplify'

import Router from 'next/router'

class Dashboard extends Component {
  async componentDidMount() {
    Router.push('/')
  }
  render() {
    const { authState } = this.props

    if (authState === 'signedIn') {
    } else {
      // Auth.signOut()
    }
    return null
  }
}

export default amplifyCustomUi.withAuthenticator(Dashboard)
