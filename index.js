const { getJsonModel } = require('./utils.js')
const genericMachineV1 = getJsonModel('v1-generic-machine')

module.exports = {
  genericMachine: {
    v1: genericMachineV1
  }
}
