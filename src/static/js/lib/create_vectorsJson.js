import getVectorJson from './vector_to_json.js'

const createVectorsJson = (vectors, version) => {
  const svgFile = document.querySelector('#tool_open > input[type=file]')
  if (svgFile) {
    var filename = svgFile.value.split(/(\\|\/)/g).pop()
  }
  const vectorsJson = {}
  for (let index = 1; index < vectors.length; index++) {
    const vectorCollection = vectors[index].children
    for (let jIndex = 1; jIndex < vectorCollection.length; jIndex++) {
      const vector = vectorCollection[jIndex]
      const vectorJson = getVectorJson(vector, version)
      // Adding the filename
      vectorJson.filename = filename
      const svgNumber = vectorJson[version + 'id']
      vectorsJson[svgNumber] = vectorJson
    }
  }
  return vectorsJson
}
export default createVectorsJson
