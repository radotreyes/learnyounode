const { readdir } = require(`fs`)

const handleError = (err, data) => {
  console.error(err)
  console.log(data)
}

const filetype = new RegExp(`.${process.argv[3]}$`)
readdir(process.argv[2], (err, data) => {
  if (err) handleError()
  console.log(data.filter(line => line.match(filetype)).join(`\n`))
})
