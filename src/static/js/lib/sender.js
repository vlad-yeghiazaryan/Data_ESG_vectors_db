// const fetch = require('node-fetch')

// html element to json
function mapDOM (element, json) {
  var treeObject = {}

  // If string convert to document Node
  if (typeof element === 'string') {
    if (window.DOMParser) {
      parser = new DOMParser()
      docNode = parser.parseFromString(element, 'text/xml')
    } else { // Microsoft strikes again
      docNode = new ActiveXObject('Microsoft.XMLDOM')
      docNode.async = false
      docNode.loadXML(element)
    }
    element = docNode.firstChild
  }

  // Recursively loop through DOM elements and assign properties to object
  function treeHTML (element, object) {
    object.type = element.nodeName
    var nodeList = element.childNodes
    if (nodeList != null) {
      if (nodeList.length) {
        object.content = []
        for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].nodeType == 3) {
            object.content.push(nodeList[i].nodeValue)
          } else {
            object.content.push({})
            treeHTML(nodeList[i], object.content[object.content.length - 1])
          }
        }
      }
    }
    if (element.attributes != null) {
      if (element.attributes.length) {
        object.attributes = {}
        for (var i = 0; i < element.attributes.length; i++) {
          object.attributes[element.attributes[i].nodeName] = element.attributes[i].nodeValue
        }
      }
    }
  }
  treeHTML(element, treeObject)

  return (json) ? JSON.stringify(treeObject) : treeObject
}

// Cleans up the jsons
function get_vector_json (vectorElement) {
  let vecData = JSON.parse(mapDOM(vectorElement, true))
  vecData.attributes.type = vecData.type
  vecData = vecData.attributes
  const vecDataKeys = Object.keys(vecData)

  for (i = 0; i < vecDataKeys.length; i++) {
    if (vecDataKeys[i].includes('-')) {
      const newKey = vecDataKeys[i].replace('-', '_')
      Object.defineProperty(vecData, newKey,
        Object.getOwnPropertyDescriptor(vecData, vecDataKeys[i]))
      delete vecData[vecDataKeys[i]]
    } else if (vecDataKeys[i] == 'type') {
      const newKey = vecDataKeys[i].replace('type', 'shape_type')
      Object.defineProperty(vecData, newKey,
        Object.getOwnPropertyDescriptor(vecData, vecDataKeys[i]))
      delete vecData[vecDataKeys[i]]
    } else if (vecDataKeys[i] == 'id') {
      const newKey = vecDataKeys[i].replace('id', 'id_number')
      Object.defineProperty(vecData, newKey,
        Object.getOwnPropertyDescriptor(vecData, vecDataKeys[i]))
      delete vecData[vecDataKeys[i]]
    }
  }
  return vecData
}
// The sender function
const send = async (url, body) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: body
  }).catch(err => console.log('Error:' + err))
  const content = await rawResponse
  const responseText = await content.text()
  console.log('\n' + responseText + '\n')
}
// The main function
const main = () => {
  // Defined variables
  const url = 'http://localhost:8000/vectors/'
  const vectors = document.querySelector('#svgcontent > g:nth-child(3)').children
  const vectorsArray = []

  for (let index = 1; index < vectors.length; index++) {
    const vector = vectors[index]
    const vectorJson = get_vector_json(vector)
    vectorsArray.push(vectorJson)
  }

  for (let index = 0; index < vectorsArray.length; index++) {
    const vector = vectorsArray[index]
    const jsonBody = JSON.stringify(vector)
    send(url, jsonBody)
  }
  alert(`Successfully sent ${vectorsArray.length} vector objects to the server.`)
}
