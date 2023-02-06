const coreLibrary = require('../../index.js')
const { parseModel } = require('../../__utils__/index.js')

let deviceStatusProp
let genericMachineV1

beforeAll(async () => {
  genericMachineV1 = await parseModel(coreLibrary.genericMachine.v1)
  deviceStatusProp = genericMachineV1['dtmi:com:example:thegenericmachine:_contents:__deviceStatus;1']
})

describe('Generic Machine v1 - Properties', () => {
  it('Device status should an open string', () => {
    expect(deviceStatusProp.schema.id).toBe('dtmi:dtdl:instance:Schema:string;2')
  })
})
