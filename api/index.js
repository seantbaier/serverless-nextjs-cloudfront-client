import Amplify, { Auth } from 'aws-amplify'
import axios from 'axios'

import { ENDPOINT_TYPE } from '../store/constants'
import auth from './auth'
import user from './user'
import salesforce from './salesforce'
import platformDataContractCheck from './platformDataContractCheck'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_AUTH_USER_POOL_ID,
    identityPoolId: process.env.AWS_AUTH_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.AWS_AUTH_APP_CLIENT_ID
  }
})

const endpointUrl = (type, url) => [process.env.API_URL, type, url].join('/')

const publicEndpointUrl = (url) => endpointUrl(ENDPOINT_TYPE.PUBLIC, url)
const authEndpointUrl = (url) => endpointUrl(ENDPOINT_TYPE.AUTH, url)

const getJwtToken = async () => {
  let token = null

  try {
    const session = await Auth.currentSession()

    token = session.idToken.jwtToken
  } catch (err) {
    // ignore for now...
  }

  return token
}

// Add auth credentials to all outgoing API requests.
axios.interceptors.request.use(
  async (config) => {
    if (config.url.includes(process.env.API_URL)) {
      const token = await getJwtToken()
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.common.authorization = token
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default {
  auth: auth(Auth),
  user: user(authEndpointUrl, publicEndpointUrl),
  salesforce: salesforce(authEndpointUrl, publicEndpointUrl),
  platformDataContractCheck: platformDataContractCheck(authEndpointUrl)
}
