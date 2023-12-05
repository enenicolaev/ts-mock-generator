import { rndRange } from './rnd'

describe('Test rndRange', () => {

  test('test rndRange', () => {
    const random = rndRange(1, 3)
    expect(random).toBeGreaterThan(0)
    expect(random).toBeLessThan(4)
  });
  
  test('test rndNumber wrong params', () => {
    expect(() => rndRange(10, 1)).toThrow(Error)
  });
})
