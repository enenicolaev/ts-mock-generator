import { rndNumber } from './rnd'

describe('Test rndNumber', () => {

  test('test rndNumber', () => {
    const random = rndNumber(1, 3)
    expect(random).toBeGreaterThan(0)
    expect(random).toBeLessThan(4)
  });
  
  test('test rndNumber wrong params', () => {
    expect(() => rndNumber(10, 1)).toThrow(Error)
  });
})
