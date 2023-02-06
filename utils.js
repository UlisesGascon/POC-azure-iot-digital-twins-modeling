const { readFileSync } = require('fs')
const { join } = require('path')

const getJsonModel = (modelFileName) => readFileSync(join(process.cwd(), `./models/${modelFileName}.json`), 'utf8')

module.exports = {
  getJsonModel
}
