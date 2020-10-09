import getVectorJson from './vector_to_json.js'

const createVectorsJson = (vectors, version) => {
  const vectorsJson = {}
  for (let index = 1; index < vectors.length; index++) {
    const vectorCollection = vectors[index].children
    for (let jIndex = 1; jIndex < vectorCollection.length; jIndex++) {
      const vector = vectorCollection[jIndex]
      const vectorJson = getVectorJson(vector, version)
      const svgNumber = vectorJson[version + 'id']
      vectorsJson[svgNumber] = vectorJson
    }
  }
  return vectorsJson
}
export default createVectorsJson
