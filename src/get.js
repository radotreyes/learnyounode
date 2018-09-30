const http = require(`http`)
let str = ``
http.get(process.argv[2], (response) => {
  response.on(`data`, (data) => {
    str += data.toString()
  })
  response.on(`end`, () => {
    console.log(str.length)
    console.log(str)
  })
})
