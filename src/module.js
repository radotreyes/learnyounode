// process.argv[2] = directory name
// process.argv[3] = extension filter

const fs = require(`fs`)
const path = require(`path`)
module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err)
    }

    list = list.filter(file => path.extname(file) === `.${filterStr}`)

    callback(null, list)
  })
}
