const makeButton = (sender) => {
  const btn = document.createElement('BUTTON') // Create a <button> element
  btn.innerHTML = 'Send' // Insert text
  btn.style.marginTop = '5%'

  btn.addEventListener('click', sender)
  document.querySelector('#tools_top').appendChild(btn)
}
export default makeButton
