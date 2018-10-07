import { actions, types } from '../../freezer'

describe('updateTemperature()', () => {
  it('should contain the right action type', () => {
    const action = actions.updateTemperature()
    expect(action.type).toEqual(types.UPDATE_TEMPERATURE)
  })

  it('should contain the temperature in the payload', () => {
    const action = actions.updateTemperature(-5)
    expect(action.payload).toEqual(-5)
  })
})

describe('addProductToFreezer()', () => {
  it('should contain the right action type', () => {
    const action = actions.addProductToFreezer()
    expect(action.type).toEqual(types.ADD_PRODUCT_TO_FREEZER)
  })

  it('should have the name in the action payload', () => {
    const action = actions.addProductToFreezer('foo')
    expect(action.payload.name).toEqual('foo')
  })

  it('should have the amount in the action payload', () => {
    const action = actions.addProductToFreezer('foo', 3)
    expect(action.payload.amount).toEqual(3)
  })

  it('should have the amount in the action payload', () => {
    const action = actions.addProductToFreezer('foo')
    expect(action.payload.amount).toEqual(20)
  })
})

describe('removeScoop()', () => {
  it('should contain the right action type', () => {
    const action = actions.removeScoop('foo')
    expect(action.type).toEqual(types.REMOVE_SCOOP)
  })

  it('should have the flavor name in the payload', () => {
    const action = actions.removeScoop('foo')
    expect(action.payload).toEqual('foo')
  })
})
