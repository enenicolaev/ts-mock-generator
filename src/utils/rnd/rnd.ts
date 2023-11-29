const rndNumber = (min: number, max: number) => {
  if (max <= min) {
    throw new Error('rndNumber func wrong parameters - min is greater than max')
  }
  const random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
}

export {
  rndNumber,
}