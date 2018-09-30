const http = require(`http`)
const [firstUrl, secondUrl, thirdUrl] = process.argv.slice(2)

const logData = url => new Promise((resolve, reject) => {
  http.get(url, (response) => {
    let buffer = ``
    response.on(`data`, (data) => {
      buffer += data.toString()
    })
    response.on(`end`, () => {
      console.log(buffer)
      resolve()
    })
  })
})

async function asyncLog() {
  await logData(firstUrl)
  await logData(secondUrl)
  await logData(thirdUrl)
}

asyncLog()
