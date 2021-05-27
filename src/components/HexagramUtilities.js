import data from '../data/data.json'

export function getAllHexagrams() {
  const allHexagrams = data.hexagrams
  return allHexagrams
}

export function getHexagramByBinary(binary) {
  const binaryString = binary.toString().replaceAll(',','')
  const allHexagrams = data.hexagrams
  const hexagramByBinary = allHexagrams.filter(hexagram => 
    hexagram.binary === binaryString
  )
  return hexagramByBinary[0]
}
