import makeButton from './button.js'
import formatNSend from './format_n_send.js'
import createVectorsJson from './create_vectorsJson.js'

// The main function
const main = async () => {
  const url = '../vectors/'
  // Sets up formatNSend function to the button
  const decorator = (func, url, originalVectors) => {
    const inner = () => {
      return func(url, originalVectors)
    }
    return inner
  }
  const saveVectorsNLoadButton = () => {
    // Clicks the ok button to load the svg
    const okButton = document.querySelector('#dialog_buttons > input[type=button]:nth-child(1)')
    okButton.click()

    // 4) Save vectors and load button
    const saveNLoad = () => {
      // Save initial positions
      const vectors = document.querySelectorAll('#svgcontent > g')
      const originalVectors = createVectorsJson(vectors, 'original_')

      // Makes the send button
      makeButton(decorator(formatNSend, url, originalVectors))
    }
    // 3) Check if svg is loaded
    let svgLoaded = document.querySelector('#svgcontent > g:nth-child(3)')
    var checkExist = setInterval(function () {
      svgLoaded = document.querySelector('#svgcontent > g:nth-child(3)')
      if (svgLoaded) {
        // Part 4) runs here
        saveNLoad()
        clearInterval(checkExist)
      }
    }, 100)
  }
  // 1) Wait for window to load
  window.onload = function () {
    const svgInput = document.querySelector('#tool_open > input[type=file]')
    // 2) Wait for .svg to be uploaded
    svgInput.addEventListener('change', saveVectorsNLoadButton)
  }
}

// Running the main function
main()
