describe('Our first tests', () => {
  it('should work', () => expect(true).toEqual(true))

  it('should work again', () => expect(true).toEqual(true))
})

it('should check for equal values', () => {
  expect(5).toEqual(5)
})

it('should check for equal values using deep equality', () => {
  expect({foo: 5}).toEqual({foo: 5})
  expect([1,2,3]).toEqual([1,2,3])
})

it('should check that an array contains a specific object/array', () => {
  expect([{foo: 4}, {foo: 6}]).toContainEqual({foo: 6})
})

it('should support spies', () => {
  const spy = jest.fn()
  spy()
  spy('foo')
  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveBeenCalledTimes(2)
  expect(spy).toHaveBeenCalledWith('foo')
})
