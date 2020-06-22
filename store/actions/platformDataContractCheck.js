import api from '../../pages/api'
import { PLATFORM_DATA_CONTRACT_CHECK_FIND } from './types'

export const getPlatformDataContractCheckAction = () => {
  console.log('action')
  return {
    type: PLATFORM_DATA_CONTRACT_CHECK_FIND,
    payload: api.platformDataContractCheck.find()
  }
}
