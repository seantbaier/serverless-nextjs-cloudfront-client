import { Component } from 'react'
import amplifyCustomUi from 'aws-amplify-react-custom-ui'
import { Auth } from 'aws-amplify'

import Router from 'next/router'

class Members extends Component {
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

export default Members

// import React from 'react'
// import { Provider } from 'react-redux'
// import App from 'next/app'
// import withRedux from 'next-redux-wrapper'
// import { makeStore } from '../store'
// import SignIn from '../components/auth/SignIn'
// import ForgotPassword from '../components/auth/ForgotPassword'
// import ForgotPasswordSubmit from '../components/auth/ForgotPasswordSubmit'
// import Amplify from 'aws-amplify'

// import * as aws_amplify_react from 'aws-amplify-react'
// import AmplifyCustomUi from 'aws-amplify-react-custom-ui'

// const config = {
//   mandatorySignIn: true,
//   region: process.env.AWS_REGION,
//   userPoolId: process.env.AWS_AUTH_USER_POOL_ID,
//   identityPoolId: process.env.AWS_AUTH_IDENTITY_POOL_ID,
//   userPoolWebClientId: process.env.AWS_AUTH_APP_CLIENT_ID
// }

// Amplify.configure(config)
// AmplifyCustomUi.configure(aws_amplify_react)
// AmplifyCustomUi.setSignIn(SignIn)
// AmplifyCustomUi.setForgotPassword(ForgotPassword)

// // Import scss files
// import '../styles/_app.scss'

// class AppWithAuth extends App {
//   constructor(props, context) {
//     super(props, context)
//   }

//   static async getInitialProps({ Component, ctx }) {
//     return {
//       pageProps: {
//         // Call page-level getInitialProps
//         ...(Component.getInitialProps
//           ? await Component.getInitialProps(ctx)
//           : {})
//       }
//     }
//   }

//   render() {
//     const { Component, pageProps, store } = this.props
//     return <div>Members Auth?</div>
//   }
// }

// export default AppWithAuth
