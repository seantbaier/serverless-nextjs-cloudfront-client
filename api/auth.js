export default (Auth) => ({
  signIn: async (credentials) => {
    const { email, password } = credentials
    return Auth.signIn(email, password)
  },
  signUp: (params) => {
    const { email, password, ...signUpParams } = params
    return Auth.signUp({
      username: email,
      password,
      attributes: { email, ...signUpParams }
    }).then((response) => {
      response.user.password = password
      response.user.email = email
      return response
    })
  },

  completeNewPassword: (user, password) =>
    Auth.completeNewPassword(user, password),

  currentSession: () => Auth.currentSession(),

  currentUser: () => Auth.currentAuthenticatedUser(),

  logout: () => () => {
    Auth.signOut()
    window.location.reload()
  },
  confirmSignUp: (username, code) =>
    Auth.confirmSignUp(username, code, { forceAliasCreation: true }),

  forgotPassword: (username) => Auth.forgotPassword(username),

  forgotPasswordConfirm: (params) => {
    const { username, code, newPassword } = params
    return Auth.forgotPasswordSubmit(username, code, newPassword)
  },
  changePassword: (user, oldPassword, newPassword) =>
    Auth.changePassword(user, oldPassword, newPassword),

  updateAuthAttributes: (user, attributes) =>
    Auth.updateUserAttributes(user, attributes)
})
