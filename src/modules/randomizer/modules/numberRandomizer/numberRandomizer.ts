import { rndNumber } from "@/utils/rnd/rnd"

export class NumberRandomizer {
  public number = (min: number, max: number): number => rndNumber(min, max)
  public numberStr = (min: number, max: number): string => this.number(min, max).toString()
}

const numberRandomizer = new NumberRandomizer()

export {
  numberRandomizer,
}