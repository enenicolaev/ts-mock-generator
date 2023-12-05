import { rndRange } from "@/utils/rnd/rnd"

export class Randomizer {
  public number = (min: number, max: number): number => rndRange(min, max)
  public numberStr = (min: number, max: number): string => this.number(min, max).toString()
  public rndElem = <T = any>(arr: T[]): T => {
    if (!arr.length) {
      throw new Error('rndElem method missed array')
    }
    
    return arr[this.number(0, arr.length - 1)]
  }
}

const randomizer = new Randomizer()

export {
  randomizer,
}
