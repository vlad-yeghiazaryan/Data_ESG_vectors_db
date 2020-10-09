import send from './sender.js'
import makeButton from './button.js'
import getVectorJson from './vector_to_json.js'

// The main function
const main = async () => {
  // Defined variables
  const url = '../vectors/'
  const vectors = document.querySelectorAll('#svgcontent > g')
  const vectorsArray = []

  debugger
  for (let index = 1; index < vectors.length; index++) {
    const vectorCollection = vectors[index].children
    for (let jIndex = 1; jIndex < vectorCollection.length; jIndex++) {
      const vector = vectorCollection[jIndex]
      const vectorJson = getVectorJson(vector, 'original_')
      vectorsArray.push(vectorJson)
    }
  }
  for (let index = 0; index < vectorsArray.length; index++) {
    const vector = vectorsArray[index]
    const jsonBody = JSON.stringify(vector)

    const res = await send(url, jsonBody)
    if (res !== 200) {
      alert(`Sent ${vectorsArray.length} vector object(s) to the server. Response: ${res}`)
    } else if (index === vectorsArray.length - 1) {
      alert(`Sent ${vectorsArray.length} vector object(s) to the server. Response: ${res}`)
    }
  }
}

makeButton(main)
