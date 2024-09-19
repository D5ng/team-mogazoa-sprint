export const generateArray = (length: number) =>
  Array(length)
    .fill(0)
    .map((_, index) => index + 1)
