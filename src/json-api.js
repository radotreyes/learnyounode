const { createServer } = require(`http`)
const url = require(`url`)

const server = createServer((req, res) => {
  if (req.method === `GET`) {
    const requestedUrl = url.parse(req.url)
    if (requestedUrl.pathname === `/api/parsetime`) {
      res.writeHead(200, { 'Content-Type': `application/json` })
      const isoTimeString = requestedUrl.query
        .split(`T`)[1]
        .split(`.`)[0]
        .split(`:`)
        .map(string => Number(string))
      const json = JSON.stringify({
        hour: isoTimeString[0] + 17,
        minute: isoTimeString[1],
        second: isoTimeString[2],
      })
      res.end(json)
    } else if (requestedUrl.pathname === `/api/unixtime`) {
      const unixTime = requestedUrl.query.split(`=`)[1].replace(`T`, ` `)
      const json = JSON.stringify({
        unixtime: Number(new Date(unixTime).getTime()),
      })
      res.end(json)
    }
  }
})

server.on(`clientError`, (err) => {
  console.log(err)
})

server.listen(process.argv[2])
