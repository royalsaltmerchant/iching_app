import data from '../data/data.json'

export function getAllHexagrams() {
  const allHexagrams = data.hexagrams
  console.log(allHexagrams)
  return allHexagrams
}

export function getHexagramByBinary(binary) {
  const binaryString = binary.toString().replaceAll(',','')
  allHexagrams = data.hexagrams
  const hexagramByBinary = allHexagrams.filter(hexagram => 
    hexagram.binary === binaryString
  )
  return hexagramByBinary
}
