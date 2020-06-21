import { combineReducers } from 'redux'

import authUserDelete from './auth/authUserDelete'
import authCurrentUser from './auth/authCurrentUser'
import authCurrentSession from './auth/authCurrentSession'
import authLogout from './auth/authLogout'
import authUpdateAttributes from './auth/authUpdateAttributes'

import userFind from './users/userFind'
import userFindById from './users/userFindById'
import userCurrentFindById from './users/userCurrentFindById'
import userUpdate from './users/userUpdate'
import userDelete from './users/userDelete'

import salesforceFind from './salesforce/salesforceFind'
import salesforceFindById from './salesforce/salesforceFindById'
import salesforceDelete from './salesforce/salesforceDelete'

import platformDataContractCheckFind from './platformDataContractCheck/platformDataContractCheckFind'

export default combineReducers({
  auth: combineReducers({
    currentUser: authCurrentUser,
    currentSession: authCurrentSession,
    logout: authLogout,
    deleteUser: authUserDelete,
    updateAttributes: authUpdateAttributes
  }),
  user: combineReducers({
    find: userFind,
    findById: userFindById,
    current: userCurrentFindById,
    update: userUpdate,
    delete: userDelete
  }),
  salesforce: combineReducers({
    find: salesforceFind,
    findById: salesforceFindById,
    delete: salesforceDelete
  }),
  platformDataContractCheck: combineReducers({
    find: platformDataContractCheckFind
  })
})
