import { Directus } from '@directus/sdk'
import { QueryMany, readByQuery } from '@directus/sdk'
import { stringify } from 'qs'

const directus = new Directus('https://cms.ariscorp.de')

directus.auth.static('ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr')

const ships = directus.items('ships')

export default async function formatJson(sdata) {
  // Replace-Function
  function renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey]
    delete obj[oldKey]
  }
  function flattenObject(ob) {
    var toReturn = {}
    var flatObject
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) {
        continue
      }
      if (typeof ob[i] === 'object') {
        flatObject = flattenObject(ob[i])
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) {
            continue
          }
          toReturn[x] = flatObject[x]
        }
      } else {
        toReturn[i] = ob[i]
      }
    }
    return toReturn
  }
  // Replace Key: ClassName with Key: _slug
  const sData = JSON.parse(JSON.stringify(sdata))
  sData.ships.data.forEach((obj) => renameKey(obj, 'ClassName', '_slug'))

  // Replace Key: Name with Key: model
  sData.ships.data.forEach((obj) => renameKey(obj, 'Name', 'model'))

  // Replace Key: Description with Key: description
  sData.ships.data.forEach((obj) =>
    renameKey(obj, 'Description', 'description')
  )

  // Replace Key: Career with Key: classification
  sData.ships.data.forEach((obj) => renameKey(obj, 'Career', 'classification'))

  // Replace Key: Role with Key: role
  sData.ships.data.forEach((obj) => renameKey(obj, 'Role', 'role'))

  // Replace Key: Size with Key: size
  sData.ships.data.forEach((obj) => renameKey(obj, 'Size', 'size'))

  // Replace Key: Cargo with Key: cargo
  sData.ships.data.forEach((obj) => renameKey(obj, 'Cargo', 'cargo'))

  // Replace Key: Crew with Key: crew
  sData.ships.data.forEach((obj) => renameKey(obj, 'Crew', 'crew'))

  // Replace Key: WeaponCrew with Key: weapon_crew
  sData.ships.data.forEach((obj) => renameKey(obj, 'WeaponCrew', 'weapon_crew'))

  // Replace Key: OperationsCrew with Key: operations_crew
  sData.ships.data.forEach((obj) =>
    renameKey(obj, 'OperationsCrew', 'operations_crew')
  )

  // Replace Key: Mass with Key: mass
  sData.ships.data.forEach((obj) => renameKey(obj, 'Mass', 'mass'))

  // Replace Key: IsSpaceship with Key: isspaceship
  sData.ships.data.forEach((obj) =>
    renameKey(obj, 'IsSpaceship', 'isspaceship')
  )

  // // Replace Key: Manufacturer with Key: manufacturer
  // sData.ships.data.forEach( obj => renameKey( obj, 'Manufacturer', 'manufacturer' ) );

  // // Replace Key: DamageBeforeDestruction with Key: damagebeforedestruction
  // sData.ships.data.forEach( obj => renameKey( obj, 'DamageBeforeDestruction', 'damagebeforedestruction' ) );

  // // Replace Key: DamageBeforeDestruction.Nose with Key: damagebeforedestruction.nose
  // sData.ships.data.forEach( obj => renameKey( obj.damagebeforedestruction, 'Nose', 'nose' ) );

  // // Replace Key: DamageBeforeDestruction.Body with Key: damagebeforedestruction.body
  // sData.ships.data.forEach( obj => renameKey( obj.damagebeforedestruction, 'Body', 'body' ) );

  // // Replace Key: FlightCharacteristics with Key: flightcharacteristics
  // sData.ships.data.forEach( obj => renameKey( obj, 'FlightCharacteristics', 'flightcharacteristics' ) );

  // // Replace Key: FlightCharacteristics.ScmSpeed with Key: flightcharacteristics.scm
  // sData.ships.data.forEach( obj => renameKey( obj.flightcharacteristics, 'ScmSpeed', 'scm' ) );

  // // Replace Key: FlightCharacteristics.MaxSpeed with Key: flightcharacteristics.afterburner
  // sData.ships.data.forEach( obj => renameKey( obj.flightcharacteristics, 'MaxSpeed', 'afterburner' ) );

  // // Replace Key: Propulsion with Key: propulsion
  // sData.ships.data.forEach( obj => renameKey( obj, 'Propulsion', 'propulsion' ) );

  // // Replace Key: Propulsion.FuelCapacity with Key: propulsion.fuelcapacity
  // sData.ships.data.forEach( obj => renameKey( obj.propulsion, 'FuelCapacity', 'fuelcapacity' ) );

  // // Replace Key: Propulsion.FuelIntakeRate with Key: propulsion.fuelintakerate
  // sData.ships.data.forEach( obj => renameKey( obj.propulsion, 'FuelIntakeRate', 'fuelintakerate' ) );

  // // Replace Key: QuantumTravel with Key: qt
  // sData.ships.data.forEach( obj => renameKey( obj, 'QuantumTravel', 'qt' ) );

  // // Replace Key: QuantumTravel.Speed with Key: qt.speed
  // sData.ships.data.forEach( obj => renameKey( obj.qt, 'Speed', 'speed' ) );

  // // Replace Key: QuantumTravel.SpoolTime with Key: qt.spooltime
  // sData.ships.data.forEach( obj => renameKey( obj.qt, 'SpoolTime', 'spooltime' ) );

  // // Replace Key: QuantumTravel.FuelCapacity with Key: qt.qfuelcapacity
  // sData.ships.data.forEach( obj => renameKey( obj.qt, 'FuelCapacity', 'qfuelcapacity' ) );

  // // Replace Key: QuantumTravel.Range with Key: qt.range
  // sData.ships.data.forEach( obj => renameKey( obj.qt, 'Range', 'range' ) );

  // // Replace Key: Insurance with Key: insurance
  // sData.ships.data.forEach( obj => renameKey( obj, 'Insurance', 'insurance' ) );

  // // Replace Key: Insurance.StandardClaimTime with Key: insurance.defclaimtime
  // sData.ships.data.forEach( obj => renameKey( obj.insurance, 'StandardClaimTime', 'defclaimtime' ) );

  // // Replace Key: Insurance.ExpeditedClaimTime with Key: insurance.exclaimtime
  // sData.ships.data.forEach( obj => renameKey( obj.insurance, 'ExpeditedClaimTime', 'exclaimtime' ) );

  // // Replace Key: Insurance.ExpeditedCost with Key: insurance.expeditedcost
  // sData.ships.data.forEach( obj => renameKey( obj.insurance, 'ExpeditedCost', 'expeditedcost' ) );

  // Remove Quotes && Replace "\n" with "<br />"
  const shipjson = JSON.parse(
    JSON.stringify(sData.ships.data)
      .replace(/\\n/g, '<br />')
      .replace(
        /"size":1/g,
        '"size":{"id":"4871eb23-ae79-49df-bda1-bc995e7b7f59"}'
      )
      .replace(
        /"size":2/g,
        '"size":{"id":"5c06c444-b847-43f9-b4c2-620371a4d3b6"}'
      )
      .replace(
        /"size":3/g,
        '"size":{"id":"ccf93964-b9de-4ff1-a621-b6746a9f7c70"}'
      )
      .replace(
        /"size":4/g,
        '"size":{"id":"2e203243-de32-4a62-91d3-e42ccae6dad5"}'
      )
      .replace(
        /"size":5/g,
        '"size":{"id":"2e203243-de32-4a62-91d3-e42ccae6dad5"}'
      )
      .replace(
        /"size":6/g,
        '"size":{"id":"c3d2b78f-2f4e-49ed-9e5d-08769ff65f35"}'
      )
      .replace(
        /"classification":"Ground"/g,
        '"classification":{"id":"03403cf6-aac7-4548-9211-8563e46407f2"}'
      )
      .replace(
        /"classification":"Combat"/g,
        '"classification":{"id":"0807de16-803c-41c7-8f25-4a14e35ff18c"}'
      )
      .replace(
        /"classification":"Industrial"/g,
        '"classification":{"id":"31ddf162-1596-4e58-98b7-a2c9c2b20468"}'
      )
      .replace(
        /"classification":"Personal Transport"/g,
        '"classification":{"id":"50eb351a-4841-4611-b7a7-eab366a81375"}'
      )
      .replace(
        /"classification":"Transporter"/g,
        '"classification":{"id":"7265d86e-3160-415f-9d9a-b95c4a9f8f7c"}'
      )
      .replace(
        /"classification":"Exploration"/g,
        '"classification":{"id":"a3c4fe9a-3ff1-4213-b06f-8f91a93e0cf0"}'
      )
      .replace(
        /"classification":"Support"/g,
        '"classification":{"id":"ba3d6af4-d2fd-45f2-9b7a-5ecd077c66bf"}'
      )
      .replace(
        /"classification":"Competition"/g,
        '"classification":{"id":"d5c7abd9-ad71-4884-af5b-4423e3c8f360"}'
      )
      .replace(
        /"classification":"Multi-Role"/g,
        '"classification":{"id":"e0d0a4cf-4cbf-42fd-9b5c-bd6d804c4c1f"}'
      )
      .replace(/"classification":"@LOC_PLACEHOLDER"/g, '"classification":null')
      .replace(
        /"role":"Transporter"/g,
        '"role":{"id":"08b85e04-fc8b-434c-8137-84aedefde625"}'
      )
      .replace(
        /"role":"Heavy Refuelling"/g,
        '"role":{"id":"0feaed74-1cc0-4413-877f-381333b51ba0"}'
      )
      .replace(
        /"role":"Racing"/g,
        '"role":{"id":"10499fa1-6d65-4cf0-bcf2-b511623cabe8"}'
      )
      .replace(
        /"role":"Medium Freight [/] Gun Ship"/g,
        '"role":{"id":"1c24a945-95e7-4ff3-9ef9-84902300f3c7"}'
      )
      .replace(
        /"role":"Medium Fighter [/] Medium Freight"/g,
        '"role":{"id":"1f1ab7b4-448a-4c90-b596-d59e75fb9350"}'
      )
      .replace(
        /"role":"Medium Freight"/g,
        '"role":{"id":"228bfab0-bc88-4f9e-9c1e-9e5e72f97e87"}'
      )
      .replace(
        /"role":"Personal Transport"/g,
        '"role":{"id":"2a8f5197-4ce2-4325-add7-767268c15573"}'
      )
      .replace(
        /"role":"Combat"/g,
        '"role":{"id":"315bb6c2-859b-4b48-9836-c3e46937bc79"}'
      )
      .replace(
        /"role":"Medium Data"/g,
        '"role":{"id":"3ac569b1-ce1e-480a-a2fd-fbf884cecd8e"}'
      )
      .replace(
        /"role":"Snub Fighter"/g,
        '"role":{"id":"3bb80ac2-9b1e-43b8-bbd3-77eb45e7169e"}'
      )
      .replace(
        /"role":"Heavy Salvage"/g,
        '"role":{"id":"424050bd-0fb1-4e83-9b24-3adeb4d9aa24"}'
      )
      .replace(
        /"role":"Frigate"/g,
        '"role":{"id":"43ecb325-10c3-44a2-bb9a-bd259f3ed479"}'
      )
      .replace(
        /"role":"Medium Mining"/g,
        '"role":{"id":"54624d6a-e092-4b6a-b704-2840756d9bdf"}'
      )
      .replace(
        /"role":"Gunship"/g,
        '"role":{"id":"651f9033-4cc7-48d2-9932-a8691e804260"}'
      )
      .replace(
        /"role":"Stealth Bomber"/g,
        '"role":{"id":"7f587583-2238-4c02-b762-a01f93c95e40"}'
      )
      .replace(
        /"role":"Medium Fighter"/g,
        '"role":{"id":"858d71fc-5902-4b7c-92b7-f8c9f6d14a1f"}'
      )
      .replace(
        /"role":"Light Fighter"/g,
        '"role":{"id":"8839cbd6-ba2c-49ff-bb32-69dd39a5857a"}'
      )
      .replace(
        /"role":"Fighter"/g,
        '"role":{"id":"8962da1a-831d-41a1-ae24-266c5d7a93f8"}'
      )
      .replace(
        /"role":"Starter [/] Light Freight"/g,
        '"role":{"id":"8a9d7841-7aea-47c1-ae95-861a0b3f3ccf"}'
      )
      .replace(
        /"role":"Medical"/g,
        '"role":{"id":"8c113e31-cf1a-44ad-955d-ac1d08b77da6"}'
      )
      .replace(
        /"role":"Heavy Bomber"/g,
        '"role":{"id":"91dc8857-065d-4678-a817-9113a6834fb9"}'
      )
      .replace(
        /"role":"Destroyer"/g,
        '"role":{"id":"99d9b9aa-a6a6-48d5-99a5-e35a4b070892"}'
      )
      .replace(
        /"role":"Heavy Fighter"/g,
        '"role":{"id":"9c83ceec-53c0-4fbc-aeab-320d5a1833a1"}'
      )
      .replace(
        /"role":"Destroyer"/g,
        '"role":{"id":"99d9b9aa-a6a6-48d5-99a5-e35a4b070892"}'
      )
      .replace(
        /"role":"Heavy Fighter"/g,
        '"role":{"id":"9c83ceec-53c0-4fbc-aeab-320d5a1833a1"}'
      )
      .replace(
        /"role":"Ground"/g,
        '"role":{"id":"a8131adb-eb2c-41fc-84ad-3978b938dd9d"}'
      )
      .replace(
        /"role":"Support"/g,
        '"role":{"id":"ac5e9466-8f2c-4ffb-b300-57a7bd9f1ce5"}'
      )
      .replace(
        /"role":"Stealth Fighter"/g,
        '"role":{"id":"bbb48cf5-b141-4756-a490-d74dc0dc81ce"}'
      )
      .replace(
        /"role":"Drop Ship"/g,
        '"role":{"id":"bda91274-f2d8-4e2e-b9ac-755c5c5c5058"}'
      )
      .replace(
        /"role":"Heavy Freight"/g,
        '"role":{"id":"be00bbc6-c583-4e9e-833a-7e3b9dc3e016"}'
      )
      .replace(
        /"role":"Corvette"/g,
        '"role":{"id":"c222951d-4228-4e48-8495-900dc7e558e7"}'
      )
      .replace(
        /"role":"Light Freight"/g,
        '"role":{"id":"c6b467ef-f0b6-45e7-bfc0-af7276600cb1"}'
      )
      .replace(
        /"role":"Luxury"/g,
        '"role":{"id":"c6f991c7-16d5-486d-914d-95da3707315f"}'
      )
      .replace(
        /"role":"Bomber"/g,
        '"role":{"id":"ca9fe93b-143f-4fde-80f5-3de520c03a2f"}'
      )
      .replace(
        /"role":"Courier"/g,
        '"role":{"id":"cde1466a-41c3-4d5a-8add-822db0b3ffd5"}'
      )
      .replace(
        /"role":"Light Science"/g,
        '"role":{"id":"d14b58d6-93f5-4660-aeeb-3fb4e3bd24fe"}'
      )
      .replace(
        /"role":"Interdiction"/g,
        '"role":{"id":"d4b4363b-880d-420d-a260-0f41ec3128e0"}'
      )
      .replace(
        /"role":"Light Mining"/g,
        '"role":{"id":"eb27b0e8-7b08-41f9-8bf7-3bfaa382645a"}'
      )
      .replace(
        /"role":"Reporting"/g,
        '"role":{"id":"ef9c4bd8-d414-444d-88ae-4f17beb1bc23"}'
      )
      .replace(
        /"role":"Starter [/] Pathfinder"/g,
        '"role":{"id":"f446ab3f-f49b-4166-b5df-9bb1c9d4734c"}'
      )
      .replace(
        /"role":"Pathfinder"/g,
        '"role":{"id":"4e5a03b3-aa4b-44c4-9632-7aa4d5d1486a"}'
      )
      .replace(
        /"role":"Expedition"/g,
        '"role":{"id":"f6d64c8f-52ec-48bf-a71a-9c760edaad6f"}'
      )
      .replace(
        /"role":"Passenger"/g,
        '"role":{"id":"f770c5fd-c1f2-4195-adf1-45fb652369d2"}'
      )
      .replace(
        /"role":"Interceptor"/g,
        '"role":{"id":"faeeb4f6-259d-45d9-8123-4cb047690185"}'
      )
      .replace(
        /"role":"Exploration"/g,
        '"role":{"id":"63f92ec8-03e4-4ead-adb6-d633bd294f19"}'
      )
  )
  // const shipdata = shipjson
  //   .replace(/"([^"]+)":/g, '$1:')
  //   .replace(/\\n/g, '<br />')
  //   .replace('}{', '},{')

  // const ttt = shipjson.forEach(obj => (JSON.parse((JSON.stringify(obj).replace("\"size\":2", "\"size\":\"5c06c444-b847-43f9-b4c2-620371a4d3b6\"")))))

  // await articles.deleteMany([15, 42]);

  await ships.createMany(shipjson)
}
