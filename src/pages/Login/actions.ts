const authenticationSuccess = function () {
  console.log('Successful authentication')
}

const authenticationFailure = function () {
  console.log('Failed authentication')
}

export const login = () => {
  window.Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
      read: 'true',
      write: 'true',
    },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure,
  })
}
