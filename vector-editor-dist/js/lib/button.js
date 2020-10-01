
const btn = document.createElement('BUTTON') // Create a <button> element
btn.innerHTML = 'Send' // Insert text
btn.style.marginTop = '5%'

btn.addEventListener('click', main)
document.querySelector('#tools_top').appendChild(btn)
