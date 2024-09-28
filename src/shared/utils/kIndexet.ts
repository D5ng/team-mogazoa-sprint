export default function kIndexer(item: number | undefined) {
  let isK
  item! > 1000 ? (isK = `${(item! / 1000).toFixed(1)}k`) : (isK = item)
  return isK
}
