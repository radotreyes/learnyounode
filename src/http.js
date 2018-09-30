const { createServer } = require(`http`)
const { createReadStream } = require(`fs`)

const server = createServer((req, res) => {
  const file = createReadStream(process.argv[3])
  file.pipe(res)
})

server.on(`error`, (err) => {
  console.log(err)
})

server.listen(process.argv[2])
