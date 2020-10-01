const fetch = require('node-fetch')

const url = 'http://localhost:8000/vectors/'

const body = JSON.stringify({ fill: 'none', stroke: '#000', style: 'pointer-events:inherit', x1: '116', y1: '99.453125', x2: '376', y2: '302.453125', id_number: 'svg_1', shape_type: 'line', stroke_width: '1.5', stroke_linejoin: 'undefined', stroke_linecap: 'undefined', stroke_dasharray: 'none' })

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

send(url, body)
