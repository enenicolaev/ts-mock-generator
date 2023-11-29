class Randomizer {
  public getRndUpper = (): string => this.getRndChar().toUpperCase()
  public getRndLower = (): string => this.getRndChar().toLowerCase()

  public rnd = (range: number) => Math.floor(Math.random() * range)
  public rndElem = <T = any>(arr: T[]): T => arr[this.rnd(arr.length)]

  private getRndChar = () => String.fromCharCode(this.rnd(26) + 65)
}
const randomizer = new Randomizer()

export {
  randomizer,
}