const { readFileSync } = require(`fs`)

// readFileSync => [[Buffer]]
// read file from user input
const buffer = readFileSync(process.argv[2])
console.log(
  buffer
    .toString()
    .split(``)
    .filter(char => char === `\n`).length,
)
