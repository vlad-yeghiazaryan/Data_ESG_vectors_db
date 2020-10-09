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
  const status = content.status
  console.log(responseText)
  return status
}

export default send
