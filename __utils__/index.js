const { createParser, ModelParsingOption } = require('@azure/dtdl-parser')

const parseModel = (model) => {
  const modelParser = createParser(ModelParsingOption.PermitAnyTopLevelElement)
  modelParser.options = ModelParsingOption.PermitAnyTopLevelElement
  return modelParser.parse([model])
}

module.exports = {
  parseModel
}
