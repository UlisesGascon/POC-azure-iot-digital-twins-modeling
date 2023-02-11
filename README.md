# POC Azure IOT Digital Twins modeling

**Unlock the Power of IoT with Azure Digital Twin Modeling**

### :crystal_ball: About


This proof of concept uses some components from the [Digital Twins Definition Language (DTDL)](https://learn.microsoft.com/en-us/azure/digital-twins/concepts-models) to build and maintain a simple product.


#### DTDL

> A model is similar to a class in an object-oriented programming language, defining a data shape for one particular concept in your real work environment. Models have names (such as Room or TemperatureSensor), and contain elements such as properties, telemetry, and relationships that describe what this type of entity in your environment does. Later, you'll use these models to create digital twins that represent specific entities that meet this type description.

> Twin type models can be written in any text editor. The DTDL language follows JSON syntax, so you should store models with the extension .json. Using the JSON extension will enable many programming text editors to provide basic syntax checking and highlighting for your DTDL documents. 

**References**
- [Learn about twin models and how to define them in Azure Digital Twins](https://learn.microsoft.com/en-us/azure/digital-twins/concepts-models)
- [Digital Twins Definition Language (DTDL)](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/DTDL.v2.md)
- [DTDL extension for VSCode](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-dtdl)


### :tv: Tutorial


__soon__




### :tada: Features 

- Simple interface that include multiple components to build a simple and isolated model
- Tests included to check the model integrity.
- Commands, Telemetry and properties integrated


### :shipit: Simple model

```json
{
    "@context": "dtmi:dtdl:context;2",
    "@id": "dtmi:com:example:thegenericmachine;1",
    "@type": "Interface",
    "displayName": "thegenericmachine",
    "contents": [
      {
        "@type": "Telemetry",
        "name": "temperature",
        "schema": "double"
      },
      {
        "@type": "Property",
        "name": "deviceStatus",
        "schema": "string"
      },
      {
        "@type": "Command",
        "name": "reboot",
        "request": {
          "name": "delay",
          "schema": "integer"
        }
      }
    ]
  }
```


### :satellite: Usage

Download the source code
```bash
git clone https://github.com/UlisesGascon/POC-azure-iot-digital-twins-modeling
cd POC-azure-iot-digital-twins-modeling
```

Install the project dependencies 
```bash
nvm use
npm i
```

Run the linter:
```bash
npm run lint
npm run lint:fix
```

Run the tests:
```bash
npm run test
npm run test:coverage
```
