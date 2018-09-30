const { readFile } = require(`fs`)

// readFileSync => [[Buffer]]
// read file from user input
const handleError = (err, data) => {
  console.error(err)
  console.log(data)
  process.exit(1)
}

readFile(process.argv[2], (err, data) => {
  if (err) handleError()
  console.log(
    data
      .toString()
      .split(``)
      .filter(char => char === `\n`).length,
  )
})
