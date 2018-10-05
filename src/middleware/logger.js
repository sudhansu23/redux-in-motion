export default store => next => action => {
  console.log('next', next)
  console.log('action', action)
  next(action)
  console.log('state', store.getState())
}
