const coreLibrary = require('../../index.js')
const { parseModel } = require('../../__utils__/index.js')

let temperatureTelemetry
let genericMachineV1

beforeAll(async () => {
  genericMachineV1 = await parseModel(coreLibrary.genericMachine.v1)
  temperatureTelemetry = genericMachineV1['dtmi:com:example:thegenericmachine:_contents:__temperature;1']
})

describe('Generic Machine v1 - Telemetry', () => {
  it('Temperature should double numbers', () => {
    expect(temperatureTelemetry.schema.id).toBe('dtmi:dtdl:instance:Schema:double;2')
  })
})
