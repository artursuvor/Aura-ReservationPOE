import React, { useState } from "react"

export default function Formula() {
  const [baseReservePercent, setBaseReservePercent] = useState("")
  const [resourceReserved, setResourceReserved] = useState("")
  const [reserveEfficiency, setReserveEfficiency] = useState()

  const [baseReservePercentSCND, setBaseReservePercentSCND] = useState("")
  const [resourceReservedSCND, setResourceReservedSCND] = useState("")
  const [reserveEfficiencySCND, setReserveEfficiencySCND] = useState()

  function calculateReserve(baseReserve, resourceReserve, setEfficiency) {
    const baseReserveValue = parseFloat(baseReserve)
    const resourceReservedValue = parseFloat(resourceReserve)

    if (!isNaN(baseReserveValue) && !isNaN(resourceReservedValue)) {
      const efficiency = ((baseReserveValue / resourceReservedValue) - 1) * 100;
      setEfficiency(Math.ceil(efficiency))
      
    } else {
      setEfficiency(0)
    }
  }

  function handleChangeBaseReserve(event, setter, setEfficiencyFunc) {
    const newValue = event.target.value
    setter(newValue)
    calculateReserve(newValue, resourceReserved, setEfficiencyFunc)
  }

  function handleChangeResourceReserved(event, setter, setEfficiencyFunc) {
    const newValue = event.target.value
    setter(newValue)
    calculateReserve(baseReservePercent, newValue, setEfficiencyFunc)
  }

  function calculateResourceReserved(baseReserve, reserveEfficiency) {
    const baseReserveValue = parseFloat(baseReserve)
    const reserveEfficiencyValue = parseFloat(reserveEfficiency)

    if (!isNaN(baseReserveValue) && !isNaN(reserveEfficiencyValue)) {
      const resourceReservedValue = baseReserveValue / ((reserveEfficiencyValue + 100) / 100)
      return resourceReservedValue.toFixed(2)
    }

    return 0
  }

  return (
    <div className="formula">
      <div>
        <input
          type="text"
          className="resourceReserved"
          placeholder="Resource Reserved"
          value={resourceReserved}
          onChange={(e) => handleChangeResourceReserved(e, setResourceReserved, setReserveEfficiency)}
        />
      </div>
      <div>
        <input
          type="text"
          className="baseReserve"
          placeholder="Base Reserve %"
          value={baseReservePercent}
          onChange={(e) => handleChangeBaseReserve(e, setBaseReservePercent, setReserveEfficiency)}
        />
      </div>
      <p className="blueText">Reserve Efficiency: {reserveEfficiency}</p>

      <div>
        <input
          type="text"
          className="baseReservePercent"
          placeholder="Base Reserve %"
          value={baseReservePercentSCND}
          onChange={(e) => {
            setBaseReservePercentSCND(e.target.value);
            const resourceReservedValue = calculateResourceReserved(e.target.value, reserveEfficiencySCND);
            setResourceReservedSCND(resourceReservedValue);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          className="totalReserveEfficiency"
          placeholder="Reserve Efficiency"
          value={reserveEfficiencySCND}
          onChange={(e) => {
            setReserveEfficiencySCND(e.target.value);
            const resourceReservedValue = calculateResourceReserved(baseReservePercentSCND, e.target.value);
            setResourceReservedSCND(resourceReservedValue);
          }}
        />
      </div>
      <p>Resource Reserved: {resourceReservedSCND}</p>
    </div>
  );
}
