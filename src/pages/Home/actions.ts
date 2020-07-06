export const getBoards = () => {
  window.Trello.get(
    '/members/me/boards',
    () => {
      console.log('success')
    },
    () => {
      console.log('failed')
    }
  )
}
