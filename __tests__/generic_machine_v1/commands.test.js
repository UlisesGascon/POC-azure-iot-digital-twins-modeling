const coreLibrary = require('../../index.js')
const { parseModel } = require('../../__utils__/index.js')

let rebootCmd
let genericMachineV1

beforeAll(async () => {
  genericMachineV1 = await parseModel(coreLibrary.genericMachine.v1)
  rebootCmd = genericMachineV1['dtmi:com:example:thegenericmachine:_contents:__reboot;1']
})

describe('Generic Machine v1 - Commands', () => {
  describe('reboot', () => {
    it('Should include the command', () => {
      expect(rebootCmd.entityKind).toBe('command')
      expect(rebootCmd.name).toBe('reboot')
    })

    it('Payload: Should require a delay as integer', () => {
      const payload = genericMachineV1[rebootCmd.request.id]
      expect(payload.entityKind).toBe('commandpayload')
      expect(payload.schema.id).toBe('dtmi:dtdl:instance:Schema:integer;2')
    })
  })
})
