import axios from 'axios'

async function formatJson() {
  {
    const url = `https://scunpacked.com/api/v2/ships.json`
    const sourceResponse = await fetch(url)
    const response = await fetch(url)
    const sourceData = await sourceResponse.json()
    const data = await response.json()

    data.forEach((object, index) => {
      delete object['Description']
      delete object['Manufacturer']
      delete object['DamageBeforeDestruction']
      delete object['DamageBeforeDetach']
      delete object.FlightCharacteristics['Acceleration']
      delete object.FlightCharacteristics['AccelerationG']
      delete object.Propulsion['FuelUsage']
      delete object.Propulsion['ThrustCapacity']
      delete object.Propulsion['IntakeToMainFuelRatio']
      delete object.Propulsion['IntakeToTankCapacityRatio']
      delete object.Propulsion['TimeForIntakesToFillTank']
      delete object.Propulsion['ManeuveringTimeTillEmpty']
      delete object['PilotHardpoints']
      delete object['MannedTurrets']
      delete object['RemoteTurrets']
      object.status = 'published'
      object.FlightCharacteristics = []
      object.FlightCharacteristics.push({
        ScmSpeed: sourceData[index].FlightCharacteristics.ScmSpeed,
        MaxSpeed: sourceData[index].FlightCharacteristics.MaxSpeed,
        ZeroToScm: sourceData[index].FlightCharacteristics.ZeroToScm,
        ZeroTomax: sourceData[index].FlightCharacteristics.ZeroToMax,
        ScmToZero: sourceData[index].FlightCharacteristics.ScmToZero,
        MaxToZero: sourceData[index].FlightCharacteristics.MaxToZero,
      })
      object.Propulsion = []
      object.Propulsion.push({
        FuelCapacity: sourceData[index].Propulsion.FuelCapacity,
        FuelIntakeRate: sourceData[index].Propulsion.FuelIntakeRate,
      })
      object.QuantumTravel = []
      object.QuantumTravel.push(sourceData[index].QuantumTravel)
      object.Insurance = []
      object.Insurance.push(sourceData[index].Insurance)
    })

    return data
  }
}

export default async function handler(req, res) {
  const data = new Object(await formatJson())

  if (req.method === 'POST') {
    axios
      .get(
        'https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr&limit=1200'
      )
      .then((resp) => {
        const directusData = resp.data.data

        data.forEach((object, index) => {
          const search = directusData.find(
            (element) => element.ClassName == object.ClassName
          )

          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {
                console.log(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {
                console.log(error)
              })
          }
        })
      })
    res.status(200).send('Succesfully updated ship data')
  } else {
    res.status(200).json(data)
  }
}
