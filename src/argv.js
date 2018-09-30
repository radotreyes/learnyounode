if (!process.argv.slice(2).length) {
  console.log(`usage: node argv.js [arg1, [arg2], ...]`)
  process.exit(1)
}

const argv = process.argv.slice(2).map(arg => Number(arg))
console.log(argv.reduce((a, b) => a + b, 0))
