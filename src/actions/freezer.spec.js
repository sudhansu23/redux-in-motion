import { updateTemperature, addProductToFreezer } from './freezer'
import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/freezer'

describe('updateTemperature()', () => {
  it('should contain the right action type', () => {
    const action = updateTemperature()
    expect(action.type).toEqual(UPDATE_TEMPERATURE)
  })

  it('should contain the temperature in the payload', () => {
    const action = updateTemperature(-5)
    expect(action.payload).toEqual(-5)
  })
})

describe('addProductToFreezer()', () => {
  it('should contain the right action type', () => {
    const action = addProductToFreezer()
    expect(action.type).toEqual(ADD_PRODUCT_TO_FREEZER)
  })

  it('should have the name in the action payload', () => {
    const action = addProductToFreezer('foo')
    expect(action.payload.name).toEqual('foo')
  })

  it('should have the amount in the action payload', () => {
    const action = addProductToFreezer('foo', 3)
    expect(action.payload.amount).toEqual(3)
  })

  it('should have the amount in the action payload', () => {
    const action = addProductToFreezer('foo')
    expect(action.payload.amount).toEqual(20)
  })
})
