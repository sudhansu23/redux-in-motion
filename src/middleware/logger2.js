export default store => next => action => {
  console.log('next (2)', next)
  next(action)
}
