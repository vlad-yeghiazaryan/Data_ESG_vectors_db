// html element to json
function mapDOM (element, json) {
  var treeObject = {}

  // If string convert to document Node
  if (typeof element === 'string') {
    if (window.DOMParser) {
      const parser = new DOMParser()
      const docNode = parser.parseFromString(element, 'text/xml')
    } else { // Microsoft strikes again
      const docNode = new ActiveXObject('Microsoft.XMLDOM')
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
        for (let i = 0; i < nodeList.length; i++) {
          if (nodeList[i].nodeType === 3) {
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
        for (let i = 0; i < element.attributes.length; i++) {
          object.attributes[element.attributes[i].nodeName] = element.attributes[i].nodeValue
        }
      }
    }
  }
  treeHTML(element, treeObject)

  return (json) ? JSON.stringify(treeObject) : treeObject
}
// outputs vectors json from html element
function getVectorJson (vectorElement, commonName = 'n_') {
  let vecData = JSON.parse(mapDOM(vectorElement, true))
  vecData.attributes.type = vecData.type
  vecData = vecData.attributes
  let vecDataKeys = Object.keys(vecData)
  // set a common name
  for (let i = 0; i < vecDataKeys.length; i++) {
    const newKey = commonName + vecDataKeys[i]
    Object.defineProperty(vecData, newKey,
      Object.getOwnPropertyDescriptor(vecData, vecDataKeys[i]))
    delete vecData[vecDataKeys[i]]
  }
  // Cleans up the json
  vecDataKeys = Object.keys(vecData)
  for (let i = 0; i < vecDataKeys.length; i++) {
    if (vecDataKeys[i].includes('-')) {
      const newKey = vecDataKeys[i].replace('-', '_')
      Object.defineProperty(vecData, newKey,
        Object.getOwnPropertyDescriptor(vecData, vecDataKeys[i]))
      delete vecData[vecDataKeys[i]]
    }
  }
  return vecData
}
export default getVectorJson
