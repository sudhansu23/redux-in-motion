import {increaseCount, reducer} from './conter'

describe('Counter', () => {
  it('should have a default state', () => {
    const result = reducer()
    expect(result.count).toEqual(0)
  })

  it('should increase the count', () => {
    const action = increaseCount()
    const result = reducer(undefined, action)
    expect(result.count).toEqual(1)
  })

  it('should increase the count with a custom count value', () => {
    const action = increaseCount(5)
    const result = reducer(undefined, action)
    expect(result.count).toEqual(5)
  })
})
