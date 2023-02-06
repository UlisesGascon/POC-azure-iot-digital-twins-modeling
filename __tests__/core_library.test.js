const coreLibrary = require('../index.js')
const { createParser, ModelParsingOption } = require('@azure/dtdl-parser')
const { getJsonModel } = require('../utils.js')

describe('Core Library', () => {
  describe('Generic Machine v1', () => {
    it('Should be a valid DTLD v2 model', () => {
      const modelParser = createParser(ModelParsingOption.PermitAnyTopLevelElement)
      modelParser.options = ModelParsingOption.PermitAnyTopLevelElement
      expect(async () => await modelParser.parse([coreLibrary.genericMachine.v1])).not.toThrow()
    })

    it('Should be the same as the one in the models folder', () => {
      const genericMachineV1 = getJsonModel('v1-generic-machine')
      expect(coreLibrary.genericMachine.v1).toBe(genericMachineV1)
    })
  })
})
