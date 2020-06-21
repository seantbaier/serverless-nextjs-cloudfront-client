import axios from 'axios'

export default (authEndpointUrl) => ({
  find: (params) =>
    axios
      .get(authEndpointUrl(`salesforce/platform-data-contract-check`), {})
      .then((response) => {
        console.log('testy', response)
        return response.data
      })
})
