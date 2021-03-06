import axios from 'axios'

export default (authEndpointUrl, publicEndpointUrl) => ({
  find: (params) => {
    let queryParams = Object.assign({}, params)
    if (params && params.filter) {
      queryParams = Object.assign(queryParams, params.filter)
      delete queryParams.filter
    }

    if (params && params.sort) {
      queryParams = Object.assign(queryParams, {
        sort: Object.keys(params.sort)
          .map((key) => {
            return params.sort[key].toLowerCase() === 'desc' ? `-${key}` : key
          })
          .join(',')
      })
    }
    return axios
      .get(publicEndpointUrl(`users`), queryParams)
      .then((response) => response.data)
  },
  findById: (id) =>
    axios
      .get(publicEndpointUrl(`users/${id}`), {})
      .then((response) => response.data),
  create: (params) =>
    axios
      .post(authEndpointUrl('users'), params)
      .then((response) => response.data),
  update: (id, params) =>
    axios
      .put(authEndpointUrl(`users/${id}`), params)
      .then((response) => response.data),
  delete: (id) =>
    axios
      .patch(authEndpointUrl(`users/${id}`))
      .then((response) => response.data)
})
