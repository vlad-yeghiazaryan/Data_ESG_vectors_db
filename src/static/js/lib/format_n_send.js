import send from './sender.js'
import createVectorsJson from './create_vectorsJson.js'

const formatNSend = async (url, originalVectors) => {
  // Defined variables
  const vectors = document.querySelectorAll('#svgcontent > g')

  // create vectorsJson
  const vectorsJson = createVectorsJson(vectors, 'new_')

  // Combining original and new vector objects
  for (const [key, value] of Object.entries(vectorsJson)) {
    vectorsJson[key] = Object.assign(originalVectors[key], value)
  }
  // send vectors
  const vectorEntries = Object.entries(vectorsJson)
  let index = 0
  for (const [key, value] of vectorEntries) {
    const jsonBody = JSON.stringify(value)
    // Sending the object
    const res = await send(url, jsonBody)
    // Displaying status
    index++
    if (res !== 200) {
      alert(`Sent ${vectorsJson.length} vector object(s) to the server. Response: ${res}`)
    } else if (index === vectorEntries.length) {
      alert(`Sent ${vectorEntries.length} vector object(s) to the server. Response: ${res}`)
    }
  }
}

export default formatNSend
