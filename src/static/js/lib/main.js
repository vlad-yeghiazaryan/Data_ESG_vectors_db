import send from './sender.js'
import makeButton from './button.js'
import getVectorJson from './vector_to_json.js'

// The main function
const main = () => {
  // Defined variables
  const url = '../vectors/'
  const vectors = document.querySelectorAll('#svgcontent > g')
  const vectorsArray = []

  for (let index = 1; index < vectors.length; index++) {
    const vectorCollection = vectors[index].children
    for (let jIndex = 1; jIndex < vectorCollection.length; jIndex++) {
      const vector = vectorCollection[jIndex]
      const vectorJson = getVectorJson(vector)
      vectorsArray.push(vectorJson)
    }
  }

  for (let index = 0; index < vectorsArray.length; index++) {
    const vector = vectorsArray[index]
    const jsonBody = JSON.stringify(vector)
    send(url, jsonBody)
  }
  alert(`Successfully sent ${vectorsArray.length} vector objects to the server.`)
}

makeButton(main)
