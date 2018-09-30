const { createServer } = require(`http`)
const { createReadStream } = require(`fs`)
const server = createServer((req, res) => {
  // by default do nothing
  res.end()
})
server.listen(process.argv[2])

const file = createReadStream(process.argv[3])
server.on(`request`, (req) => {
  req.write(file)
})
