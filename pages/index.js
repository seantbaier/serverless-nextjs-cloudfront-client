import { Component } from 'react'
import amplifyCustomUi from 'aws-amplify-react-custom-ui'
import { Auth } from 'aws-amplify'

import Router from 'next/router'

class Index extends Component {
  async componentDidMount() {}
  render() {
    const { authState } = this.props

    if (authState === 'signedIn') {
      Router.push('/discrepancy-report')
    } else {
      Auth.signOut()
    }
    return null
  }
}

export default amplifyCustomUi.withAuthenticator(Index)
