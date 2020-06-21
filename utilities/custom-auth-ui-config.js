import SignIn from '../components/auth/SignIn'
import ForgotPassword from '../components/auth/ForgotPassword'
import Amplify from 'aws-amplify'

import * as aws_amplify_react from 'aws-amplify-react'
import amplifyCustomUi from 'aws-amplify-react-custom-ui'

const config = {
  mandatorySignIn: true,
  region: process.env.AWS_REGION,
  userPoolId: process.env.AWS_AUTH_USER_POOL_ID,
  identityPoolId: process.env.AWS_AUTH_IDENTITY_POOL_ID,
  userPoolWebClientId: process.env.AWS_AUTH_APP_CLIENT_ID
}

Amplify.configure(config)
amplifyCustomUi.configure(aws_amplify_react)
amplifyCustomUi.setSignIn(SignIn)
amplifyCustomUi.setForgotPassword(ForgotPassword)

export default amplifyCustomUi
