import { randomizer } from './randomizer'

describe('Test randomizer', () => {

  test('test randomizer number method', () => {
    const random = randomizer.number(1, 3)
    expect(random).toBeGreaterThan(0)
    expect(random).toBeLessThan(4)
  });
  
  test('test randomizer numberStr method', () => {
    const random = randomizer.numberStr(1, 3)
    expect(typeof random === 'string')
    expect(Number(random)).toBeGreaterThan(0)
    expect(Number(random)).toBeLessThan(4)
  });

  test('test randomizer rndElem method', () => {
    expect(() => randomizer.rndElem([])).toThrow(Error)

    const arr = [1, 4, 10, 101, 56]
    expect(arr.includes(randomizer.rndElem(arr))).toBeTruthy()
  });
})
