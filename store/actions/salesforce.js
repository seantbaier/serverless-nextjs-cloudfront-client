import api from '../../api'
import {
  SALESFORCE_FIND,
  SALESFORCE_FINDBYID,
  SALESFORCE_CREATE,
  SALESFORCE_UPDATE,
  SALESFORCE_DELETE,
  SALESFORCE_ACTIVATE
} from './types'

export const getSalesforcesAction = (params) => ({
  type: SALESFORCE_FIND,
  payload: api.salesforce.find(params)
})

export const getSalesforcesInGroupAction = (id, params) => ({
  type: SALESFORCE_FIND,
  payload: api.salesforce.findInGroup(id, params)
})

export const getSalesforceAction = (id) => ({
  type: SALESFORCE_FINDBYID,
  payload: api.salesforce.findById(id)
})

export const createSalesforceAction = (params) => ({
  type: SALESFORCE_CREATE,
  payload: api.salesforce.create(params)
})

export const updateSalesforceAction = (id, params) => ({
  type: SALESFORCE_UPDATE,
  payload: api.salesforce.update(id, params)
})

export const deleteSalesforceAction = (id) => ({
  type: SALESFORCE_DELETE,
  payload: api.salesforce.delete(id)
})

export const activateSalesforceAction = (id) => ({
  type: SALESFORCE_ACTIVATE,
  payload: api.salesforce.activate(id)
})
