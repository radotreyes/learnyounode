const { createServer } = require(`http`)
const map = require(`through2-map`)

const server = createServer((req, res) => {
  console.log(req.url)
  if (req.method === `GET`) {
    console.log(`hello GET request`)
  }
})

server.on(`clientError`, (err) => {
  console.log(err)
})

server.listen(process.argv[2])
